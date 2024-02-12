"use client"

import React, { useState, useEffect } from 'react';

interface TimerProps {
  onFinish: () => void;
  restartCallback: () => void; // Ajout de la fonction callback pour redémarrer
}

const Timer: React.FC<TimerProps> = ({ onFinish, restartCallback }) => {
  const [seconds, setSeconds] = useState<number>(10);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
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
    restartCallback(); // Appeler la fonction de redémarrage fournie par le parent
    setSeconds(10); // Réinitialiser les secondes
  }, [restartCallback]);

  return (
    <div>
      <h2>{seconds}</h2>
    </div>
  );
};

export default Timer;