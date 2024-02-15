"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { socket, SocketContext } from '@/app/socketProvider';

// Schéma Zod pour valider les noms des équipes
const TeamSchema = z.object({
  redTeam: z.object({
    name: z.string().nonempty()
  }),
  blueTeam: z.object({
    name: z.string().nonempty()
  }),
});

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(TeamSchema)
  });

  const { setlobbyInfos } = useContext(SocketContext);
  const [showSpinner, setShowSpinner] = useState(false);

  const generateRoomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useEffect(() => {
    socket.on("room_created", (roomCode: string) => {
      router.push('/lobby/' + roomCode)
    });

    // Clean up listener when component unmounts
    return () => {
      socket.off("room_created");
    };
  }, []);

  const handleJoin = (dataTeams: any) => {
    const randomRoomId = generateRoomId()
    dataTeams.id = randomRoomId
    dataTeams.redTeam.ban = []
    dataTeams.redTeam.pick = []
    dataTeams.blueTeam.ban = []
    dataTeams.blueTeam.pick = []
  dataTeams.next = {
is: 'blueBan',
index: 0
}
    setlobbyInfos(dataTeams)
    socket.emit("join_room", randomRoomId);
  };

  const onSubmit = (data: any) => {
    if (!showSpinner) {
      setShowSpinner(true);
      handleJoin(data)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          type="text"
          placeholder="Blue Team Name"
          {...register("blueTeam.name")}
        />
        <input
          type="text"
          placeholder="Red Team Name"
          {...register("redTeam.name")}
        />
        <button type="submit" disabled={showSpinner}>
          {showSpinner ? "Creating Room..." : "Create Room"}
        </button>
      </form>
    </div>
  );
}