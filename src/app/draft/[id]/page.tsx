"use client"

import { useState, useEffect, useContext } from "react";
import { socket, SocketContext } from '@/app/socketProvider';

export default function Page({ params }: { params: { id: string } }) {
	const { setlobbyInfos, lobbyInfos } = useContext(SocketContext);
    console.log(lobbyInfos, 'zszsz')

	return (
		<div className="bg-gradient-to-br from-blue-500 via-purple-500 to-red-500">
			test
		</div>
	);
}