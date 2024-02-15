'use client';

import { useEffect, useContext } from 'react';
import { socket, SocketContext } from '@/app/socketProvider';

import { useRouter } from 'next/navigation';

enum Team {
    reedTeam,
    blueTeam,
}

export default function ContainerDraft() {
    const { setlobbyInfos, lobbyInfos } = useContext(SocketContext);

    const router = useRouter();

    socket.on('join_team', (userId: string, team: Team, lobbyId: string) => {
		let newRoom: typeof lobbyInfos = lobbyInfos;
		if (newRoom && typeof newRoom[team] !== 'undefined') {
			(newRoom[team] as any).user = userId as any;
		}
		setlobbyInfos(newRoom);
		if (socket.id === userId) {
			router.push('/draft/' + lobbyId);
		}
    });

    useEffect(() => {
        socket.on('send_existingLobby', (infoLob: any) => {
            setlobbyInfos(infoLob);
        });

        return () => {
            socket.off('join_team');
        };
    }, []);

    return null;
}
