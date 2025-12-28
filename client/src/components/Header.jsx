import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="glass-morphism sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="bg-gradient-to-tr from-emerald-400 to-cyan-500 p-2 rounded-xl shadow-lg">
                    <FaHeartbeat className="text-white text-2xl" />
                </div>
                <div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
                        Jagruk Jeewan
                    </h1>
                    <p className="text-xs text-slate-500 font-medium">Your Personal Health Assistant</p>
                </div>
            </div>
            <div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                    Beta • Safe Mode
                </span>
            </div>
        </header>
    );
};

export default Header;
