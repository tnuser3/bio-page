
import React from 'react';
import { BentoCard, BentoGrid as Nigger } from '@/components/magicui/bento-grid';
import { Hexagon } from "lucide-react";
import { Icon } from "@iconify/react";
 
const features = [
  {
    icon: <Icon icon="icon-park-outline:monkey" width="48" height="48" />, // <-- changed from Icon
    name: "Kman Mod Menu",
    description: "My mod menu for gorilla tag",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <>
        <img src="assets\pngimg.com - baby_PNG17931.png" className='w-full absolute h-full object-cover'></img>
      </>
    ),
  },
  {
    icon: <Hexagon className="h-12 w-12" />, // <-- wrap Hexagon as a React element
    name: "Qyzar Shop",
    description: "The most secure online maketplace in the world.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <>
        <img src="assets\Screenshot 2025-04-15 221658.png" className='w-full absolute h-full object-cover'></img>
      </>
    ),
  },
];

const BentoGrid: React.FC = () => {
  return (
    <Nigger>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </Nigger>
  );
};

export default BentoGrid;
