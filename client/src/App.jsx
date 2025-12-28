import React, { useState } from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import DisclaimerModal from './components/DisclaimerModal';

function App() {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);

  return (
    <div className="h-screen w-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      {!hasAcceptedDisclaimer && (
        <DisclaimerModal onAccept={() => setHasAcceptedDisclaimer(true)} />
      )}

      <div className={`flex flex-col h-full transition-all duration-500 ${!hasAcceptedDisclaimer ? 'blur-sm scale-95 opacity-50 pointer-events-none' : 'blur-0 scale-100 opacity-100'}`}>
        <Header />
        <main className="flex-1 overflow-hidden relative max-w-5xl mx-auto w-full w-full bg-white shadow-2xl md:my-4 md:rounded-2xl border border-slate-100">
          <ChatInterface />
        </main>
      </div>
    </div>
  );
}

export default App;
