"use client"

import React from 'react';
import {SocketContext, socket} from '@/app/socketProvider';

interface TestComponentProps {
  name: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ name }) => {
  return (
    <div>
      <h1>Bienvenue, {name} !</h1>
      <p>C'est un exemple de composant en TypeScript avec Refghgact.</p>
    </div>
  );
}

export default TestComponent;