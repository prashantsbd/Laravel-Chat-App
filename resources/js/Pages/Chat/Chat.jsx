import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Chat({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >

        <div>
            <div className="main-container overflow-hidden bg-white flex h-screen">
                <div className="left basis-2/6 pt-3 overflow-x-hidden overflow-y-auto flex-col border-e-2">
                    <div className="search relative flex justify-between px-5 border-b border-slate-100 pb-4 h-10 text-slate-300">
                    <div className="search-input">
                        <form action="">
                        <i className="fa fa-search"></i>
                        <input type="search" className="font-light border-none focus:ring-0" placeholder="Search" />
                        </form>
                    </div>
                    <div className="add-btn">
                        <button><i className="fa fa-address-book"></i></button>
                    </div>
                    </div>
                    <div className="each-contact px-3 py-1 flex items-center transition hover:cursor-pointer hover:bg-slate-200">
                    <div className="pp-container">
                        <img className="h-9 pe-3" src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" />
                    </div>
                    <div className="detailing-container flex-col"> 
                        <div className="name-field font-medium">Name</div>
                        <div className="last-msg overflow-hidden text-sm text-slate-600">message</div>
                    </div>
                    </div>
                </div>
                <div className="right overflow-hidden basis-4/6 flex-col relative px-4">
                    <div className="msg-view-header sticky top-0 justify-between items-center flex py-2 border-b border-slate-100">
                        <div className="profiling flex align-middle justify-center">
                            <div className="pp">
                            <img className="h-9 pe-3" src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" />
                            </div>
                            <div className="user-name justify-center">name</div>
                        </div>
                        <div className="multimedia flex">
                            <i className="fa fa-video me-4"></i>
                            <i className="fa fa-phone"></i>
                        </div>
                    </div>
                    <div className="msg-content overflow-y-auto overflow-x-hidden top-33 flex-col">
                    <div className="received-msg flex justify-start">
                        <div className="Rmsg-container max-w-[80%] rounded-md px-2 py-1 mt-2 bg-red-300">
                        <p>hello</p>
                        </div>
                    </div>
                    
                    <div className="sent-msg flex justify-end">
                        <div className="Rmsg-container max-w-[80%] rounded-md px-2 py-1 mt-2  bg-blue-400">
                        <p>hello</p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full input-field flex absolute bottom-0 mt-2 mb-1">
                    <div className="typing-field w-[80%]">
                        <input className="w-full border-2 focus:border-slate-400 rounded-xl px-3 focus:ring-0" type="text" placeholder="Write a message" />
                    </div>
                    <div className="voice-input ms-2 flex items-center cursor-pointer">
                        <i className="fa fa-microphone"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
