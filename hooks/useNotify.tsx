"use client"
 import { useContext } from "react";
 import { NotificationContext } from "@/context/NotificationContext";

 export function useNotify(){
    const context = useContext(NotificationContext)
    if (!context){
        throw new Error ("provider wrap gareko milena");
    }
    
        return context
 }