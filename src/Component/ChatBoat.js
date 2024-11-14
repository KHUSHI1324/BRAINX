import React, { useState } from 'react';
import hero from './img/chat.jpg'
import './forms/Form.css'
const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'ChatBot', text: "Hello there! 👋 Welcome to the Radiant Life!" },
    { sender: 'ChatBot', text: "I'm here to support you on your journey towards better mental health. Whether you're starting your first session or just checking in, you're in a safe space.Feel free to ask me any questions or share what's on your mind—I'm here to listen and help. If you ever need more personalized support, You may connect/Book an Appointment with one of our specialists. Let's get started whenever you're ready!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'Me', text: input }];
      setMessages(newMessages);
      setInput('');

      setIsTyping(true);

      setTimeout(() => {
        let botResponse = '';
        const userMessage = input.trim().toLowerCase();

        if (userMessage.includes('hi') || userMessage.includes('hello') || userMessage.includes('hey')) {
          botResponse = 'Hi there! How can I help you?';
        } else if (userMessage.includes('what is this app for') || userMessage.includes('how does it work') || userMessage.includes('what services do you provide') || userMessage.includes('use')) {
          botResponse = "This app is here to help you with your mental health. You can talk to specialists, learn coping strategies, and explore resources to support your well-being.It works based on predefined responses to specific questions you ask. We offer a variety of services to support your mental health, including one-on-one therapy sessions with licensed psychologists, mental health assessments, stress management techniques, and resources for self-care. We also provide tools to track your mood and mental health progress. If you're looking for something specific, feel free to ask, and I'll guide you in the right direction!";
        } else if (userMessage.includes('start therapy') || userMessage.includes(' book  appoint')  || userMessage.includes(' session')) {
          botResponse = 'To start a therapy session, you can book an appointment with one of our psychologists. Just go to the "Book Now" section and choose a time that works for you.';
        } else if (userMessage.includes('How do I sign up?')) {
          botResponse = "You can sign up by clicking on the 'Sign Up' button on our homepage. Just enter your your details and create your account to get started";
        } else if (userMessage.includes('What can I talk  therapy?')) {
          botResponse = "In therapy, you can talk about a wide range of topics, including: 1. Stress and anxiety management. 2. Relationship issues and communication.  3. Personal growth and self-esteem.  4. Coping with depression or sadness.  5. Managing work or academic pressures.  6. Grief and loss.  7. Understanding and processing emotions.  8. Any other personal challenges or concerns you may have. Therapy is a safe space to explore whatever is on your mind, and your therapist is there to help you work through it.";
        } else if (userMessage.includes('Is my information confidential?')) {
          botResponse = "Yes, your privacy is very important to us. All your information and conversations are kept confidential and secure";
        } else if (userMessage.includes('How do I reset my password?')) {
          botResponse = "If you need to reset your password, just click on the 'Forgot Password' link on the login page, and we'll guide you through the process.";
        } else if (userMessage.includes('change therapist?') || userMessage.includes(' cancel appoint')) {
          botResponse = "Yes, you can change your therapist if you feel like it would be a better fit for you. firstly,if you have appointment,cancel that appointment through your email, Make an appointment- visit the 'Doctors' section in homePage and choose a new therapist.";
        } else if (userMessage.includes('What can I talk about in therapy?')) {
          botResponse = "You can talk about anything that's on your mind—stress, anxiety, relationships, or even things you find difficult to share with others. Therapy is a safe space for you to express your thoughts and feelings.";
        } else {
          botResponse = "I'm not sure how to respond to that. Can you please ask something else?";
        }

        setIsTyping(false);
        setMessages([...newMessages, { sender: 'ChatBot', text: botResponse }]);
      }, 3000);
    }
  };

  return (
    <div className='bg-gray-300 '>
    <div className="relative  max-w-sm mx-auto mt-10">
      <div className="absolute inset-0 bg-cover bg-center filter blur-md">
      <img className="object-cover w-full h-full" src={hero} alt="hero" />
       
      </div>
      <div className="relative  rounded-lg overflow-hidden shadow-lg">
        <div className=" rounded-t-lg p-4 flex items-center relative z-10">
          <div className="w-8 h-8 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6H16C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2ZM12 10C14.208 10 16 11.792 16 14H8C8 11.792 9.792 10 12 10ZM6 14H18V20H6V14ZM18 8V12H6V8H18Z" />
            </svg>
          </div>
          <div className="ml-3 text-black font-sans text-lg">
            <div>ChatBot</div>
            <div className="flex items-center mt-1">
              <div className="w-3 h-3 mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <circle cx="12" cy="12" r="12" fill="#34D399" />
                </svg>
              </div>
              <span className="text-green-500 text-sm">Online</span>
            </div>
          </div>
        </div>
        <div className=" p-4 h-96 overflow-y-scroll flex flex-col relative z-10">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'Me' ? 'text-right' : 'text-left'} animate-fade-in`}>
              <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'Me' ? 'bg-black-500 text-white' : ' text-black'} transition-transform duration-500`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="mb-2 text-left animate-bounce">
              <div className="inline-block px-4 py-2 rounded-lg  text-black">
                ChatBot is typing...
              </div>
            </div>
          )}
        </div>
        <div className=" rounded-b-lg p-4 flex relative z-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className=" placeholder-black flex-grow p-2 bg-transparent border border-gray-800 rounded-l-lg focus:outline-none"
          />
          <button onClick={handleSend} className="text-black px-4 rounded-r-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M2.394 2.462A1 1 0 013.242 2h17.516a1 1 0 01.848 1.462l-8.74 16.5a1 1 0 01-1.784 0l-8.74-16.5zm3.654 3.87l7.682 7.682-6.024-.66L6.048 6.332zm8.056 8.056l.66-6.024 7.682 7.682-8.342-1.658z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChatBot;
