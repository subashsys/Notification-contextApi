"use client"
import { createContext} from "react";

export enum NotificationType {
    SAVE="Message is saved",
    EDIT="Message has been edited",
    DELETE="Message has been deleted"
}
interface INotificationContextType{
    notification : NotificationType | null ,
    showNotification: (type:NotificationType)=>void;
}
export const NotificationContext = createContext<INotificationContextType | null>(null)