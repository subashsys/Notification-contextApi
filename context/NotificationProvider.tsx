"use client"
import { useState } from "react";
import { NotificationContext, NotificationType } from "./NotificationContext";

export function NotificationProvider({ children,}: { children: React.ReactNode}) {
  const [notification, setNotification] = useState<NotificationType | null>(null)
  
  function showNotification(type: NotificationType) {
  setNotification(type);
}
  return (
    <NotificationContext.Provider
      value={{
        notification,
        showNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}