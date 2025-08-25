// src/components/ChatBot.tsx
import React, { useState } from 'react';

const ChatBot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I am Niaa, your admission assistant. How can I help you?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);
    setIsTyping(true);
    // API call here if needed
    setChatMessages(prev => [...prev, { type: 'bot', message: 'This is a mock reply.' }]);
    setIsTyping(false);
    setChatInput('');
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isChatOpen && (
        <div className="bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`my-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${
                  msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}>
                  {msg.message}
                </span>
              </div>
            ))}
            {isTyping && <p className="text-gray-500 text-sm">Typing...</p>}
          </div>
          <form onSubmit={handleChatSubmit} className="flex border-t">
            <input 
              value={chatInput} 
              onChange={e => setChatInput(e.target.value)} 
              className="flex-1 px-3 py-2 outline-none"
              placeholder="Type a message"
            />
            <button type="submit" className="px-4 py-2 bg-[#ffaf00] font-bold">Send</button>
          </form>
        </div>
      )}
      <button 
        className="bg-[#ffaf00] text-[#142143] px-4 py-2 rounded-full shadow-lg font-bold"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? 'Close Chat' : 'Chat with us'}
      </button>
    </div>
  );
};

export default ChatBot;
