import { Link } from '@inertiajs/react'
import React from 'react'

function ChatSidebar({ recentMessages }) {
    return (
        <>
            <div className="search relative flex justify-between px-5 border-b border-slate-100 pb-4 h-10 text-slate-300">
                <div className="search-input">
                    <form action="" className='flex justify-center items-center'>
                        <i className="fa fa-search"></i>
                        <input type="search" className="font-light border-none focus:ring-0" placeholder="Search" />
                    </form>
                </div>
                <div className="add-btn">
                    <button><i className="fa fa-address-book"></i></button>
                </div>
            </div>
            {
                recentMessages.map((user, index) => (
                    <Link 
                        href={`/chat/${user.user_id}`}
                    key={index} className="each-contact px-3 py-1 flex items-center transition hover:cursor-pointer hover:bg-slate-200">
                        <div className="pp-container">
                            <img className="h-9 pe-3" src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" />
                        </div>
                        <div className="detailing-container flex-col">
                            <div className="name-field font-medium">{user.name.length > 0? user.name : "N/A "}</div>
                            <div className="last-msg overflow-hidden text-sm text-slate-600">{user.message}</div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default ChatSidebar
