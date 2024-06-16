import React from 'react'

function ChatMessages({msg}) {
    return (
        <>
            <div className="received-msg flex justify-start">
                <div className="Rmsg-container max-w-[80%] rounded-md px-2 py-1 mt-2 bg-red-300">
                    <p>{msg}</p>
                </div>
            </div>

            <div className="sent-msg flex justify-end">
                <div className="Rmsg-container max-w-[80%] rounded-md px-2 py-1 mt-2  bg-blue-400">
                    <p>{msg}</p>
                </div>
            </div>
        </>
    )
}

export default ChatMessages
