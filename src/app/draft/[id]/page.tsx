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
    const [hideActions, setHideActions] = useState(false);

    const [cpt, setCpt] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const [needPick, setNeedPick] = useState(false);

    const isRed = socket.id == localInfos?.redTeam?.user;
    const isBlue = socket.id == localInfos?.blueTeam?.user;

    //   const handleMouseEnter = (championId: number) => {
    //     setHoveredChampionId(championId);
    //   };

    //   const handleMouseLeave = () => {
    //     setHoveredChampionId(null);
    //   };

    socket.on('updateReady', (data) => {
        if (data.redTeam.ready && data.blueTeam.ready) {
            setIsVisible(true);
            if (isBlue) {
                setNeedPick(true);
            }
        }

        setLocalInfos(data);
    });

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

    socket.on('endDraft', () => {
        setIsVisible(false);
        setHideActions(true);
    });

    socket.on('restartChrono', () => {
        setCpt(cpt + 1);
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
        //3 premiers ban
        if (!currentPhase) {
            if (currentBan === 2 || currentBan === 4) {
                setCurrentPhase(true);
            }

            if (isRed) {
                if (!actualValue.redTeam.ban[currentBan]) {
                    actualValue.redTeam.ban[currentBan] = {
                        id: 429,
                        name: 'Kalista',
                        squarePortraitPath: '/out/429.png',
                        roles: ['marksman'],
                        bannerUrl: '/banners/429/429000.jpg',
                    };
                }

                if (currentBan === 2) {
                    actualValue.next = {
                        is: 'bluePick',
                        index: actualValue.blueTeam.pick.length,
                    };
                } else {
                    actualValue.next = {
                        is: 'blueBan',
                        index: actualValue.blueTeam.ban.length,
                    };
                }

                socket.emit('updateInfosDraft', actualValue, params.id);
                socket.emit(
                    'changePlayer',
                    params.id,
                    actualValue.blueTeam.user
                );
            } else {
                if (!actualValue.blueTeam.ban[currentBan]) {
                    actualValue.blueTeam.ban[currentBan] = {
                        id: 429,
                        name: 'Kalista',
                        squarePortraitPath: '/out/429.png',
                        roles: ['marksman'],
                        bannerUrl: '/banners/429/429000.jpg',
                    };
                }
                if (currentBan === 4) {
                    actualValue.next = {
                        is: 'redPick',
                        index: actualValue.redTeam.pick.length,
                    };
                } else {
                    actualValue.next = {
                        is: 'redBan',
                        index: actualValue.redTeam.ban.length,
                    };
                }
                socket.emit('updateInfosDraft', actualValue, params.id);
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
            }

            setNeedPick(false);
        }

        if (isRed && currentPhase) {
            if (!actualValue.redTeam.pick[currentPick]) {
                actualValue.redTeam.pick[currentPick] = {
                    id: 429,
                    name: 'Kalista',
                    squarePortraitPath: '/out/429.png',
                    roles: ['marksman'],
                    bannerUrl: '/banners/429/429000.jpg',
                };
            }

            if (currentPick <= 1) {
                setCurrentPick(currentPick + 1);
                actualValue.next = {
                    is: 'redPick',
                    index: actualValue.redTeam.pick.length,
                };
                if (currentPick === 1) {
                    setNeedPick(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        actualValue.blueTeam.user
                    );
                actualValue.next = {
                    is: 'bluePick',
                    index: actualValue.blueTeam.pick.length,
                };
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
                actualValue.next = {
                    is: 'bluePick',
                    index: actualValue.blueTeam.pick.length,
                };
            }

            if (currentPick === 2) {
                setCurrentPick(currentPick + 1);
                if (currentPick === 2) {
                    setCurrentPhase(false);
                }
                actualValue.next = {
                    is: 'redBan',
                    index: actualValue.redTeam.ban.length,
                };
            }

            if (currentPick === 4 && currentPhase) {
                setCurrentPick(currentPick + 1);
                setNeedPick(false);
            }

                socket.emit('updateInfosDraft', actualValue, params.id);

        }

        if (isBlue && currentPhase) {
            if (!actualValue.blueTeam.pick[currentPick]) {
                actualValue.blueTeam.pick[currentPick] = {
                    id: 429,
                    name: 'Kalista',
                    squarePortraitPath: '/out/429.png',
                    roles: ['marksman'],
                    bannerUrl: '/banners/429/429000.jpg',
                };
            }
            if (currentPick === 0) {
                setCurrentPick(currentPick + 1);
                setNeedPick(false);
                socket.emit(
                    'changePlayer',
                    params.id,
                    actualValue.redTeam.user
                );
                actualValue.next = {
                    is: 'redPick',
                    index: actualValue.redTeam.pick.length,
                };
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
                actualValue.next = {
                    is: 'bluePick',
                    index: actualValue.blueTeam.pick.length,
                };
                if (currentPick === 2) {
                    setNeedPick(false);
                    setCurrentPhase(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        actualValue.redTeam.user
                    );

                actualValue.next = {
                    is: 'redPick',
                    index: actualValue.redTeam.pick.length,
                };
                }
            }

if (currentPick === 3) {
                actualValue.next = {
                    is: 'bluePick',
                    index: actualValue.blueTeam.pick.length,
                };
}

if (currentPick === 4) {
    actualValue.next = {
        is: 'redPick',
        index: actualValue.redTeam.pick.length,
    };
}

                socket.emit('updateInfosDraft', actualValue, params.id);

        }
        if (actualValue.redTeam.pick.length === 5) {
            socket.emit('endDraft', params.id);
        }

        socket.emit('restartChrono', params.id);
    };

    const renderRedTeamPick = () => {
        // Utilisez Array.map pour générer les éléments div pour chaque pick
        const redpicks = localInfos?.redTeam.pick.map((pick, index) => (
            <div
                key={index}
                className="w-[200px] h-[100px] bg-white bannerChamp"
                style={{
                    backgroundImage: `url(${pick.bannerUrl})`,
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
                        className={
                            index === 0 &&
                            localInfos.next &&
                            localInfos.next.is === 'redPick' &&
                            localInfos.next.index ===
                                localInfos?.redTeam.pick.length
                                ? 'nextChamp w-[200px] h-[100px] bg-white bannerChamp'
                                : 'w-[200px] h-[100px] bg-white bannerChamp'
                        }></div>
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
                className="w-[200px] h-[100px] bg-white bannerChamp"
                style={{
                    backgroundImage: `url(${pick.bannerUrl})`,
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
                        className={
                            index === 0 &&
                            localInfos.next &&
                            localInfos.next.is === 'bluePick' &&
                            localInfos.next.index ===
                                localInfos?.blueTeam.pick.length
                                ? 'nextChamp w-[200px] h-[100px] bg-white bannerChamp'
                                : 'w-[200px] h-[100px] bg-white bannerChamp'
                        }></div>
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
                className="w-[100px] h-[100px] bg-white"
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
                        className={
                            index === 0 &&
                            localInfos.next &&
                            localInfos.next.is === 'blueBan' &&
                            localInfos.next.index ===
                                localInfos?.blueTeam.ban.length
                                ? 'nextChamp w-[100px] h-[100px] bg-white'
                                : 'w-[100px] h-[100px] bg-white'
                        }></div>
                ));
        }

        // Fusionnez les bans avec les bans vides si nécessaire
        return [...(blueBans || []), ...(emptyBans || [])];
    };

    const renderRedTeamBans = () => {
        console.log(localInfos);
        // Utilisez Array.map pour générer les éléments div pour chaque ban
        const redBans = localInfos?.redTeam.ban.map((ban, index) => (
            <div
                key={index}
                className="w-[100px] h-[100px] bg-white"
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
                        className={
                            index === 0 &&
                            localInfos.next &&
                            localInfos.next.is === 'redBan' &&
                            localInfos.next.index ===
                                localInfos?.redTeam.ban.length
                                ? 'nextChamp w-[100px] h-[100px] bg-white'
                                : 'w-[100px] h-[100px] bg-white'
                        }></div>
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

    const isReady = () => {
        let actualValue = { ...localInfos };
        if (isRed) {
            actualValue.redTeam.ready = true;
        } else {
            actualValue.blueTeam.ready = true;
        }
        socket.emit('updateReady', actualValue, params.id);
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
            <div className="h-[17%] flex flex-row justify-between items-center">
                <div>
                    <h2>{localInfos.blueTeam.name}</h2>
                </div>
                {(!localInfos.blueTeam.ready || !localInfos.redTeam.ready) && (
                    <div className="chrono">
                        {localInfos.redTeam.ready && !localInfos.blueTeam.ready
                            ? 1
                            : !localInfos.redTeam.ready &&
                                localInfos.blueTeam.ready
                              ? 1
                              : 0}
                        /2
                    </div>
                )}
                {isVisible && (
                    <Timer newId={cpt} onFinish={() => handleFinish()} />
                )}
                <div>
                    <h2>{localInfos.redTeam.name}</h2>
                </div>
            </div>
            <div className="flex flex-row justify-between h-[65%]">
                <div className="w-[300px] shrink-0">
                    <div className="flex flex-wrap justify-between h-full">
                        {renderBlueTeamPick()}
                    </div>
                </div>
                <div className="flex flex-wrap w-full">
                    <ListChampions
                        onChampionClick={handleChampionClick}
                        infos={localInfos}
                        cliquable={needPick}
                    />
                </div>
                <div className="w-[300px] shrink-0 flex flex-wrap justify-end">
                    <div className="flex flex-wrap h-full justify-end">
                        {renderRedTeamPick()}
                    </div>
                </div>
            </div>
            <div className="h-[14%] w-full mt-5 flex flex-row justify-between">
                <div className="bg-blue flex items-center justify-center flex-row gap-5 ctn-ban">
                    {renderBlueTeamBans()}
                </div>
                {!hideActions && (
                    <div className="flex items-center justify-center">
                        {!isVisible && (isRed || isBlue) ? (
                            <button
                                onClick={() => isReady()}
                                className={
                                    (isRed && !localInfos.redTeam.ready) ||
                                    (isBlue && !localInfos.blueTeam.ready)
                                        ? 'glow-on-hover'
                                        : ''
                                }
                                type="button">
                                Prêt
                            </button>
                        ) : (
                            (isRed || isBlue) && (
                                <div
                                    className="pick p-2 rounded cursor-pointer"
                                    onClick={() => needPick && validChoice()}>
                                    Valider
                                </div>
                            )
                        )}
                    </div>
                )}
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
