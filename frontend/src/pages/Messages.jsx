import React, { useState } from 'react';
import { FaSearch, FaSortDown, FaPlusCircle, FaPaperPlane, FaPhone, FaVideo, FaInfoCircle, FaCog } from 'react-icons/fa';

// Main Messages Component
const Messages = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <ChatSection />
            <UserInfo />
        </div>
    );
};

// Sidebar with Contacts
const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    // Example contacts
    const contacts = [
      { name: "Rahul Sharma", platform: "x", count: 12 },
      { name: "Dheeraj Kumar", platform: "Instagram", count: 24 },
      { name: "Abdul Rahman", platform: "Whatsapp", count: 132 },
      { name: "Anirudh Singh", platform: "Linkedin", count: 0 },
      { name: "Priya Patel", platform: "Tiktok", count: 16 },
    ];

    // Filter contacts based on search query
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Set selected user when clicked
    const handleSelectUser = (contact) => {
        setSelectedUser(contact);
    };

    return (
        <div className="sidebar w-1/4 p-4 flex flex-col bg-[#2b2b45] text-white">
            <div className="text-lg font-bold mb-4">Messages</div>
            <div className="text-sm mb-4">Contacts</div>
            <div className="relative mb-4">
                <input 
                    type="text" 
                    placeholder="Search Message..." 
                    className="w-full p-2 rounded bg-gray-700 text-white" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-4">
                {filteredContacts.map((contact, index) => (
                    <Contact 
                        key={index} 
                        name={contact.name} 
                        platform={contact.platform} 
                        count={contact.count} 
                        onClick={() => handleSelectUser(contact)} 
                    />
                ))}
            </div>
        </div>
    );
};

// Contact Component
const Contact = ({ name, platform, count, onClick }) => (
    <div className="flex items-center text-white space-x-4 cursor-pointer" onClick={onClick}>
        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
        <div className="flex-1">
            <div className="text-sm">{name}</div>
            <div className="text-xs text-gray-400">{platform}</div>
        </div>
        {count > 0 && <div className="text-xs bg-green-500 text-black rounded-full px-2">{count}</div>}
    </div>
);

// Chat Section where the user interacts with the bot or selected user
const ChatSection = () => {
    const [messages, setMessages] = useState([
        { time: "12:00", text: "Welcome to the chat app! How can I assist you today?", sent: false },
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    // Function to simulate bot response
    const simulateBotResponse = (userMessage) => {
        setTimeout(() => {
            const botMessage = {
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: `Bot: You said "${userMessage}". How can I assist you more?`,
                sent: false,
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }, 1500);
    };

    // Function to handle message sending
    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            const userMessage = {
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                text: inputMessage,
                sent: true,
            };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInputMessage('');
            simulateBotResponse(inputMessage);
        }
    };

    // If no user is selected, show general chat
    if (!selectedUser) {
        return (
            <div className="flex-1 flex flex-col">
          <div className="chat-header p-4 flex items-center justify-between bg-[#2b2b45]">
              <div className="flex items-center space-x-4">
            <img src="https://randomuser.me/api/portraits/men/19.jpg" alt="User" className="w-10 h-10 rounded-full" />
            <div>
                <div className="text-lg text-white">Siddharth Goud</div>
                <div className="text-sm text-green-500">{selectedUser ? selectedUser.name : 'Online'}</div>
            </div>
              </div>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((message, index) => (
            <Message key={index} time={message.time} text={message.text} sent={message.sent} />
              ))}
          </div>
          <div className="chat-footer p-4 flex items-center space-x-4 bg-[#2b2b45]">
              <FaPlusCircle className="text-gray-400" />
              <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 p-2 rounded bg-gray-700 text-white" 
            value={inputMessage} 
            onChange={(e) => setInputMessage(e.target.value)} 
              />
              <button onClick={handleSendMessage} className="send-button p-2 rounded bg-green-500 text-black">Send <FaPaperPlane /></button>
          </div>
            </div>
        );
    }

    // When a user is selected, show user-specific chat
    return (
        <div className="flex-1 flex flex-col">
            <div className="chat-header p-4 flex items-center justify-between bg-[#2b2b45]">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                    <div>
                        <div className="text-lg">{selectedUser.name}</div>
                        <div className="text-sm text-green-500">Online</div>
                    </div>
                </div>
                <FaCog className="text-gray-400" />
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map((message, index) => (
                    <Message key={index} time={message.time} text={message.text} sent={message.sent} />
                ))}
            </div>
            <div className="chat-footer p-4 flex items-center space-x-4 bg-[#2b2b45]">
                <FaPlusCircle className="text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="flex-1 p-2 rounded bg-gray-700 text-white" 
                    value={inputMessage} 
                    onChange={(e) => setInputMessage(e.target.value)} 
                />
                <button onClick={handleSendMessage} className="send-button p- rounded bg-green-500 text-black">Send <FaPaperPlane /></button>
            </div>
        </div>
    );
};

// Message Component for displaying each message
const Message = ({ time, text, sent }) => (
    <div className={`message p-4 rounded ${sent ? 'bg-[#4b4b6c]' : 'bg-[#3b3b5c]'}`}>
        <div className="text-sm text-white">{text}</div>
        <div className="text-xs text-gray-400 mt-2">{time}</div>
    </div>
);

// User Information Section (Randomized Info)
const UserInfo = () => {
  // Random user info generator (name, image, and some info)
  const randomUser = {
    name: "John Doe",
    username: "@john_doe",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    bio: "This is a random user. Loves coding, hiking, and coffee.",
  };

  // Example media and links

  const media = [
    { type: "image", url: "https://picsum.photos/150?random=1" },
    { type: "image", url: "https://picsum.photos/150?random=2" },
    { type: "image", url: "https://picsum.photos/150?random=3" },
    { type: "image", url: "https://picsum.photos/150?random=4" },
  ];
  const links = [
    { title: "GitHub", url: "https://github.com/johndoe" },
    { title: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
  ];

  return (
    <div className="user-info w-1/4 p-4 flex flex-col bg-[#2b2b45] text-white">
      <div className="flex items-center space-x-4 mb-4">
        <img src={randomUser.image} alt="Random User" className="w-16 h-16 rounded-full" />
        <div>
          <div className="text-lg">{randomUser.name}</div>
          <div className="text-sm text-gray-400">{randomUser.username}</div>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        <FaPhone className="text-gray-400" />
        <FaVideo className="text-gray-400" />
        <FaInfoCircle className="text-gray-400" />
        <FaCog className="text-gray-400" />
      </div>
      <div className="text-sm mb-4">{randomUser.bio}</div>
      <div className="text-sm mb-4">
        <div className="font-bold mb-2">Media</div>
        <div className="flex space-x-2">
          {media.map((item, index) => (
            <img key={index} src={item.url} alt={item.type} className="w-16 h-16 rounded" />
          ))}
        </div>
      </div>
      <div className="text-sm">
        <div className="font-bold mb-2">Links</div>
        <div className="flex flex-col space-y-2">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="text-blue-400" target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
