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
      console.log('newmessagr', roomCode)
      router.push('/lobby/' + roomCode)
    });

    // Clean up listener when component unmounts
    return () => {
      socket.off("room_created");
    };
  }, []);

  const handleJoin = (dataTeams) => {
    const randomRoomId = generateRoomId()
    dataTeams.id = randomRoomId
    setlobbyInfos(dataTeams)
    socket.emit("join_room", randomRoomId);
  };

  const onSubmit = (data) => {
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
          placeholder="Red Team Name"
          {...register("redTeam.name")}
        />
        {errors.redTeam && <span>{errors.redTeam.message}</span>}
        <input
          type="text"
          placeholder="Blue Team Name"
          {...register("blueTeam.name")}
        />
        {errors.blueTeam && <span>{errors.blueTeam.message}</span>}
        <button type="submit" disabled={showSpinner}>
          {showSpinner ? "Creating Room..." : "Create Room"}
        </button>
      </form>
    </div>
  );
}