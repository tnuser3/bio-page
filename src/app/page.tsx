'use client'
import { useEffect, useState } from "react";
import MainLayout from '@/app/components/MainLayout';
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";

const Index = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "light" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <>
      <MainLayout />
      <Particles
        className="fixed inset-0 z-0 w-full h-full"
        quantity={200}
        ease={80}
        color="#FFF"
        refresh
      />
    </>
  );
};

export default Index;
