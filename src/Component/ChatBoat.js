import React, { useState, useRef, useEffect } from 'react';
import hero from './img/chat.jpg';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'ChatBot', text: "Hello! Welcome to Radiant Life 💫" },
    { sender: 'ChatBot', text: "I'm here to support you on your mental wellness journey. Feel free to ask me anything, or book a session if needed." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = (userMessage) => {
    if (userMessage.trim()) {
      const newMessages = [...messages, { sender: 'Me', text: userMessage }];
      setMessages(newMessages);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        let botResponse = '';
        const message = userMessage.trim().toLowerCase();

        // Conditional responses based on user input
        if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
          botResponse = 'Hi there! How can I assist you today?';
        } else if (message.includes('help') || message.includes('support')) {
          botResponse = "I'm here for you. Please let me know how I can help or if you need immediate support.";
        } else if (message.includes('therapy') || message.includes('not well') || message.includes('session')) {
          botResponse = "Therapy can be a helpful step. Would you like to learn more or book a session with one of our professionals?";
        } else if (message.includes('what is this app for') || message.includes('how does it work') || message.includes('services')) {
          botResponse = "Radiant Life is your support for mental wellness. Explore therapy sessions, mental health resources, and self-care tools.";
        } else if (message.includes('book') || message.includes('appointment')) {
          botResponse = 'You can book an appointment in the "Book Now" section. Choose a time that suits you.';
        } else {
          botResponse = "I'm here to help! Could you ask that differently?";
        }

        setIsTyping(false);
        setMessages([...newMessages, { sender: 'ChatBot', text: botResponse }]);
      }, 1500);
    }
  };

  // Automatically scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Clickable quick questions for the user
  const quickQuestions = [
    "I need help with mental health",
    "Can I book a therapy session?",
    "What services do you offer?"
    
  ];

  return (
    <div className='bg-blue-100 h-screen flex items-center -mt-10 justify-center overflow-hidden'>
      <div className="relative max-w w-full mx-auto  p-4">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500">
                <path d="M12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6H16C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2ZM12 10C14.208 10 16 11.792 16 14H8C8 11.792 9.792 10 12 10ZM6 14H18V20H6V14ZM18 8V12H6V8H18Z" />
              </svg>
            </div>
            <div className="ml-3 text-center">
              <div className="font-semibold text-lg">ChatBot</div>
              <div className="text-green-200 text-sm">Online</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-100 scrollbar-thin">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${msg.sender === 'Me' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === 'Me' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
                  } transform transition-transform duration-500 ease-in-out`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-2 text-left animate-pulse">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-700">
                  ChatBot is typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Default Questions */}
          <div className="p-4 flex flex-col space-y-2 bg-gray-50">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSend(question)}
                className="text-left text-blue-500 hover:text-blue-700 bg-gray-200 py-2 px-4 rounded-lg"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="flex items-center bg-gray-200 p-3 rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend(input);
              }}
              placeholder="Type a message..."
              className="flex-grow p-2.5 bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none placeholder-gray-500"
            />
            <button
              onClick={() => handleSend(input)}
              className="bg-blue-500 text-white p-2 ml-2 rounded-lg flex items-center justify-center"
            >
              {/* Minimal paper airplane send icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hide main screen scrollbar */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #3b82f6;
          border-radius: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #2563eb;
        }
        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
