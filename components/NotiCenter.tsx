"use client";

import { NotificationType } from "@/context/NotificationContext";
import { useNotify } from "@/hooks/UseNotify";

function NotiCenter() {
  const { notification, showNotification } = useNotify();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
          Notification Center
        </h1>

        <div className="mb-8 flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
          {notification ? (
            <p className="text-lg font-semibold text-green-600">
              {notification}
            </p>
          ) : (
            <p className="text-slate-400 italic">
              Click a button to show a notification
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => showNotification(NotificationType.SAVE)}
            className="rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-white shadow transition-all duration-200 hover:bg-emerald-600 hover:shadow-lg active:scale-95"
          >
             Save
          </button>

          <button
            onClick={() => showNotification(NotificationType.EDIT)}
            className="rounded-lg bg-amber-500 px-4 py-3 font-semibold text-white shadow transition-all duration-200 hover:bg-amber-600 hover:shadow-lg active:scale-95"
          >
             Edit
          </button>

          <button
            onClick={() => showNotification(NotificationType.DELETE)}
            className="rounded-lg bg-red-500 px-4 py-3 font-semibold text-white shadow transition-all duration-200 hover:bg-red-600 hover:shadow-lg active:scale-95"
          >
             Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotiCenter;
