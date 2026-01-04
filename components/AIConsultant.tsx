
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, User, Bot, Loader2, ExternalLink, MessageCircle } from 'lucide-react';
import { getBeautyAdvice } from '../services/gemini';

interface Message {
  role: 'user' | 'bot';
  text: string;
  sources?: any[];
}

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Welcome to the Executive Concierge. I have access to live global beauty trends and our exclusive Derwent Park catalog. How may I assist your professional journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickChips = [
    "Latest hair trends 2025",
    "Wholesale account requirements",
    "Showroom opening hours",
    "Professional skin tech"
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (customText?: string) => {
    const messageText = customText || input;
    if (!messageText.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setIsLoading(true);

    const { text, sources } = await getBeautyAdvice(messageText);
    
    setMessages(prev => [...prev, { role: 'bot', text, sources }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <div className="inline-flex items-center space-x-2 text-gold mb-6">
              <Sparkles size={28} />
              <span className="uppercase tracking-[0.2em] text-sm font-bold">Live Intelligence</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight">Professional <br /><span className="text-gold italic serif font-normal">Concierge</span></h2>
            <p className="text-stone-400 mb-8 font-light">
              Experience personalized consulting powered by Gemini. Real-time industry insights at your fingertips.
            </p>
            <div className="space-y-3">
              <p className="text-xs text-stone-500 uppercase tracking-widest mb-4">Popular Inquiries</p>
              {quickChips.map((chip, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="block w-full text-left px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-stone-300 text-sm hover:bg-gold hover:text-white transition-all"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-stone-900 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col h-[650px]">
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-white font-medium text-sm">Concierge Online</span>
              </div>
              <MessageCircle className="text-gold" size={20} />
            </div>

            {/* Chat Window */}
            <div className="flex-grow overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                    <div className={`flex-shrink-0 p-2.5 rounded-2xl ${msg.role === 'user' ? 'bg-gold' : 'bg-stone-800'}`}>
                      {msg.role === 'user' ? <User size={20} className="text-white" /> : <Bot size={20} className="text-gold" />}
                    </div>
                    <div>
                      <div className={`p-5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-gold text-white shadow-lg' : 'bg-stone-800 text-stone-200 border border-white/5'}`}>
                        {msg.text}
                      </div>
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.sources.map((src, idx) => (
                            <a 
                              key={idx} 
                              href={src.web?.uri} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[10px] bg-stone-800/50 hover:bg-stone-700 text-gold px-2 py-1 rounded-md border border-white/5"
                            >
                              <ExternalLink size={10} className="mr-1" />
                              Source {idx + 1}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-stone-800 p-5 rounded-2xl flex items-center space-x-3 border border-white/5">
                    <Loader2 className="animate-spin text-gold" size={20} />
                    <span className="text-sm text-stone-400">Analyzing global trends...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-stone-950/80 border-t border-white/5">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask your concierge..."
                  className="flex-grow bg-stone-800 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="p-4 bg-gold text-white rounded-2xl hover:bg-opacity-90 transition-all disabled:opacity-50 shadow-lg"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
