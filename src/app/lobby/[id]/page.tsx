"use client"

import { useState, useEffect, useContext } from "react";
import { socket, SocketContext } from '@/app/socketProvider';

export default function Page({ params }: { params: { id: string } }) {
	const { setlobbyInfos, lobbyInfos } = useContext(SocketContext);

	const handleJoinTeam = (team: string) => {
        if (!(lobbyInfos as any)[team].user) {
            socket.emit('join_team', params.id, team);
        }
    };

	socket.on("needLobbyInfos", (userId: string) => {
		socket.emit("sendLobbyInfos", userId, lobbyInfos);
	});

	socket.on("updateInfos", (data: any) => {
		setlobbyInfos(data)
	});

    socket.on('updateReady', (data: string) => {
		setlobbyInfos(data);
    });

	useEffect(() => {
		if (!(lobbyInfos as any).id) {
            socket.emit('join_existingLobby', params.id);
        }
	}, [])

	return (
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-red-500">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <h2>{(lobbyInfos as any).blueTeam.name}</h2>
                    <button onClick={() => handleJoinTeam('blueTeam')}>
                        Join Blue Team
                    </button>
                </div>
                <div>
                    <h2>{(lobbyInfos as any).redTeam.name}</h2>
                    <button onClick={() => handleJoinTeam('redTeam')}>
                        Join Red Team
                    </button>
                </div>
            </div>
        </div>
    );
}