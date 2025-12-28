import React, { useState, useEffect } from 'react';

const DisclaimerModal = ({ onAccept }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white max-w-md w-full rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-amber-50 p-6 border-b border-amber-100">
                    <h2 className="text-xl font-bold text-amber-800 flex items-center gap-2">
                        ⚠️ Important Disclaimer
                    </h2>
                </div>
                <div className="p-6 space-y-4">
                    <p className="text-slate-600">
                        <strong>Jagruk Jeewan</strong> is an AI-powered assistant for informational purposes only.
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-500 space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <li>It does <strong>not</strong> provide medical diagnosis or treatment.</li>
                        <li>In case of emergency, call your local emergency number immediately.</li>
                        <li>Always consult a qualified healthcare provider for any medical concerns.</li>
                    </ul>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                    <button
                        onClick={onAccept}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all shadow-lg hover:shadow-emerald-200"
                    >
                        I Understand & Agree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerModal;
