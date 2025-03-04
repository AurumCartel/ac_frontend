"use client";

import React, {useState} from "react";
import {Search, Camera, Send, Mic, Settings, ArrowLeft, Plus, Users, User, Bell, MessageSquare} from "lucide-react";
import {Conversation} from "@/utils/types/Conversation";
import useTitle from "@/hooks/useTitle";
import {AvatarProps} from "@/utils/types/Avatar";

const Avatar: React.FC<AvatarProps> = ({isGroup, size = "large", className = ""}) => {
    const sizeClasses: Record<'large' | 'small', string> = {
        large: "w-12 h-12 text-lg",
        small: "w-8 h-8 text-sm"
    };

    return (
        <div
            className={`${sizeClasses[size]} bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 ${className} transition-transform hover:scale-105`}>
            {isGroup ? <Users className="text-zinc-900 w-6 h-6"/> : <User className="text-zinc-900 w-6 h-6"/>}
        </div>
    );
};

const MessagingInterface = () => {
    useTitle("Messages");
    const [message, setMessage] = useState("");
    const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
    const [showChat, setShowChat] = useState(false);

    // ... rest of your conversations data ...
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

    const handleSendMessage = () => {
        if (!message.trim()) return;
        // Add message sending logic here
        setMessage("");
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex h-screen bg-zinc-900 text-white">
            {/* Sidebar */}
            <div
                className={`w-full md:w-96 border-r border-zinc-800/50 flex flex-col ${
                    showChat ? "hidden md:flex" : "flex"
                }`}
            >
                {/* Header */}
                <div className="p-6 border-b border-zinc-800/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-[#D4AF37]">Messages</h1>
                        <span className="text-sm text-zinc-400">3 non lus</span>
                    </div>
                    <div className="flex gap-3">
                        <button
                            className="p-2.5 hover:bg-zinc-800/80 rounded-full text-[#D4AF37] transition-colors duration-200">
                            <Bell size={20}/>
                        </button>
                        <button
                            className="p-2.5 hover:bg-zinc-800/80 rounded-full text-[#D4AF37] transition-colors duration-200">
                            <Plus size={20}/>
                        </button>
                    </div>
                </div>

                {/* Recherche */}
                <div className="p-6">
                    <div
                        className="flex items-center bg-zinc-800/50 rounded-xl px-4 py-3 focus-within:ring-2 ring-[#D4AF37]/20 transition-all duration-200">
                        <Search size={20} className="text-[#D4AF37]"/>
                        <input
                            type="text"
                            placeholder="Rechercher une conversation..."
                            className="bg-transparent border-none focus:outline-none ml-3 w-full text-sm placeholder-zinc-400"
                        />
                    </div>
                </div>

                {/* Liste des conversations */}
                <div className="flex-1 overflow-y-auto px-3">
                    {conversations.map((conv) => (
                        <button
                            key={conv.id}
                            onClick={() => handleConversationClick(conv)}
                            className={`w-full text-left flex items-center p-4 hover:bg-zinc-800/50 rounded-xl cursor-pointer transition-all duration-200 mb-2 ${
                                activeConversation?.id === conv.id ? "bg-zinc-800/50 ring-1 ring-[#D4AF37]/20" : ""
                            }`}
                        >
                            <div className="relative">
                                <Avatar isGroup={conv.isGroup} size="large"/>
                                {conv.unread > 0 && (
                                    <span
                                        className="absolute -top-1 -right-1 bg-[#D4AF37] text-zinc-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">
                                        {conv.unread}
                                    </span>
                                )}
                            </div>
                            <div className="ml-4 flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h2 className="font-semibold text-[#D4AF37] truncate">{conv.name}</h2>
                                    <span className="text-xs text-zinc-400 ml-2 flex-shrink-0">{conv.time}</span>
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
                        <div
                            className="px-6 py-4 border-b border-zinc-800/50 flex items-center bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75">
                            <button
                                onClick={handleBackClick}
                                className="md:hidden p-2.5 hover:bg-zinc-800/80 rounded-full text-[#D4AF37] mr-2 transition-colors duration-200"
                            >
                                <ArrowLeft size={20}/>
                            </button>
                            <Avatar isGroup={activeConversation.isGroup} size="small" className="mr-4"/>
                            <div className="flex-1">
                                <h2 className="font-semibold text-[#D4AF37] mb-0.5">{activeConversation.name}</h2>
                                <p className="text-sm text-zinc-400">
                                    {activeConversation.isGroup ? "312 membres, 56 en ligne" : "En ligne"}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="p-2.5 hover:bg-zinc-800/80 rounded-full text-[#D4AF37] transition-colors duration-200">
                                    <Camera size={20}/>
                                </button>
                                <button
                                    className="p-2.5 hover:bg-zinc-800/80 rounded-full text-[#D4AF37] transition-colors duration-200">
                                    <Settings size={20}/>
                                </button>
                            </div>
                        </div>

                        {/* Contenu du chat */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="flex-1 overflow-y-auto">
                                <div className="p-6 space-y-6">
                                    {activeConversation.messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex items-start gap-4 ${msg.isMe ? "flex-row-reverse" : ""} group`}
                                        >
                                            <Avatar
                                                isGroup={!msg.isMe && activeConversation.isGroup}
                                                size="small"
                                                className={msg.isMe ? "order-1" : "order-none"}
                                            />
                                            <div className="w-96"> {/* Container fixe pour les messages */}
                                                <div
                                                    className={`rounded-2xl p-4 w-full shadow-sm ${
                                                        msg.isMe
                                                            ? "bg-[#D4AF37] text-zinc-900"
                                                            : "bg-zinc-800/50 text-white"
                                                    }`}
                                                >
                                                    <p
                                                        className={`text-sm font-semibold mb-1 ${
                                                            msg.isMe ? "text-zinc-900" : "text-[#D4AF37]"
                                                        }`}
                                                    >
                                                        {msg.sender}
                                                    </p>
                                                    <p className="leading-relaxed break-words">{msg.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Zone de saisie */}
                            <div
                                className="p-6 border-t border-zinc-800/50 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75">
                                <div
                                    className="flex items-center bg-zinc-800/50 rounded-xl px-4 py-3 focus-within:ring-2 ring-[#D4AF37]/20 transition-all duration-200">
                                    <input
                                        type="text"
                                        placeholder="Écrivez votre message..."
                                        className="flex-1 bg-transparent border-none focus:outline-none placeholder-zinc-400"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                    />
                                    <div className="flex items-center gap-3 ml-3">
                                        <button
                                            className="p-2 hover:bg-zinc-700/50 rounded-full text-[#D4AF37] transition-colors duration-200">
                                            <Mic size={20}/>
                                        </button>
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!message.trim()}
                                            className="p-2 hover:bg-zinc-700/50 rounded-full text-[#D4AF37] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send size={20}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-zinc-400 p-6">
                        <div className="w-16 h-16 bg-zinc-800/50 rounded-full flex items-center justify-center mb-4">
                            <MessageSquare size={32} className="text-[#D4AF37]"/>
                        </div>
                        <p className="text-lg font-medium mb-2">Vos messages</p>
                        <p className="text-sm text-zinc-500">Sélectionnez une conversation pour commencer</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagingInterface;