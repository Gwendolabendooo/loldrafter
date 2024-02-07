"use client";
import { useState, useContext } from "react";
import ChatPage from "@/app/components/page";
import {SocketContext, socket} from '@/app/socketProvider';

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomIdloc, setroomIdloc] = useState("");

  const { roomId, setRoomId } = useContext(SocketContext);

  const handleJoin = () => {
    if (userName !== "" && roomIdloc !== "") {
      socket.emit("join_room", roomIdloc);
      setShowSpinner(true);
// You can remove this setTimeout and add your own logic
      setTimeout(() => {
        setShowChat(true);
        setRoomId(roomIdloc)
      }, 500);
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
          onChange={(e) => setroomIdloc(e.target.value)}
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
        {socket && roomId && <ChatPage socket={socket} roomId={roomId} username={userName} />}
      </div>
    </div>
  );
}