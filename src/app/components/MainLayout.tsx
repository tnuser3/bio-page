"use client";
import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import BioSection from './BioSection';

const MainLayout: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <BioSection />
      )}
    </div>
  );
};

export default MainLayout;
