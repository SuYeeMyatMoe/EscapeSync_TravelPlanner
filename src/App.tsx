import React from 'react';
import { KageLandingPage } from './shaders/landing-pages/LandingPages';

export default function App() {
  return (
    <main className="fixed inset-0 w-screen h-screen bg-[#050B0D] overflow-hidden">
      <KageLandingPage
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          inset: 0,
        }}
      />
    </main>
  );
}
