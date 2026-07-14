# Notification System using React Context API + TypeScript

A simple notification system built with **React Context API**, **TypeScript**, and **Tailwind CSS**. This project demonstrates how to create and use global state with Context API without prop drilling.

## Features

* React Context API for global state management
* TypeScript for type safety
* Custom hook (`useNotify`) for accessing the context
* Notification messages for:

  * Save
  * Edit
  * Delete
* Component ko CSS chai AI le banaako. Kaamchalau 

## Project Structure

```text
src
├── components
│   └── NotiCenter.tsx
│
├── context
│   ├── NotificationContext.tsx
│   └── NotificationProvider.tsx
│
├── hooks
│   └── useNotify.tsx
│
└── app
    └── page.tsx
```



## How It Works

1. `NotificationContext` creates the global context.
2. `NotificationProvider` stores the current notification using `useState`.
3. `showNotification()` updates the notification.
4. `useNotify()` is a custom hook that provides easy access to the context.
5. The `NotiCenter` component displays the current notification and provides buttons to trigger different notifications.

## Notification Types

* Save → "Message is saved"
* Edit → "Message has been edited"
* Delete → "Message has been deleted"
