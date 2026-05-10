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

  // অটো স্ক্রল লজিক
  useEffect(() => {
    if (isOpen && !isMinimized) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, loading, isOpen, isMinimized]);

  // ভয়েস ইনপুট লজিক
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

  // মেসেজ পাঠানোর মেইন লজিক
  const handleSendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = { role: "user", text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setLoading(true); // লোডিং শুরু
    const currentMessage = message;
    setMessage("");

    try {
      const response = await fetch("https://protfoilo-backend.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentMessage }),
      });
      const data = await response.json();
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", text: data.reply || "Sorry, no response." },
      ]);
    } catch {
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", text: "❌ Connection failed. Please try again." },
      ]);
    } finally {
      setLoading(false); // লোডিং শেষ
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
            
            {/* Header */}
            <div className="bg-[#161b22] px-4 h-16 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-[#d5ff3f] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">AI ASSISTANT</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#d5ff3f] rounded-full animate-pulse"></span>
                    <p className="text-gray-400 text-[9px] uppercase font-medium">Online</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 text-gray-400 hover:text-[#d5ff3f]">
                  {isMinimized ? "◻️" : "—"}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-red-500">
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
                  
                  {/* Loading Typing Animation */}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-[#1c2128] text-gray-400 px-4 py-3 rounded-2xl text-xs flex items-center gap-2">
                        <span className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </span>
                        AI is typing...
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Input Field Area */}
                <div className="p-4 bg-[#161b22] border-t border-white/5">
                  <div className="flex gap-2 items-center bg-[#0a0c10] rounded-2xl p-1.5 border border-white/10 focus-within:border-[#d5ff3f]/50 transition-all">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      // সমাধান ১: এন্টার বাটনে মেসেজ পাঠানো
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSendMessage();
                      }}
                      placeholder="Type a message..."
                      className="flex-1 bg-transparent text-white px-3 py-2 outline-none text-sm"
                    />
                    
                    {/* ভয়েস বাটন */}
                    <button 
                      onClick={isListening ? stopVoiceInput : startVoiceInput} 
                      className={`p-2.5 rounded-xl transition-all ${isListening ? "bg-red-500 text-white animate-pulse" : "bg-gray-700 text-gray-300 hover:text-white"}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a8 8 0 01-8 8m0 0-4-4m4 4l4-4m-4-12a8 8 0 018 8v4l4 4m-12 0H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
                      </svg>
                    </button>

                    {/* সেন্ড বাটন */}
                    <button 
                      onClick={handleSendMessage} 
                      disabled={loading || !message.trim()}
                      className={`p-2.5 rounded-xl transition-all ${loading || !message.trim() ? "bg-gray-800 text-gray-500" : "bg-[#d5ff3f] text-black hover:scale-105 active:scale-95"}`}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
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