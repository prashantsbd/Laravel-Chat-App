import React from 'react'

function ChatInput() {
    return (
        <>
            <div className="typing-field w-[60%]">
                <input className="w-full border-2 focus:border-slate-400 rounded-xl px-3 focus:ring-0" type="text" placeholder="Write a message" />
            </div>
            <div className="voice-input ms-2 flex items-center cursor-pointer">
                <i className="fa fa-microphone"></i>
            </div>
        </>
    )
}

export default ChatInput
