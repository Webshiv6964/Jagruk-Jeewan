import React from 'react';
import classNames from 'classnames';

const MessageBubble = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div className={classNames("flex w-full mb-4 animate-slide-up", {
            "justify-end": isUser,
            "justify-start": !isUser
        })}>
            <div className={classNames("max-w-[80%] md:max-w-[70%] p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed", {
                "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-br-none": isUser,
                "bg-white border border-slate-100 text-slate-700 rounded-bl-none shadow-md": !isUser
            })}>
                {message.text}

                {/* Structured Data Display for Medical Advice */}
                {message.data && (
                    <div className="mt-4 space-y-3 bg-slate-50 p-3 rounded-lg border border-slate-100/50 text-slate-800">
                        <div>
                            <strong className="text-emerald-700 block text-xs uppercase tracking-wide mb-1">Condition</strong>
                            <p className="font-semibold">{message.data.condition}</p>
                        </div>

                        <div>
                            <strong className="text-emerald-700 block text-xs uppercase tracking-wide mb-1">Causes</strong>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                {message.data.causes.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                        </div>

                        <div>
                            <strong className="text-blue-600 block text-xs uppercase tracking-wide mb-1">First Aid (Immediate Steps)</strong>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                {message.data.first_aid.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        {message.data.when_to_see_doctor && (
                            <div className="bg-red-50 p-2 rounded border border-red-100">
                                <strong className="text-red-600 block text-xs uppercase tracking-wide mb-1">When to see a Doctor</strong>
                                <ul className="list-disc list-inside text-sm space-y-1 text-red-800">
                                    {message.data.when_to_see_doctor.map((w, i) => <li key={i}>{w}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;
