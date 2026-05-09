import { useState, useEffect, useRef } from "react";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "ai",
      text: "👋 Hello! I'm your AI Portfolio Assistant. Ask me anything about projects, skills, services, or contact information.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, loading, isOpen, isMinimized]);

  const startVoiceInput = () => {
    if (!window.webkitSpeechRecognition) {
      alert("Voice recognition is not supported in your browser");
      return;
    }
    if (recognitionRef.current) recognitionRef.current.abort();
    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.interimResults = true;
    setIsListening(true);
    recognition.onresult = (event) => setMessage(event.results[0][0].transcript);
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };
    recognition.start();
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current) recognitionRef.current.abort();
    setIsListening(false);
  };

  const handleSendMessage = async () => {
    if (!message.trim() || loading) return;
    const userMessage = { role: "user", text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setLoading(true);
    const currentMessage = message;
    setMessage("");
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentMessage }),
      });
      const data = await response.json();
      setChatHistory((prev) => [...prev, { role: "ai", text: data.reply || "Sorry, no response." }]);
    } catch {
      setChatHistory((prev) => [...prev, { role: "ai", text: "❌ Connection failed." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group transition-transform hover:scale-110 active:scale-95"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#d5ff3f] animate-ping opacity-40"></div>
            <div className="relative bg-[#d5ff3f] rounded-full p-4 shadow-[0_0_20px_rgba(213,255,63,0.4)]">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
          <div className={`bg-[#0a0c10] rounded-3xl shadow-2xl border border-white/10 flex flex-col transition-all duration-300 overflow-hidden ${isMinimized ? "w-[320px] h-16" : "w-[380px] h-[580px]"}`}>
            
            {/* Fixed Header Alignment */}
            <div className="bg-[#161b22] px-4 h-16 flex items-center justify-between border-b border-white/5 flex-nowrap">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex-shrink-0 w-10 h-10 bg-[#d5ff3f] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-white font-bold text-xs sm:text-sm tracking-tight whitespace-nowrap">AI ASSISTANT</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#d5ff3f] rounded-full animate-pulse"></span>
                    <p className="text-gray-400 text-[9px] uppercase font-medium whitespace-nowrap">Online</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 text-gray-400 hover:text-[#d5ff3f] transition">
                  {isMinimized ? 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg> : 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  }
                </button>
                {!isMinimized && (
                   <button onClick={() => setChatHistory([{role: 'ai', text: 'Chat cleared!'}])} className="p-2 text-gray-400 hover:text-red-400 transition">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                   </button>
                )}
                <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {chatHistory.map((chat, index) => (
                    <div key={index} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${chat.role === "user" ? "bg-[#d5ff3f] text-black font-medium" : "bg-[#1c2128] text-gray-200"}`}>
                        {chat.text}
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                <div className="p-4 bg-[#161b22] border-t border-white/5">
                   {/* Input logic here same as before */}
                   <div className="flex gap-2 items-center bg-[#0a0c10] rounded-2xl p-1.5 border border-white/10">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent text-white px-3 py-2 outline-none text-sm"
                    />
                    <button onClick={isListening ? stopVoiceInput : startVoiceInput} className={`p-2.5 rounded-xl transition-all ${isListening ? "bg-red-500 text-white" : "bg-gray-600 text-white hover:scale-105"}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a8 8 0 01-8 8m0 0-4-4m4 4l4-4m-4-12a8 8 0 018 8v4l4 4m-12 0H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" /></svg>
                    </button>
                    <button onClick={handleSendMessage} className="bg-[#d5ff3f] p-2.5 rounded-xl text-black hover:scale-105 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default ChatComponent;