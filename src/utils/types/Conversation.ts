import {Message} from "./Message";

export interface Conversation {
    id: number;
    name: string;
    message: string;
    time: string;
    unread: number;
    isGroup: boolean;
    messages: Message[];
}
