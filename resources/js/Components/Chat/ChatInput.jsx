import { useForm } from '@inertiajs/react';
import React from 'react'
import TextInput from '../TextInput';

function ChatInput({receiver}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });
    const submit = (e) => {
        e.preventDefault();
        reset('message');
        post(route("chat.store", receiver.id));
    };
    return (
        <>
            <div className="typing-field w-[60%]">
                <form onSubmit={submit}>
                    <TextInput 
                    className="w-full border-2 focus:border-slate-400 rounded-xl px-3 focus:ring-0" 
                    type="text" 
                    name="message"
                    id="message"
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder="Write a message" />
                </form>
            </div>
            <div className="voice-input ms-2 flex items-center cursor-pointer">
                <i className="fa fa-microphone"></i>
            </div>
        </>
    )
}

export default ChatInput
