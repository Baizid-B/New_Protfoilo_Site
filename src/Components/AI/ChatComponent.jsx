import { useState, useEffect, useRef } from "react";

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null); // অটো স্ক্রোল করার জন্য

  // নতুন মেসেজ আসলে নিচে স্ক্রোল হবে
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, loading]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newChat = [...chatHistory, { role: "user", text: message }];
    setChatHistory(newChat);
    setLoading(true);
    setMessage(""); // মেসেজ পাঠানোর সাথে সাথে ইনপুট ক্লিয়ার করা (User experience ভালো হয়)

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });

      const data = await response.json();
      
      // ব্যাক-এন্ডের 'reply' ফিল্ডটি সেট করা
      setChatHistory([...newChat, { role: "ai", text: data.reply || "No reply from AI" }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory([...newChat, { role: "ai", text: "সার্ভারের সাথে কানেক্ট করা যাচ্ছে না!" }]);
    } finally {
      setLoading(false);
    }
  };

  // এন্টার বাটন চাপলে মেসেজ যাবে
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>AI Assistant</h2>
      <div style={{ 
        border: "1px solid #ddd", 
        height: "400px", 
        overflowY: "auto", 
        marginBottom: "10px", 
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}>
        {chatHistory.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.role === "user" ? "right" : "left", margin: "10px 0" }}>
            <div style={{ 
              background: msg.role === "user" ? "#007bff" : "#ffffff", 
              color: msg.role === "user" ? "white" : "#333", 
              display: "inline-block", 
              padding: "10px 15px", 
              borderRadius: "15px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              maxWidth: "80%",
              wordWrap: "break-word"
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <p style={{ color: "#888", fontStyle: "italic" }}>AI is typing...</p>}
        <div ref={chatEndRef} /> {/* স্ক্রোল টার্গেট */}
      </div>
      
      <div style={{ display: "flex", gap: "10px" }}>
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          onKeyDown={handleKeyPress}
          placeholder="কিছু লিখুন..."
          style={{ flex: 1, padding: "12px", borderRadius: "5px", border: "1px solid #ccc" }}
          disabled={loading}
        />
        <button 
          onClick={handleSendMessage} 
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer"
          }}
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;