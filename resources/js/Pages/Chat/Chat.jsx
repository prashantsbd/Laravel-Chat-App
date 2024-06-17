import ChatInput from '@/Components/Chat/ChatInput';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatSidebar from '@/Components/Chat/ChatSidebar';
import ChatUserInfoHeader from '@/Components/Chat/ChatUserInfoHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Chat(props) {
    console.log(props)
    return (
        <AuthenticatedLayout
            user={props.auth.user}
        >
            <div>
                <div className="main-container overflow-hidden bg-white flex h-screen">
                    <div className="left basis-2/6 pt-3 overflow-x-hidden overflow-y-auto flex-col border-e-2">
                        <ChatSidebar />
                    </div>
                    <div className="right overflow-hidden basis-4/6 flex-col relative px-4">
                        <ChatUserInfoHeader/>
                        <div className="msg-content overflow-y-auto overflow-x-hidden top-33 flex-col">
                            <ChatMessages msg="hello" />
                        </div>
                        <div className="w-full input-field flex fixed bottom-0 mt-2 mb-1">
                            <ChatInput/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
