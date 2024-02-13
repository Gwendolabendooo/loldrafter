'use client';

import React, { useState, useEffect } from 'react';

interface TimerProps {
    onFinish: () => void;
    newId: number; // Ajout de la fonction callback pour redémarrer
}

const Timer: React.FC<TimerProps> = ({ onFinish, newId }) => {
    const [seconds, setSeconds] = useState<number>(10);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 1) {
                    clearInterval(intervalId);
                    onFinish();
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [onFinish]);

    useEffect(() => {
        setSeconds(10); // Réinitialiser les secondes
    }, [newId]);

    return (
        <div>
            <h2>{seconds}</h2>
        </div>
    );
};

export default Timer;
