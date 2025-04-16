
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume, VolumeX } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Particles } from "@/components/magicui/particles";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleStart = () => {
    setIsAnimating(false);
    setTimeout(onComplete, 1000);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.2,
            transition: { 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50 cursor-pointer"
          onClick={handleStart}
        >
        
          <Particles
            className="fixed inset-0 z-[999] w-full h-full"
            quantity={200}
            ease={80}
            color="#FFF"
            refresh
          />
          <div className="absolute top-5 right-5">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMute}
              className="text-white/70 hover:text-white"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume className="h-5 w-5" />}
            </Button>
          </div>
          
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glow"
            >
              <motion.h1 
                className="text-4xl md:text-7xl lg:text-8xl font-bold"
                animate={{ 
                  backgroundPosition: ["200% 0%", "0% 0%"],
                }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              >
                My name is <AuroraText>kman</AuroraText>
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mt-6 rounded-full"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
              className="mt-8 text-white/70 text-lg"
            >
              Click anywhere to enter
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
