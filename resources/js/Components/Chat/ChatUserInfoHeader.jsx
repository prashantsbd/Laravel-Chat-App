import React from 'react'

function ChatUserInfoHeader({receiver}) {
    return (
        <>
            <div className="msg-view-header sticky top-0 justify-between items-center flex py-2 border-b border-slate-100">
                <div className="profiling flex align-middle justify-center">
                    <div className="pp">
                        <img className="h-9 pe-3" src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" />
                    </div>
                    <div className="user-name justify-center">{receiver.name}</div>
                </div>
                <div className="multimedia flex">
                    <i className="fa fa-video me-4"></i>
                    <i className="fa fa-phone"></i>
                </div>
            </div>
        </>
    )
}

export default ChatUserInfoHeader
