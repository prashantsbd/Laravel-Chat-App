import ChatInput from '@/Components/Chat/ChatInput';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatSidebar from '@/Components/Chat/ChatSidebar';
import ChatUserInfoHeader from '@/Components/Chat/ChatUserInfoHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Chat(props) {
    return (
        <AuthenticatedLayout
            user={props.auth.user}
        >
            <div>
                <div className="main-container overflow-hidden bg-white flex h-screen">
                    <div className="left basis-2/6 pt-3 overflow-x-hidden overflow-y-auto flex-col border-e-2">
                        <ChatSidebar recentMessages={props.recentMessages} />
                    </div>
                    <div className="right overflow-hidden basis-4/6 flex-col relative px-4">
                        {
                            props.receiver?.id ?
                                <>
                                    <ChatUserInfoHeader receiver={props.receiver}/>
                                    <div className="msg-content overflow-y-auto overflow-x-hidden top-33 flex-col">
                                        <ChatMessages msg={props.messages} auth_id={props.auth?.user?.id}/>
                                    </div>
                                    <div className="w-full input-field flex fixed bottom-0 mt-2 mb-1">
                                        <ChatInput receiver={props.receiver}/>
                                    </div>
                                </>
                                :
                                (
                                    <div className="flex justify-center items-center bg-slate-100 h-screen">
                                        <p className='font-bold text-3xl text-gray-500'>
                                            Please select a user to start chatting...
                                        </p>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
