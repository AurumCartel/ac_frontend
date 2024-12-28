"use client";

import React, {useState} from "react";
import {Search, Menu, Camera, Send, Mic, Settings, ArrowLeft} from "lucide-react";
import {Conversation} from "@/utils/types/Conversation";
import useTitle from "@/hooks/useTitle";


const MessagingInterface = () => {
    useTitle("Messages");
    const [message, setMessage] = useState("");
    const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
    const [showChat, setShowChat] = useState(false);

    const conversations: Conversation[] = [
        {
            id: 1,
            name: "Aurum Cartel",
            message: "Salut tout le monde!",
            time: "1 min",
            unread: 2,
            isGroup: true,
            messages: [
                {
                    id: 1,
                    sender: "Personne 1",
                    content: "Bonjour tout le monde comment allez-vous cette semaine ?",
                    isMe: false
                },
                {
                    id: 2,
                    sender: "Moi",
                    content: "Bonjour à tous ! Je vais très bien, merci. J'espère que vous aussi ?",
                    isMe: true
                },
                {id: 3, sender: "Personne 2", content: "Bonjour, ça va tranquille", isMe: false},
            ],
        },
        {
            id: 2,
            name: "Sandro Lu",
            message: "On se voit demain ?",
            time: "5 min",
            unread: 0,
            isGroup: false,
            messages: [
                {id: 1, sender: "Sandro Lu", content: "Hey, comment vas-tu ?", isMe: false},
                {id: 2, sender: "Moi", content: "Salut Sandro ! Je vais bien, merci. Et toi ?", isMe: true},
            ],
        },
    ];

    const handleConversationClick = (conversation: Conversation) => {
        setActiveConversation(conversation);
        setShowChat(true);
        conversation.unread = 0;
    };

    const handleBackClick = () => {
        setShowChat(false);
    };

    return (
        <div className="flex h-screen bg-zinc-900 text-white">
            {/* Sidebar - Liste des conversations */}
            <div
                className={`w-full md:w-80 border-r border-zinc-800 flex flex-col ${
                    showChat ? "hidden md:flex" : "flex"
                }`}
            >
                {/* Header */}
                <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-[#D4AF37]">Messages</h1>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-zinc-800 rounded-full text-[#D4AF37]">
                            <Settings size={20}/>
                        </button>
                        <button className="p-2 hover:bg-zinc-800 rounded-full text-[#D4AF37] md:hidden">
                            <Menu size={20}/>
                        </button>
                    </div>
                </div>

                {/* Recherche */}
                <div className="p-4">
                    <div className="flex items-center bg-zinc-800 rounded-full px-4 py-2">
                        <Search size={20} className="text-[#D4AF37]"/>
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="bg-transparent border-none focus:outline-none ml-2 w-full text-sm placeholder-zinc-400"
                        />
                    </div>
                </div>

                {/* Liste des conversations */}
                <div className="flex-1 overflow-y-auto">
                    {conversations.map((conv) => (
                        <button
                            key={conv.id}
                            onClick={() => handleConversationClick(conv)}
                            className={`w-full text-left flex items-center p-4 hover:bg-zinc-800 cursor-pointer transition-colors ${
                                activeConversation?.id === conv.id ? "bg-zinc-800" : ""
                            }`}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                                    {conv.isGroup ? (
                                        <span className="text-zinc-900 text-xl">👥</span>
                                    ) : (
                                        <span className="text-zinc-900 text-xl">👤</span>
                                    )}
                                </div>
                                {conv.unread > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-[#D4AF37] text-zinc-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                        {conv.unread}
                                    </span>
                                )}
                            </div>
                            <div className="ml-4 flex-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold text-[#D4AF37]">{conv.name}</h2>
                                    <span className="text-xs text-zinc-400">{conv.time}</span>
                                </div>
                                <p className="text-sm text-zinc-400 truncate">{conv.message}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Zone de chat */}
            <div className={`flex-1 flex flex-col ${showChat ? "flex" : "hidden md:flex"}`}>
                {activeConversation ? (
                    <>
                        {/* Header du chat */}
                        <div className="p-4 border-b border-zinc-800 flex items-center bg-zinc-900">
                            <button
                                onClick={handleBackClick}
                                className="md:hidden p-2 hover:bg-zinc-800 rounded-full text-[#D4AF37] mr-2"
                            >
                                <ArrowLeft size={20}/>
                            </button>
                            <div className="flex-1">
                                <h2 className="font-semibold text-[#D4AF37]">{activeConversation.name}</h2>
                                <p className="text-sm text-zinc-400">
                                    {activeConversation.isGroup ? "312 membres, 56 en ligne" : "En ligne"}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-zinc-800 rounded-full text-[#D4AF37]">
                                    <Camera size={20}/>
                                </button>
                                <button className="p-2 hover:bg-zinc-800 rounded-full text-[#D4AF37]">
                                    <Settings size={20}/>
                                </button>
                            </div>
                        </div>

                        {/* Contenu du chat */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="flex-1 overflow-y-auto">
                                <div className="p-4 space-y-4">
                                    {activeConversation.messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex items-start gap-4 ${msg.isMe ? "flex-row-reverse" : ""}`}
                                        >
                                            <div
                                                className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                                                <span className="text-zinc-900 text-sm">
                                                    {msg.isMe
                                                        ? "👤"
                                                        : activeConversation.isGroup
                                                            ? "👥"
                                                            : "👤"}
                                                </span>
                                            </div>
                                            <div
                                                className={`rounded-lg p-3 max-w-md ${
                                                    msg.isMe
                                                        ? "bg-[#D4AF37] text-zinc-900"
                                                        : "bg-zinc-800 text-white"
                                                }`}
                                            >
                                                <p
                                                    className={`text-sm font-semibold mb-1 ${
                                                        msg.isMe ? "text-zinc-900" : "text-[#D4AF37]"
                                                    }`}
                                                >
                                                    {msg.sender}
                                                </p>
                                                <p>{msg.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Zone de saisie */}
                            <div className="p-4 border-t border-zinc-800 bg-zinc-900">
                                <div className="flex items-center bg-zinc-800 rounded-lg px-4 py-2">
                                    <input
                                        type="text"
                                        placeholder="Votre message"
                                        className="flex-1 bg-transparent border-none focus:outline-none placeholder-zinc-400"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-zinc-700 rounded-full text-[#D4AF37]">
                                            <Mic size={20}/>
                                        </button>
                                        <button className="p-2 hover:bg-zinc-700 rounded-full text-[#D4AF37]">
                                            <Send size={20}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-zinc-400">
                        <p>Sélectionnez une conversation pour commencer</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagingInterface;
