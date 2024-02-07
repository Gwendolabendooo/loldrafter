import socketio from "socket.io-client";
import React, { createContext, useState } from "react";

export const socket = socketio.connect(
  process.env.SOCKET_URL
    ? process.env.SOCKET_URL
    : "https://socket-lol-draft-80eda8c26e85.herokuapp.com/",
  {
    withCredentials: false,
    transportOptions: {
      polling: {
        extraHeaders: {
          "my-custom-header": "abcd",
        },
      },
    },
  }
);

export const SocketContext = createContext({
  socket,
  roomId: null,
  setRoomId: (idRoom) => {roomId = idRoom}, // une fonction vide par défaut
});

export const SocketProvider = ({ children }) => {
  const [roomId, setRoomId] = useState(null);

  return (
    <SocketContext.Provider value={{ socket, roomId, setRoomId }}>
      {children}
    </SocketContext.Provider>
  );
};