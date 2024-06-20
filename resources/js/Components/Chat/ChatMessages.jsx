import { Fragment } from "react"

function ChatMessages({ msg, auth_id }) {
    const isReceivedMessage = (message) => {
        return message.receiver_id === auth_id;
    }
    return (
        <>
            {
                (msg || []).map((message, index) => (
                    <Fragment key={index}>
                        <div className={`${isReceivedMessage(message) ? 'received-msg justify-start' : 'sent-msg justify-end'} flex `}>
                            <div className={`${isReceivedMessage(message) ? 'Rmsg-container bg-red-300' : 'Smsg-container bg-blue-400'} max-w-[80%] rounded-md px-2 py-1 mt-2`}>
                                <p>{message?.message}</p>
                            </div>
                        </div>
                    </Fragment>
                ))
            }
        </>
    )
}

export default ChatMessages
