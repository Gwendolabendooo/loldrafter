"use client"

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
  lobbyInfos: null,
  setlobbyInfos: (idRoom) => {lobbyInfos = idRoom}, // une fonction vide par défaut
});

export const SocketProvider = ({ children }) => {
  const [lobbyInfos, setlobbyInfos] = useState({
    redTeam: {
      name: 'red'
    },
    blueTeam: {
      name: 'blue'
    }
  });

  return (
    <SocketContext.Provider value={{ socket, lobbyInfos, setlobbyInfos }}>
      {children}
    </SocketContext.Provider>
  );
};