"use client";
import { useState } from "react";

interface Message {
  id: number;
  sender: string;
  from: "Email" | "LinkedIn";
  content: string;
  timestamp: string;
}

const messagesList: Message[] = [
  {
    id: 1,
    sender: "Alex Thompson",
    from: "Email",
    content: `Hello,

        I'm Alex, a Computer Science student at MIT. I saw your posting for the Frontend Developer Intern position and wanted to reach out directly to express my interest.

        I've been working with React for the past two years and have completed several projects, including a full-stack web application for event management and a real-time chat application. I'm proficient in JavaScript, TypeScript, HTML, and CSS, and I've also worked with Node.js and Express.

        I've attached my resume which details my experience and projects. I would love the opportunity to discuss how my skills align with what you're looking for in an intern.

        Thank you for your consideration.

        Best regards,
        Alex Thompson`,
    timestamp: "2024-01-17",
  },
  {
    id: 2,
    sender: "John Doe",
    from: "LinkedIn",
    content:
      "Hello, I'm John Doe. I'm interested in the Frontend Developer Intern position.",
    timestamp: "2024-01-17",
  },
  {
    id: 3,
    sender: "Karen Mahrous",
    from: "Email",
    content:
      "Hello, I'm Karen Mahrous. I'm interested in the Frontend Developer Intern position.",
    timestamp: "2024-01-17",
  },
];

export default function Inbox() {
  //const [messages, setMessages] = useState<Message[]>(messagesList);

  const messages = messagesList;
  const [selectedMessage, setSelectedMessage] = useState<Message>(messages[0]);

  //const handleLoad = (messages: Message[]) => {
  //  setMessages(messages);
  //}

  

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
  };

  const isSelectedMessage = (message: Message) => {
    return message.id === selectedMessage.id;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Inbox</h2>
        <div className="flex items-center gap-2">
          <button className="bg-transparent text-blue-600 border border-blue-600 px-4 py-2 rounded flex items-center hover:bg-blue-600 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Settings
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            Add Candidate
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-y-auto">
        <div className="flex flex-col gap-4 max-w-[350px]">
          <ul className="message-list">
            {messages.map((message) => (
              <li 
                key={message.id}
                className={`message-item ${isSelectedMessage(message) ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''} active unread`} 
                onClick={() => handleMessageClick(message)}
              >
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="message-sender font-medium">{message.sender}</div>
                  <div className="message-time text-sm text-gray-500">{message.timestamp}</div>
                </div>
                <div className="text-sm text-gray-600 truncate">{message.content}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row width-500">{selectedMessage?.content}</div>
      </div>
    </div>
  );
}


