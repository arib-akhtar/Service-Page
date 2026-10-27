import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, MessageCircle } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hey there! I'm Aivon Tech GPT, your AI assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading, isOpen]);

  // Smart local responses
  const getSmartReply = (query) => {
    const q = query.toLowerCase();
    if (q.includes('service') || q.includes('what do you do')) {
      return "We offer 8 specialized services across 3 streams:\n\n🟢 Growth & Ads: Marketing, Social Media, Ad Creatives\n🟣 Creative & Content: Graphic Design, Video Editing, Content Management\n🟠 Tech & Automation: Web Development, AI Tools";
    } else if (q.includes('market') || q.includes('plan')) {
      return "🚀 Marketing & Growth is our flagship service! We offer two plans:\n\n• Business Starter (₹1,500 / 10 Days) — 2 free designs, ads setup, 10 days management\n• Business Intermediate (₹5,000 / Month) — 4 premium designs, video creative support, meta setup, performance report, 10 days full management support";
    } else if (q.includes('quote') || q.includes('price') || q.includes('cost')) {
      return "💰 Our Marketing service has fixed plans. All other services have customized pricing based on your requirements. Let's chat on WhatsApp to get you an accurate quote!";
    } else if (q.includes('human') || q.includes('talk') || q.includes('whatsapp') || q.includes('contact')) {
      return "whatsapp_link";
    } else if (q.includes('tech stack') || q.includes('technologies')) {
      return "⚡ We use modern cutting-edge technologies including React.js, Tailwind CSS, JavaScript, Vite, Node.js, and advanced AI integration tools to build high-performance web applications.";
    } else {
      return "Thank you for reaching out to Aivon Tech GPT! How else can I assist you today?";
    }
  };

  const handleSendMessage = async (e, customText) => {
    if (e) e.preventDefault();
    const textToSend = customText !== undefined ? customText : inputValue;
    if (!textToSend.trim() || loading) return;

    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    if (customText === undefined) setInputValue('');
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error('VITE_GEMINI_API_KEY is not defined in environment');
      }
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: {
              parts: [
                {
                  text: "You are Aivon Tech GPT, the official AI assistant for Aivon Tech (an MSME-certified digital services and web development agency). Help clients with web development, AI automation, marketing, graphic design, and video editing. Be professional, concise, and guide users to WhatsApp for custom quotes."
                }
              ]
            },
            contents: [
              {
                parts: [{ text: textToSend }]
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      
      let botReply = "";
      if (textToSend.toLowerCase().includes('human') || textToSend.toLowerCase().includes('whatsapp') || textToSend.toLowerCase().includes('talk')) {
        botReply = "whatsapp_link";
      } else if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        botReply = data.candidates[0].content.parts[0].text;
      } else {
        botReply = getSmartReply(textToSend);
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botReply }
      ]);
    } catch (error) {
      console.warn("Gemini API request failed, gracefully falling back to smart local response:", error);
      const fallbackReply = textToSend.toLowerCase().includes('human') || textToSend.toLowerCase().includes('whatsapp') || textToSend.toLowerCase().includes('talk')
        ? "whatsapp_link" 
        : getSmartReply(textToSend);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: fallbackReply }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickPrompt = (text) => {
    handleSendMessage(null, text);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 font-sans">
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[380px] max-w-[380px] bg-[#090d16] text-white rounded-2xl shadow-2xl border border-amber-500/30 flex flex-col overflow-hidden mb-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#121824] px-4 py-3 flex items-center justify-between border-b border-amber-500/20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[#FFD700]">
                  <Bot size={20} />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#121824]"></span>
              </div>
              <div>
                <h3 className="font-semibold text-sm bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent">
                  Aivon Tech GPT
                </h3>
                <span className="text-xs text-emerald-400 font-medium">Online</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-[#FFD700] p-1 rounded-lg hover:bg-amber-500/10 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-[320px] overflow-y-auto flex flex-col space-y-3 bg-[#06090f] whitespace-pre-line">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-br-none shadow-md' 
                    : 'bg-[#121824] text-slate-200 rounded-bl-none border border-amber-500/20'
                }`}>
                  {msg.text === "whatsapp_link" ? (
                    <div className="space-y-2">
                      <p className="bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] bg-clip-text text-transparent font-medium">
                        📞 Absolutely! You can reach our team directly on WhatsApp:
                      </p>
                      <a 
                        href="https://wa.me/918789963987?text=Hello%20Aivon%20Tech,%20I%20want%20to%20know%20more%20about%20your%20services." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-600/20"
                      >
                        <MessageCircle size={16} />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <p className="text-xs text-slate-400 pt-1">Or email us at theaivontech001@gmail.com</p>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#121824] text-slate-400 p-3 rounded-xl text-sm border border-amber-500/20 animate-pulse">
                  Aivon Tech GPT is typing...
                </div>
              </div>
            )}

            {/* Quick Action Chips */}
            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 mt-2 pt-2">
                <button 
                  onClick={() => handleQuickPrompt("Tell me about services")}
                  className="text-xs bg-[#121824] hover:bg-amber-500/20 text-[#FFD700] border border-amber-500/40 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  Tell me about services
                </button>
                <button 
                  onClick={() => handleQuickPrompt("Marketing plans")}
                  className="text-xs bg-[#121824] hover:bg-amber-500/20 text-[#FFD700] border border-amber-500/40 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  Marketing plans
                </button>
                <button 
                  onClick={() => handleQuickPrompt("Get a quote")}
                  className="text-xs bg-[#121824] hover:bg-amber-500/20 text-[#FFD700] border border-amber-500/40 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  Get a quote
                </button>
                <button 
                  onClick={() => handleQuickPrompt("Talk to a human")}
                  className="text-xs bg-[#121824] hover:bg-amber-500/20 text-[#FFD700] border border-amber-500/40 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  Talk to a human
                </button>
                <button 
                  onClick={() => handleQuickPrompt("What tech stack do you use?")}
                  className="text-xs bg-[#121824] hover:bg-amber-500/20 text-[#FFD700] border border-amber-500/40 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                >
                  What tech stack do you use?
                </button>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Footer Input */}
          <form onSubmit={(e) => handleSendMessage(e)} className="p-3 bg-[#121824] border-t border-amber-500/20 flex items-center space-x-2">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..." 
              className="flex-1 bg-[#06090f] text-sm text-white placeholder-slate-400 px-4 py-2.5 rounded-xl border border-amber-500/30 focus:outline-none focus:border-[#FFD700] transition-colors"
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#FFD700] to-amber-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-semibold p-2.5 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-amber-500/20 disabled:opacity-50 cursor-pointer"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-14 h-14 bg-gradient-to-r from-[#FFD700] via-[#FFFACD] to-[#FFD700] hover:scale-105 text-slate-950 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group font-bold border border-amber-300 cursor-pointer"
        >
          <Bot size={26} className="text-slate-950" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#090d16]"></span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;