"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    Search, Camera, Send, Mic, Settings, ArrowLeft, Plus, Users, User, Bell, MessageSquare,
    Paperclip, Smile, MoreVertical, Clock, Check, CheckCheck, Image as ImageIcon, File, X
} from "lucide-react";
import { Conversation } from "@/utils/types/Conversation";
import useTitle from "@/hooks/useTitle";
import { AvatarProps } from "@/utils/types/Avatar";
import useScrollToTop from "@/hooks/useScrollToTop";

// Composant Avatar amélioré avec support des images de profil
const Avatar: React.FC<AvatarProps & { image?: string, status?: 'online' | 'offline' | 'away' | 'none', name?: string }> = ({
                                                                                                                                isGroup,
                                                                                                                                size = "large",
                                                                                                                                className = "",
                                                                                                                                image,
                                                                                                                                status = "none",
                                                                                                                                name = ""
                                                                                                                            }) => {
    const sizeClasses: Record<'large' | 'small' | 'medium', string> = {
        large: "w-12 h-12 text-lg",
        medium: "w-10 h-10 text-md",
        small: "w-8 h-8 text-sm"
    };

    const statusColors = {
        online: "bg-green-500",
        offline: "bg-zinc-500",
        away: "bg-yellow-500",
        none: "hidden"
    };

    const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : '';

    return (
        <div className="relative">
            <div
                className={`${sizeClasses[size]} rounded-full flex items-center justify-center flex-shrink-0 ${className} 
        transition-transform duration-200 hover:scale-105 overflow-hidden border-2 border-zinc-700`}
            >
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#9b8428] flex items-center justify-center text-zinc-900 font-semibold">
                        {isGroup ? <Users className="w-5 h-5" /> : (initials || <User className="w-5 h-5" />)}
                    </div>
                )}
            </div>
            {status !== "none" && (
                <div className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[status]} rounded-full border-2 border-zinc-800`}></div>
            )}
        </div>
    );
};

// Badge de notification
const NotificationBadge: React.FC<{ count: number }> = ({ count }) => {
    if (count <= 0) return null;

    return (
        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#D4AF37] to-[#c49c29] text-zinc-900 text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-semibold shadow-lg px-1.5">
      {count > 99 ? '99+' : count}
    </span>
    );
};

// Séparateur de date
const DateSeparator: React.FC<{ date: string }> = ({ date }) => (
    <div className="flex items-center justify-center my-6">
        <div className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {date}
        </div>
    </div>
);

// Interface principale de messagerie
const MessagingInterface = () => {
    useTitle("Messages");
    useScrollToTop();

    const [message, setMessage] = useState("");
    const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
    const [showChat, setShowChat] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Simuler l'indicateur de frappe
    useEffect(() => {
        if (activeConversation && message.length > 0) {
            const timer = setTimeout(() => setIsTyping(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [message, activeConversation]);

    // Scroll automatique vers le bas quand de nouveaux messages arrivent
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [activeConversation?.messages]);

    // Exemple de conversations enrichies
    const conversations: Conversation[] = [
        {
            id: 1,
            name: "Aurum Cartel",
            message: "Salut tout le monde!",
            time: "1 min",
            unread: 2,
            isGroup: true,
            lastActive: "Aujourd'hui",
            typing: true,
            messages: [
                {
                    id: 1,
                    sender: "Personne 1",
                    content: "Bonjour tout le monde comment allez-vous cette semaine ?",
                    timestamp: "10:15",
                    date: "Aujourd'hui",
                    isMe: false,
                    status: "read",
                    avatar: "/assets/avatars/person1.jpg"
                },
                {
                    id: 2,
                    sender: "Moi",
                    content: "Bonjour à tous ! Je vais très bien, merci. J'espère que vous aussi ?",
                    timestamp: "10:17",
                    date: "Aujourd'hui",
                    isMe: true,
                    status: "read"
                },
                {
                    id: 3,
                    sender: "Personne 2",
                    content: "Bonjour, ça va tranquille",
                    timestamp: "10:20",
                    date: "Aujourd'hui",
                    isMe: false,
                    avatar: "/assets/avatars/person2.jpg"
                },
            ],
        },
        {
            id: 2,
            name: "Sandro Lu",
            message: "On se voit demain ?",
            time: "5 min",
            unread: 0,
            isGroup: false,
            lastActive: "En ligne",
            typing: false,
            messages: [
                {
                    id: 1,
                    sender: "Sandro Lu",
                    content: "Hey, comment vas-tu ?",
                    timestamp: "Hier",
                    date: "Hier",
                    isMe: false,
                    status: "read",
                    avatar: "/assets/avatars/sandro.jpg"
                },
                {
                    id: 2,
                    sender: "Moi",
                    content: "Salut Sandro ! Je vais bien, merci. Et toi ?",
                    timestamp: "Hier",
                    date: "Hier",
                    isMe: true,
                    status: "read"
                },
                {
                    id: 3,
                    sender: "Sandro Lu",
                    content: "Super bien ! J'ai travaillé sur le nouveau projet blockchain et j'ai fait de bons progrès. On se voit demain pour discuter des détails ?",
                    timestamp: "5 min",
                    date: "Aujourd'hui",
                    isMe: false,
                    avatar: "/assets/avatars/sandro.jpg"
                },
            ],
        },
        {
            id: 3,
            name: "Marie Dupont",
            message: "Le cours de blockchain avancé commence à 14h",
            time: "12:45",
            unread: 1,
            isGroup: false,
            lastActive: "Il y a 30 min",
            typing: false,
            messages: [],
        },
        {
            id: 4,
            name: "Projet Finale",
            message: "Thomas: J'ai terminé les maquettes",
            time: "Hier",
            unread: 0,
            isGroup: true,
            lastActive: "Hier",
            typing: false,
            messages: [],
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
        if (!message.trim() || !activeConversation) return;

        // Simuler l'ajout d'un message
        const newMessage = {
            id: Date.now(),
            sender: "Moi",
            content: message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            date: "Aujourd'hui",
            isMe: true,
            status: "sent" as const
        };

        activeConversation.messages.push(newMessage);
        setActiveConversation({...activeConversation});
        setMessage("");
        // Fermer les menus ouverts
        setShowEmojiPicker(false);
        setShowAttachmentOptions(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Emoji placeholder (en production, utilisez une vraie bibliothèque d'émojis)
    const commonEmojis = ["😊", "👍", "❤️", "😂", "🙏", "😍", "🔥", "💪", "🎉", "👀"];

    const handleAddEmoji = (emoji: string) => {
        setMessage(prev => prev + emoji);
        inputRef.current?.focus();
    };

    return (
        <div className="flex h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white overflow-hidden">
            {/* Sidebar */}
            <div
                className={`w-full md:w-[380px] border-r border-zinc-800 flex flex-col ${
                    showChat ? "hidden md:flex" : "flex"
                }`}
            >
                {/* Header */}
                <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#c4a030] bg-clip-text text-transparent">Messages</h1>
                        <div className="px-2 py-1 rounded-full bg-zinc-800 text-xs font-medium text-zinc-400 flex items-center">
                            <span className="bg-[#D4AF37] w-2 h-2 rounded-full mr-1.5"></span>
                            3 non lus
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            className="p-2.5 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-[#D4AF37] transition-all duration-300">
                            <Bell size={20}/>
                        </button>
                        <button
                            className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-[#D4AF37] transition-all duration-300">
                            <Plus size={20}/>
                        </button>
                    </div>
                </div>

                {/* Recherche */}
                <div className="p-4 border-b border-zinc-800/50">
                    <div className="flex items-center bg-zinc-800/70 rounded-full px-4 py-2.5 focus-within:ring-2 ring-[#D4AF37]/20 transition-all duration-200">
                        <Search size={18} className="text-zinc-400"/>
                        <input
                            type="text"
                            placeholder="Rechercher une conversation..."
                            className="bg-transparent border-none focus:outline-none ml-3 w-full text-sm placeholder-zinc-500"
                        />
                    </div>
                </div>

                {/* Filtres */}
                <div className="px-4 pt-3 pb-1 flex gap-2 overflow-x-auto scrollbar-hide">
                    <button className="px-3 py-1.5 bg-[#D4AF37] text-zinc-900 rounded-full text-xs font-medium whitespace-nowrap">
                        Tous
                    </button>
                    <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-xs font-medium text-zinc-300 whitespace-nowrap transition-colors">
                        Non lus
                    </button>
                    <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-xs font-medium text-zinc-300 whitespace-nowrap transition-colors">
                        Groupes
                    </button>
                    <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-full text-xs font-medium text-zinc-300 whitespace-nowrap transition-colors">
                        Directs
                    </button>
                </div>

                {/* Liste des conversations */}
                <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5">
                    {conversations.map((conv) => (
                        <button
                            key={conv.id}
                            onClick={() => handleConversationClick(conv)}
                            className={`w-full text-left flex items-center p-3 hover:bg-zinc-800/40 rounded-xl cursor-pointer transition-all duration-200 relative ${
                                activeConversation?.id === conv.id ? "bg-zinc-800/70 ring-1 ring-[#D4AF37]/20" : ""
                            }`}
                        >
                            <div className="relative">
                                <Avatar
                                    isGroup={conv.isGroup}
                                    size="medium"
                                    status={conv.lastActive === "En ligne" ? "online" : "offline"}
                                    name={conv.name}
                                    image={conv.isGroup ? undefined : `/assets/avatars/${conv.name.toLowerCase().replace(' ', '')}.jpg`}
                                />
                                <NotificationBadge count={conv.unread} />
                            </div>
                            <div className="ml-3 flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h2 className="font-medium text-white truncate">{conv.name}</h2>
                                    <span className="text-xs text-zinc-500 ml-2 flex-shrink-0">{conv.time}</span>
                                </div>
                                <div className="flex items-center">
                                    {conv.typing ? (
                                        <p className="text-sm text-[#D4AF37] truncate flex items-center">
                      <span className="flex space-x-1 mr-1">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </span>
                                            En train d'écrire...
                                        </p>
                                    ) : (
                                        <p className="text-sm text-zinc-400 truncate flex items-center">
                                            {!conv.isGroup && conv.messages.length > 0 && !conv.messages[conv.messages.length-1].isMe && (
                                                <span className="mr-1">
                          {conv.messages.length > 0 && conv.messages[conv.messages.length-1].isMe ? "Vous: " : ""}
                        </span>
                                            )}
                                            {conv.message}
                                        </p>
                                    )}
                                </div>
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
                        <div className="px-6 py-4 border-b border-zinc-800 flex items-center bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75 sticky top-0">
                            <button
                                onClick={handleBackClick}
                                className="md:hidden p-2.5 hover:bg-zinc-800/80 rounded-full text-[#D4AF37] mr-2 transition-colors duration-200"
                            >
                                <ArrowLeft size={20}/>
                            </button>

                            <Avatar
                                isGroup={activeConversation.isGroup}
                                size="medium"
                                className="mr-3"
                                status={activeConversation.lastActive === "En ligne" ? "online" : "offline"}
                                name={activeConversation.name}
                                image={activeConversation.isGroup ? undefined : `/assets/avatars/${activeConversation.name.toLowerCase().replace(' ', '')}.jpg`}
                            />

                            <div className="flex-1">
                                <h2 className="font-semibold text-white mb-0.5">{activeConversation.name}</h2>
                                <div className="text-sm text-zinc-400 flex items-center">
                                    {activeConversation.isGroup ? (
                                        <>
                                            <Users className="w-3 h-3 mr-1.5" />
                                            <span>312 membres, 56 en ligne</span>
                                        </>
                                    ) : (
                                        <>
                      <span className={`w-2 h-2 rounded-full mr-1.5 ${
                          activeConversation.lastActive === "En ligne" ? "bg-green-500" : "bg-zinc-500"
                      }`}></span>
                                            <span>{activeConversation.lastActive}</span>
                                            {activeConversation.typing && (
                                                <span className="flex ml-2 items-center text-xs text-[#D4AF37]">
                          <span className="flex space-x-1 mr-1">
                            <span className="w-1 h-1 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-1 h-1 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1 h-1 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </span>
                          en train d'écrire...
                        </span>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-1.5">
                                <button
                                    className="p-2.5 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-[#D4AF37] transition-all duration-200"
                                >
                                    <Camera size={18}/>
                                </button>
                                <button
                                    className="p-2.5 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-[#D4AF37] transition-all duration-200"
                                >
                                    <Settings size={18}/>
                                </button>
                                <button
                                    className="p-2.5 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-[#D4AF37] transition-all duration-200"
                                >
                                    <MoreVertical size={18}/>
                                </button>
                            </div>
                        </div>

                        {/* Contenu du chat */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6" style={{ backgroundImage: 'url(/assets/images/chat-bg-pattern.png)', backgroundBlendMode: 'soft-light', backgroundOpacity: 0.03 }}>
                                {/* Date separators and messages */}
                                {activeConversation.messages.length > 0 && (
                                    <DateSeparator date={activeConversation.messages[0].date} />
                                )}

                                {activeConversation.messages.map((msg, idx) => {
                                    // Déterminer si la date a changé et si on doit afficher un séparateur
                                    const showDateSeparator = idx > 0 && msg.date !== activeConversation.messages[idx-1].date;
                                    // Déterminer si le message suivant est du même expéditeur
                                    const isConsecutive = idx > 0 &&
                                        msg.isMe === activeConversation.messages[idx-1].isMe &&
                                        msg.sender === activeConversation.messages[idx-1].sender;
                                    return (
                                        <React.Fragment key={msg.id}>
                                            {showDateSeparator && <DateSeparator date={msg.date} />}

                                            <div
                                                className={`flex items-start gap-3 group ${msg.isMe ? "flex-row-reverse" : ""}`}
                                                style={{ marginTop: isConsecutive ? '-16px' : '' }}
                                            >
                                                {/* Avatar only for first message in sequence */}
                                                {!isConsecutive ? (
                                                    <Avatar
                                                        isGroup={activeConversation.isGroup && !msg.isMe}
                                                        size="small"
                                                        image={msg.avatar}
                                                        name={msg.sender}
                                                    />
                                                ) : (
                                                    <div className="w-8 h-8 flex-shrink-0" /> // Placeholder pour maintenir l'alignement
                                                )}

                                                <div className={`max-w-[75%] flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}>
                                                    {/* Sender name for group chats */}
                                                    {activeConversation.isGroup && !msg.isMe && !isConsecutive && (
                                                        <span className="text-xs text-[#D4AF37] mb-1 font-medium ml-1">
                              {msg.sender}
                            </span>
                                                    )}

                                                    <div
                                                        className={`rounded-2xl px-4 py-3 shadow-sm ${
                                                            msg.isMe
                                                                ? "bg-gradient-to-r from-[#D4AF37] to-[#c4a030] text-zinc-900"
                                                                : "bg-zinc-800/80 text-white"
                                                        } ${isConsecutive ? (msg.isMe ? 'rounded-tr-md' : 'rounded-tl-md') : ''}`}
                                                    >
                                                        <p className="leading-relaxed break-words text-sm">{msg.content}</p>
                                                    </div>

                                                    <div className={`flex items-center mt-1 text-xs text-zinc-500 ${msg.isMe ? "justify-end" : "justify-start"}`}>
                                                        <span className="px-2">{msg.timestamp}</span>
                                                        {msg.isMe && (
                                                            <span>
                                {msg.status === 'sent' && <Check className="w-3 h-3" />}
                                                                {msg.status === 'delivered' && <CheckCheck className="w-3 h-3" />}
                                                                {msg.status === 'read' && <CheckCheck className="w-3 h-3 text-[#D4AF37]" />}
                              </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Zone de saisie */}
                            <div className="p-4 border-t border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75 relative">
                                {showAttachmentOptions && (
                                    <div className="absolute bottom-20 left-4 bg-zinc-800 rounded-lg shadow-lg p-2 flex space-x-2 border border-zinc-700 animate-fadeIn">
                                        <button className="p-2.5 hover:bg-zinc-700 rounded-full text-[#D4AF37] transition-colors">
                                            <ImageIcon size={20} />
                                        </button>
                                        <button className="p-2.5 hover:bg-zinc-700 rounded-full text-[#D4AF37] transition-colors">
                                            <File size={20} />
                                        </button>
                                        <button className="p-2.5 hover:bg-zinc-700 rounded-full text-[#D4AF37] transition-colors">
                                            <Camera size={20} />
                                        </button>
                                        <button
                                            onClick={() => setShowAttachmentOptions(false)}
                                            className="p-2.5 hover:bg-zinc-700 rounded-full text-zinc-400 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                )}

                                {showEmojiPicker && (
                                    <div className="absolute bottom-20 right-4 bg-zinc-800 rounded-lg shadow-lg p-3 border border-zinc-700 animate-fadeIn">
                                        <div className="flex flex-wrap gap-2 max-w-[280px]">
                                            {commonEmojis.map(emoji => (
                                                <button
                                                    key={emoji}
                                                    onClick={() => handleAddEmoji(emoji)}
                                                    className="text-xl hover:bg-zinc-700 p-2 rounded-lg transition-colors"
                                                >
                                                    {emoji}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => setShowEmojiPicker(false)}
                                            className="absolute top-1 right-1 p-1 hover:bg-zinc-700 rounded-full text-zinc-400 transition-colors"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                )}

                                <div className="flex items-center bg-zinc-800/80 rounded-full px-4 py-3 focus-within:ring-2 ring-[#D4AF37]/20 transition-all duration-200">
                                    <button
                                        onClick={() => {
                                            setShowAttachmentOptions(!showAttachmentOptions)
                                            setShowEmojiPicker(false)
                                        }}
                                        className={`p-2 hover:bg-zinc-700/50 rounded-full ${showAttachmentOptions ? 'text-[#D4AF37]' : 'text-zinc-400'} transition-colors duration-200 mr-1`}
                                    >
                                        <Paperclip size={18} />
                                    </button>

                                    <input
                                        ref={inputRef}
                                        type="text"
                                        placeholder="Écrivez votre message..."
                                        className="flex-1 bg-transparent border-none focus:outline-none text-sm placeholder-zinc-500"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                    />

                                    <div className="flex items-center ml-2">
                                        <button
                                            onClick={() => {
                                                setShowEmojiPicker(!showEmojiPicker)
                                                setShowAttachmentOptions(false)
                                            }}
                                            className={`p-2 hover:bg-zinc-700/50 rounded-full ${showEmojiPicker ? 'text-[#D4AF37]' : 'text-zinc-400'} transition-colors duration-200`}
                                        >
                                            <Smile size={18} />
                                        </button>
                                        <button
                                            className="p-2 hover:bg-zinc-700/50 rounded-full text-zinc-400 transition-colors duration-200"
                                        >
                                            <Mic size={18} />
                                        </button>
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!message.trim()}
                                            className={`ml-1 p-2.5 ${message.trim() ? 'bg-[#D4AF37] hover:bg-[#c4a030] text-zinc-900' : 'bg-zinc-700 text-zinc-500'} rounded-full transition-all duration-200`}
                                        >
                                            <Send size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-zinc-400 p-6 bg-gradient-to-b from-zinc-900/40 to-zinc-900/20">
                        <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <MessageSquare size={32} className="text-[#D4AF37]" />
                        </div>
                        <p className="text-xl font-medium mb-2 text-white">Vos messages</p>
                        <p className="text-sm text-zinc-500 mb-6 text-center max-w-md">
                            Sélectionnez une conversation pour commencer à discuter ou créez-en une nouvelle
                        </p>
                        <button className="px-4 py-2.5 bg-[#D4AF37] hover:bg-[#c4a030] text-zinc-900 rounded-lg flex items-center gap-2 font-medium transition-colors">
                            <Plus size={18} />
                            Nouvelle conversation
                        </button>
                    </div>
                )}
            </div>

            {/* Style pour les animations */}
            <style jsx>
                {`
                    @keyframes fadeIn {
                      from { opacity: 0; transform: translateY(10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fadeIn {
                      animation: fadeIn 0.2s ease-out forwards;
                    }
                    
                    /* Masquer la scrollbar tout en gardant la fonctionnalité */
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                    .scrollbar-hide {
                      -ms-overflow-style: none;
                      scrollbar-width: none;
                    }
                `}
            </style>
        </div>
    );
};

export default MessagingInterface;