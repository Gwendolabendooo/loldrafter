"use client";
import { io, Socket } from "socket.io-client";
import { useState } from "react";
import ChatPage from "@/app/components/page";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");

  let socket: Socket;
  
  if (process.env.SOCKET_URL) {
    socket = io(process.env.SOCKET_URL);
  }

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      console.log(userName, "userName", roomId, "roomId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);
// You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowChat(true);
        setShowSpinner(false);
      }, 4000);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };

  return (
    <div>
      <div
        style={{ display: showChat ? "none" : "" }}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          disabled={showSpinner}
        />
        <input
          type="text"
          placeholder="room id"
          onChange={(e) => setroomId(e.target.value)}
          disabled={showSpinner}
        />
        <button onClick={() => handleJoin()}>
          {!showSpinner ? (
            "Join"
          ) : (
            <div></div>
          )}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} roomId={roomId} username={userName} />
      </div>
    </div>
  );
}