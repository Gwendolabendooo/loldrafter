'use client';

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

//components
import Timer from '@/app/components/timer';
import ListChampions from '@/app/components/listChamps';

import { socket, SocketContext } from '@/app/socketProvider';

// Créez une fonction de composant React
function Page({ params }: { params: { id: string } }) {
    const { lobbyInfos, setlobbyInfos, socket } = useContext(SocketContext);

    const [currentBan, setCurrentBan] = useState(0);
    const [currentPick, setCurrentPick] = useState(0);

    const [localInfos, setLocalInfos] = useState(lobbyInfos);

    const [selectedChamp, setSelectedChamp] = useState(null);
    const [currentPhase, setCurrentPhase] = useState(false);
    const [cpt, setCpt] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const [needPick, setNeedPick] = useState(
        socket.id == localInfos?.redTeam?.user
            ? false
            : socket.id == localInfos?.blueTeam?.user
              ? true
              : false
    );

    const isRed = socket.id == localInfos?.redTeam?.user;
    const isBlue = socket.id == localInfos?.blueTeam?.user;

    //   const handleMouseEnter = (championId: number) => {
    //     setHoveredChampionId(championId);
    //   };

    //   const handleMouseLeave = () => {
    //     setHoveredChampionId(null);
    //   };

    socket.on('updateInfosDraft', (data) => {
        const redTeamBans = data.redTeam.ban.map((champ) => champ.id);
        const redTeamPicks = data.redTeam.pick.map((champ) => champ.id);
        const blueTeamBans = data.blueTeam.ban.map((champ) => champ.id);
        const blueTeamPicks = data.blueTeam.pick.map((champ) => champ.id);

        const allIds = redTeamBans.concat(
            redTeamPicks,
            blueTeamBans,
            blueTeamPicks
        );

        data.disabled = allIds;

        setLocalInfos(data);
    });

    socket.on('changePlayer', () => {
        setNeedPick(true);
    });

    const chooseChamp = (champion) => {
        const newInfos = { ...localInfos };

        if (currentPhase) {
            if (socket.id == newInfos.redTeam.user) {
                newInfos.redTeam.pick[currentPick] = champion;
            } else if (socket.id == newInfos.blueTeam.user) {
                newInfos.blueTeam.pick[currentPick] = champion;
            }
        } else {
            if (socket.id == newInfos.redTeam.user) {
                newInfos.redTeam.ban[currentBan] = champion;
            } else if (socket.id == newInfos.blueTeam.user) {
                newInfos.blueTeam.ban[currentBan] = champion;
            }
        }

        socket.emit('updateInfosDraft', newInfos, params.id);
    };

    const validChoice = () => {
        const actualValue = localInfos;
        setCpt(cpt + 1);
        //3 premiers ban
        if (!currentPhase) {
            if (currentBan === 2) {
                setCurrentPhase(true);
            }

            if (currentBan === 4 && !currentPhase) {
                setCurrentPhase(true);
            }

            if (isRed) {
                if (!actualValue.redTeam.ban[currentBan]) {
                    actualValue.redTeam.ban[currentBan] = {
                        id: -1,
                        name: 'None',
                        alias: 'None',
                        squarePortraitPath: '/out/-1.png',
                        roles: [],
                    };
                    socket.emit('updateInfosDraft', actualValue, params.id);
                }
                socket.emit(
                    'changePlayer',
                    params.id,
                    actualValue.blueTeam.user
                );
            } else {
                if (!actualValue.blueTeam.ban[currentBan]) {
                    actualValue.blueTeam.ban[currentBan] = {
                        id: -1,
                        name: 'None',
                        alias: 'None',
                        squarePortraitPath: '/out/-1.png',
                        roles: [],
                    };
                    socket.emit('updateInfosDraft', actualValue, params.id);
                }

                socket.emit(
                    'changePlayer',
                    params.id,
                    actualValue.redTeam.user
                );
            }

            if (currentBan < 5 && !currentPhase) {
                setCurrentBan(currentBan + 1);
            } else if (currentPick < 5 && currentPhase) {
                setCurrentPick(currentPick + 1);
            } else {
                console.log('end');
            }

            setNeedPick(false);
        }

        if (isRed && currentPhase) {
            if (!actualValue.redTeam.pick[currentPick]) {
                actualValue.redTeam.pick[currentPick] = {
                    id: -1,
                    name: 'None',
                    alias: 'None',
                    squarePortraitPath: '/out/-1.png',
                    roles: [],
                };
                socket.emit('updateInfosDraft', actualValue, params.id);
            }

            if (currentPick <= 1) {
                setCurrentPick(currentPick + 1);
                if (currentPick === 1) {
                    setNeedPick(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        actualValue.blueTeam.user
                    );
                }
            }

            if (currentPick === 3) {
                setCurrentPick(currentPick + 1);
                setNeedPick(false);
                socket.emit(
                    'changePlayer',
                    params.id,
                    actualValue.blueTeam.user
                );
            }

            if (currentPick === 2) {
                setCurrentPick(currentPick + 1);
                if (currentPick === 2) {
                    setCurrentPhase(false);
                }
            }

            if (currentPick === 4 && currentPhase) {
                setCurrentPick(currentPick + 1);
                setNeedPick(false);
            }
        }

        if (isBlue && currentPhase) {
            if (!actualValue.blueTeam.pick[currentPick]) {
                actualValue.blueTeam.pick[currentPick] = {
                    id: -1,
                    name: 'None',
                    alias: 'None',
                    squarePortraitPath: '/out/-1.png',
                    roles: [],
                };
                socket.emit('updateInfosDraft', actualValue, params.id);
            }
            if (currentPick === 0) {
                setCurrentPick(currentPick + 1);
                setNeedPick(false);
                socket.emit(
                    'changePlayer',
                    params.id,
                    actualValue.redTeam.user
                );
            }

            if (currentPick > 2) {
                setCurrentPick(currentPick + 1);
                if (currentPick === 4) {
                    setNeedPick(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        actualValue.redTeam.user
                    );
                }
            }

            if (currentPick === 1 || currentPick === 2) {
                setCurrentPick(currentPick + 1);
                if (currentPick === 2) {
                    setNeedPick(false);
                    setCurrentPhase(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        actualValue.redTeam.user
                    );
                }
            }
        }
    };

    const renderRedTeamPick = () => {
        // Utilisez Array.map pour générer les éléments div pour chaque pick
        const redpicks = localInfos?.redTeam.pick.map((pick, index) => (
            <div
                key={index}
                className="w-[200px] h-[100px] bg-black"
                style={{
                    backgroundImage: `url(${pick.squarePortraitPath})`,
                }}></div>
        ));

        // Remplissez le reste des picks avec des éléments vides si nécessaire
        let emptypicks = null;
        if (localInfos?.redTeam.pick.length < 5) {
            emptypicks = Array(5 - localInfos?.redTeam.pick.length)
                .fill()
                .map((_, index) => (
                    <div
                        key={index + (localInfos?.redTeam.pick.length ?? 0)}
                        className="w-[200px] h-[100px] bg-black"></div>
                ));
        }

        // Fusionnez les picks avec les picks vides si nécessaire
        return [...(redpicks || []), ...(emptypicks || [])];
    };

    const renderBlueTeamPick = () => {
        // Utilisez Array.map pour générer les éléments div pour chaque pick
        const bluepicks = localInfos?.blueTeam.pick.map((pick, index) => (
            <div
                key={index}
                className="w-[200px] h-[100px] bg-black"
                style={{
                    backgroundImage: `url(${pick.squarePortraitPath})`,
                }}></div>
        ));

        // Remplissez le reste des picks avec des éléments vides si nécessaire
        let emptypicks = null;
        if (localInfos?.blueTeam.pick.length < 5) {
            emptypicks = Array(5 - localInfos?.blueTeam.pick.length)
                .fill()
                .map((_, index) => (
                    <div
                        key={index + (localInfos?.blueTeam.pick.length ?? 0)}
                        className="w-[200px] h-[100px] bg-black"></div>
                ));
        }

        // Fusionnez les picks avec les picks vides si nécessaire
        return [...(bluepicks || []), ...(emptypicks || [])];
    };

    const renderBlueTeamBans = () => {
        // Utilisez Array.map pour générer les éléments div pour chaque ban
        const blueBans = localInfos?.blueTeam.ban.map((ban, index) => (
            <div
                key={index}
                className="w-[100px] h-[100px] bg-black"
                style={{
                    backgroundImage: `url(${ban.squarePortraitPath})`,
                }}></div>
        ));

        let emptyBans = null;
        if (localInfos?.blueTeam.ban.length < 5) {
            emptyBans = Array(5 - localInfos?.blueTeam.ban.length)
                .fill()
                .map((_, index) => (
                    <div
                        key={index + (localInfos?.blueTeam.ban.length ?? 0)}
                        className="w-[100px] h-[100px] bg-black"></div>
                ));
        }

        // Fusionnez les bans avec les bans vides si nécessaire
        return [...(blueBans || []), ...(emptyBans || [])];
    };

    const renderRedTeamBans = () => {
        // Utilisez Array.map pour générer les éléments div pour chaque ban
        const redBans = localInfos?.redTeam.ban.map((ban, index) => (
            <div
                key={index}
                className="w-[100px] h-[100px] bg-black"
                style={{
                    backgroundImage: `url(${ban.squarePortraitPath})`,
                }}></div>
        ));

        let emptyBans = null;
        if (localInfos?.redTeam.ban.length < 5) {
            emptyBans = Array(5 - localInfos?.redTeam.ban.length)
                .fill()
                .map((_, index) => (
                    <div
                        key={index + (localInfos?.redTeam.ban.length ?? 0)}
                        className="w-[100px] h-[100px] bg-black"></div>
                ));
        }

        socket.on('needLobbyInfos', (userId) => {
            socket.emit('sendLobbyInfos', userId, localInfos);
        });

        socket.on('updateInfos', (data) => {
            setLocalInfos(data);
        });

        useEffect(() => {
            if (!lobbyInfos.id) {
                socket.emit('join_existingLobby', params.id);
            }
            return () => {};
        }, []);

        // Fusionnez les bans avec les bans vides si nécessaire
        return [...(redBans || []), ...(emptyBans || [])];
    };

    const handleFinish = () => {
        if (needPick) {
            validChoice();
        }
    };

    const handleRestart = () => {
        setIsVisible(true);
    };

    const handleChampionClick = (champion) => {
        chooseChamp(champion);
    };

    // Utilisez une boucle pour afficher chaque image avec son nom de champion
    return (
        <div style={{ height: '100vh' }}>
            <div className="h-[17%]">
                {isVisible && (
                    <Timer newId={cpt} onFinish={() => handleFinish()} />
                )}
            </div>
            <div className="flex flex-row justify-between h-[65%]">
                <div className="w-[300px] shrink-0">
                    <h2>{localInfos.blueTeam.name}</h2>
                    <div className="flex flex-wrap justify-between h-full">
                        {renderBlueTeamPick()}
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <ListChampions
                        onChampionClick={handleChampionClick}
                        infos={localInfos}
                        cliquable={needPick}
                    />
                </div>
                <div className="w-[300px] shrink-0 flex flex-wrap justify-end">
                    <h2>{localInfos.redTeam.name}</h2>
                    <div className="flex flex-wrap h-full justify-end">
                        {renderRedTeamPick()}
                    </div>
                </div>
            </div>
            <div className="h-[16%] w-full mt-2 flex flex-row justify-between">
                <div className="bg-blue flex items-center justify-center flex-row gap-5 ctn-ban">
                    {renderBlueTeamBans()}
                </div>
                <div
                    className="pick p-2 rounded cursor-pointer"
                    onClick={() => needPick && validChoice()}>
                    click
                </div>
                <div className="bg-blue flex items-center justify-center flex-row gap-5 ctn-ban">
                    {renderRedTeamBans()}
                </div>
            </div>
            ;
        </div>
    );
}

// Exportez le composant
export default Page;
