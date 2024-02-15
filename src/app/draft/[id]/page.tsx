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

    const isRed = socket.id == (localInfos as any)?.redTeam?.user;
    const isBlue = socket.id == (localInfos as any)?.blueTeam?.user;

    //   const handleMouseEnter = (championId: number) => {
    //     setHoveredChampionId(championId);
    //   };

    //   const handleMouseLeave = () => {
    //     setHoveredChampionId(null);
    //   };

    socket.on('updateReady', (data: any) => {
        if (data.redTeam.ready && data.blueTeam.ready) {
            setIsVisible(true);
            if (isBlue) {
                setNeedPick(true);
            }
        }

        setLocalInfos(data);
    });

    socket.on('updateInfosDraft', (data: any) => {
        const redTeamBans = data.redTeam.ban.map((champ: any) => champ.id);
        const redTeamPicks = data.redTeam.pick.map((champ: any) => champ.id);
        const blueTeamBans = data.blueTeam.ban.map((champ: any) => champ.id);
        const blueTeamPicks = data.blueTeam.pick.map((champ: any) => champ.id);

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

    const chooseChamp = (champion: any) => {
        const newInfos = { ...(localInfos as any) };
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
                if (!(actualValue as any).redTeam.ban[currentBan]) {
                    (actualValue as any).redTeam.ban[currentBan] = {
                        id: 429,
                        name: 'Kalista',
                        squarePortraitPath: '/out/429.png',
                        roles: ['marksman'],
                        bannerUrl: '/banners/429/429000.jpg',
                    };
                }

                if (currentBan === 2) {
                    (actualValue as any).next = {
                        is: 'bluePick',
                        index: (actualValue as any).blueTeam.pick.length,
                    };
                } else {
                    (actualValue as any).next = {
                        is: 'blueBan',
                        index: (actualValue as any).blueTeam.ban.length,
                    };
                }

                socket.emit('updateInfosDraft', actualValue as any, params.id);
                socket.emit(
                    'changePlayer',
                    params.id,
                    (actualValue as any).blueTeam.user
                );
            } else {
                if (!(actualValue as any).blueTeam.ban[currentBan]) {
                    (actualValue as any).blueTeam.ban[currentBan] = {
                        id: 429,
                        name: 'Kalista',
                        squarePortraitPath: '/out/429.png',
                        roles: ['marksman'],
                        bannerUrl: '/banners/429/429000.jpg',
                    };
                }
                if (currentBan === 4) {
                    (actualValue as any).next = {
                        is: 'redPick',
                        index: (actualValue as any).redTeam.pick.length,
                    };
                } else {
                    (actualValue as any).next = {
                        is: 'redBan',
                        index: (actualValue as any).redTeam.ban.length,
                    };
                }
                socket.emit('updateInfosDraft', actualValue as any, params.id);
                socket.emit(
                    'changePlayer',
                    params.id,
                    (actualValue as any).redTeam.user
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
            if (!(actualValue as any).redTeam.pick[currentPick]) {
                (actualValue as any).redTeam.pick[currentPick] = {
                    id: 429,
                    name: 'Kalista',
                    squarePortraitPath: '/out/429.png',
                    roles: ['marksman'],
                    bannerUrl: '/banners/429/429000.jpg',
                };
            }

            if (currentPick <= 1) {
                setCurrentPick(currentPick + 1);
                (actualValue as any).next = {
                    is: 'redPick',
                    index: (actualValue as any).redTeam.pick.length,
                };
                if (currentPick === 1) {
                    setNeedPick(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        (actualValue as any).blueTeam.user
                    );
                    (actualValue as any).next = {
                        is: 'bluePick',
                        index: (actualValue as any).blueTeam.pick.length,
                    };
                }
            }

            if (currentPick === 3) {
                setCurrentPick(currentPick + 1);
                setNeedPick(false);
                socket.emit(
                    'changePlayer',
                    params.id,
                    (actualValue as any).blueTeam.user
                );
                (actualValue as any).next = {
                    is: 'bluePick',
                    index: (actualValue as any)?.blueTeam?.pick.length,
                };
            }

            if (currentPick === 2) {
                setCurrentPick(currentPick + 1);
                if (currentPick === 2) {
                    setCurrentPhase(false);
                }
                (actualValue as any).next = {
                    is: 'redBan',
                    index: (actualValue as any as any).redTeam.ban.length,
                };
            }

            if (currentPick === 4 && currentPhase) {
                setCurrentPick(currentPick + 1);
                setNeedPick(false);
            }

            socket.emit('updateInfosDraft', actualValue as any, params.id);
        }

        if (isBlue && currentPhase) {
            if (!(actualValue as any).blueTeam.pick[currentPick]) {
                (actualValue as any).blueTeam.pick[currentPick] = {
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
                    (actualValue as any).redTeam.user
                );
                (actualValue as any).next = {
                    is: 'redPick',
                    index: (actualValue as any).redTeam.pick.length,
                };
            }

            if (currentPick > 2) {
                setCurrentPick(currentPick + 1);
                if (currentPick === 4) {
                    setNeedPick(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        (actualValue as any).redTeam.user
                    );
                }
            }

            if (currentPick === 1 || currentPick === 2) {
                setCurrentPick(currentPick + 1);
                (actualValue as any).next = {
                    is: 'bluePick',
                    index: (actualValue as any).blueTeam.pick.length,
                };
                if (currentPick === 2) {
                    setNeedPick(false);
                    setCurrentPhase(false);
                    socket.emit(
                        'changePlayer',
                        params.id,
                        (actualValue as any).redTeam.user
                    );

                    (actualValue as any).next = {
                        is: 'redPick',
                        index: (actualValue as any).redTeam.pick.length,
                    };
                }
            }

            if (currentPick === 3) {
                (actualValue as any).next = {
                    is: 'bluePick',
                    index: (actualValue as any).blueTeam.pick.length,
                };
            }

            if (currentPick === 4) {
                (actualValue as any).next = {
                    is: 'redPick',
                    index: (actualValue as any).redTeam.pick.length,
                };
            }

            socket.emit('updateInfosDraft', actualValue as any, params.id);
        }
        if ((actualValue as any).redTeam.pick.length === 5) {
            socket.emit('endDraft', params.id);
        }

        socket.emit('restartChrono', params.id);
    };

    const renderRedTeamPick = () => {
        // Utilisez Array.map pour générer les éléments div pour chaque pick
        const redpicks = (localInfos as any)?.redTeam.pick.map(
            (pick: any, index: number) => (
                <div
                    key={index}
                    className="w-[200px] h-[100px] bg-white bannerChamp"
                    style={{
                        backgroundImage: `url(${pick.bannerUrl})`,
                    }}></div>
            )
        );

        // Remplissez le reste des picks avec des éléments vides si nécessaire
        let emptypicks = null;
        if ((localInfos as any)?.redTeam.pick.length < 5) {
            emptypicks = Array(5 - (localInfos as any)?.redTeam.pick.length)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={index + ((localInfos as any)?.redTeam.pick.length ?? 0)}
                        className={
                            index === 0 &&
                            (localInfos as any).next &&
                            (localInfos as any).next.is === 'redPick' &&
                            (localInfos as any).next.index ===
                                (localInfos as any)?.redTeam.pick.length
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
        const bluepicks = (localInfos as any)?.blueTeam.pick.map((pick: any, index: number) => (
            <div
                key={index}
                className="w-[200px] h-[100px] bg-white bannerChamp"
                style={{
                    backgroundImage: `url(${pick.bannerUrl})`,
                }}></div>
        ));

        // Remplissez le reste des picks avec des éléments vides si nécessaire
        let emptypicks = null;
        if ((localInfos as any)?.blueTeam.pick.length < 5) {
            emptypicks = Array(5 - (localInfos as any)?.blueTeam.pick.length)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={
                            index +
                            ((localInfos as any)?.blueTeam.pick.length ?? 0)
                        }
                        className={
                            index === 0 &&
                            (localInfos as any).next &&
                            (localInfos as any).next.is === 'bluePick' &&
                            (localInfos as any).next.index ===
                                (localInfos as any)?.blueTeam.pick.length
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
        const blueBans = (localInfos as any)?.blueTeam.ban.map((ban: any, index: number) => (
            <div
                key={index}
                className="w-[100px] h-[100px] bg-white"
                style={{
                    backgroundImage: `url(${ban.squarePortraitPath})`,
                }}></div>
        ));

        let emptyBans = null;
        if ((localInfos as any)?.blueTeam.ban.length < 5) {
            emptyBans = Array(5 - (localInfos as any)?.blueTeam.ban.length)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={
                            index +
                            ((localInfos as any)?.blueTeam.ban.length ?? 0)
                        }
                        className={
                            index === 0 &&
                            (localInfos as any).next &&
                            (localInfos as any).next.is === 'blueBan' &&
                            (localInfos as any).next.index ===
                                (localInfos as any)?.blueTeam.ban.length
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
        const redBans = (localInfos as any)?.redTeam.ban.map((ban: any, index: number) => (
            <div
                key={index}
                className="w-[100px] h-[100px] bg-white"
                style={{
                    backgroundImage: `url(${ban.squarePortraitPath})`,
                }}></div>
        ));

        let emptyBans = null;
        if ((localInfos as any)?.redTeam.ban.length < 5) {
            emptyBans = Array(5 - (localInfos as any)?.redTeam.ban.length)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={
                            index +
                            ((localInfos as any)?.redTeam.ban.length ?? 0)
                        }
                        className={
                            index === 0 &&
                            (localInfos as any).next &&
                            (localInfos as any).next.is === 'redBan' &&
                            (localInfos as any).next.index ===
                                (localInfos as any)?.redTeam.ban.length
                                ? 'nextChamp w-[100px] h-[100px] bg-white'
                                : 'w-[100px] h-[100px] bg-white'
                        }></div>
                ));
        }

        socket.on('needLobbyInfos', (userId: string) => {
            socket.emit('sendLobbyInfos', userId, localInfos);
        });

        socket.on('updateInfos', (data : any) => {
            setLocalInfos(data);
        });

        useEffect(() => {
            if (!(lobbyInfos as any).id) {
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
        let actualValue = { ...(localInfos as any) };
        if (isRed) {
            (actualValue as any).redTeam.ready = true;
        } else {
            (actualValue as any).blueTeam.ready = true;
        }
        socket.emit('updateReady', actualValue as any, params.id);
    };

    const handleRestart = () => {
        setIsVisible(true);
    };

    const handleChampionClick = (champion: any) => {
        chooseChamp(champion);
    };

    // Utilisez une boucle pour afficher chaque image avec son nom de champion
    return (
        <div style={{ height: '100vh' }}>
            <div className="h-[17%] flex flex-row justify-between items-center">
                <div>
                    <h2>{(localInfos as any).blueTeam.name}</h2>
                </div>
                {(!(localInfos as any).blueTeam.ready || !(localInfos as any).redTeam.ready) && (
                    <div className="chrono">
                        {(localInfos as any).redTeam.ready && !(localInfos as any).blueTeam.ready
                            ? 1
                            : !(localInfos as any).redTeam.ready &&
                                (localInfos as any).blueTeam.ready
                              ? 1
                              : 0}
                        /2
                    </div>
                )}
                {isVisible && (
                    <Timer newId={cpt} onFinish={() => handleFinish()} />
                )}
                <div>
                    <h2>{(localInfos as any).redTeam.name}</h2>
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
                                    (isRed &&
                                        !(localInfos as any).redTeam.ready) ||
                                    (isBlue &&
                                        !(localInfos as any).blueTeam.ready)
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
