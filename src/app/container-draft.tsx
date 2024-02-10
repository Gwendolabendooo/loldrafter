"use client"

import { useEffect, useContext } from "react";
import { socket, SocketContext } from '@/app/socketProvider';

import { useRouter } from 'next/navigation';

export default function containerDraft() {
	const { setlobbyInfos, lobbyInfos } = useContext(SocketContext);

    const router = useRouter();

	useEffect(() => {
		socket.on("join_team", (userId, team, lobbyId) => {
			let newRoom = lobbyInfos
			newRoom[team].user = userId
			setlobbyInfos(newRoom)
            if (socket.id === userId) {
                router.push('/draft/' + lobbyId)
            }
		});

        socket.on("send_existingLobby", (infoLob) => {
			setlobbyInfos(infoLob)
		});

		return () => {
			socket.off("join_team");
		};
	}, []);

	return (
		null
	);
}