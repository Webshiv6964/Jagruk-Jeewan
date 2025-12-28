import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import MessageBubble from './MessageBubble';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Namaste! I am Jagruk Jeewan. How are you feeling today? Please describe your symptoms.",
            sender: 'bot'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await axios.post('https://spiritual-pru-shiv345y657u-dcbc6d56.koyeb.app/api/chat', { message: input });

            const botMessage = {
                id: Date.now() + 1,
                text: response.data.message,
                sender: 'bot',
                data: response.data.type === 'medical_advice' ? response.data.data : null
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching response:", error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "I'm having trouble connecting to my upgraded knowledge base. Please try again in a moment.",
                sender: 'bot'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                {isLoading && (
                    <div className="flex justify-start animate-fade-in">
                        <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-slate-500 text-sm">
                            <FaSpinner className="animate-spin text-emerald-500" />
                            Thinking...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
                <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto flex gap-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your symptoms here (e.g., 'I have a fever and headache')..."
                        className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 block w-full p-4 transition-all shadow-inner placeholder-slate-400"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="inline-flex items-center justify-center p-4 text-white bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl hover:from-emerald-600 hover:to-cyan-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-emerald-500/30"
                    >
                        <FaPaperPlane className="text-lg" />
                    </button>
                </form>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                    Jagruk Jeewan can make mistakes. Consider checking important information.
                </p>
            </div>
        </div>
    );
};

export default ChatInterface;
