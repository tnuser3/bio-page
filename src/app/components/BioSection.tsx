
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, Layout, Settings, ShoppingCart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import BentoGrid from './BentoGrid';
import MusicPlayer from './MusicPlayer';
import { Particles } from "@/components/magicui/particles";
import { Icon } from '@iconify/react';

// Skills with their respective icons
const skillsWithIcons = {
  'Programming Languages': [
    { name: 'JavaScript', icon: "js" },
    { name: 'TypeScript', icon: "ts" },
    { name: 'Python', icon: "py" },
    { name: 'C++', icon: "cpp" },
    { name: 'C#', icon: "cs" },
    { name: 'PHP', icon: "php" },
    { name: 'HTML', icon: "html" },
    { name: 'Koltin', icon: "kotlin" },
    { name: 'CSS', icon: "css" }
  ],
  'Frameworks & Libraries': [
    { name: 'React', icon: "react" },
    { name: 'Next.js', icon: "nextjs" },
    { name: 'Node.js', icon: "nodejs" },
    { name: 'Vite', icon: "vite" },
    { name: '.NET', icon: "dotnet" },
    { name: 'Discord.js', icon: "discordjs" },
    { name: 'p5.js', icon: "p5js" },
    { name: 'Tailwind CSS', icon: "tailwind" },
  ],
  'Databases': [
    { name: 'PostgreSQL', icon: "postgres" },
    { name: 'SQLite', icon: "sqlite" },
    { name: 'MongoDB', icon: "mongodb" }
  ],
  'Tools & Platforms': [
    { name: 'NPM', icon: "npm" },
    { name: 'Unity', icon: "unity" },
    { name: 'NGINX', icon: "nginx" },
    { name: 'Linux', icon: "linux" },
    { name: 'Git', icon: "git" },
    { name: 'Qt', icon: "qt" },
    { name: 'Ubuntu', icon: "ubuntu" },
  ]
};

const BioSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen w-full py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8 lg:self-start flex flex-col items-center lg:items-start gap-6 glass p-6 rounded-xl lg:w-72"
          >
            <Avatar className="w-32 h-32 border-2 border-accent/30 glow">
              <AvatarImage src="https://cdn.discordapp.com/avatars/939928673572765737/654fa503575c524c3ed595ca45df277a.webp?size=128" alt="Profile" />
              <AvatarFallback className="text-4xl bg-black text-primary">KM</AvatarFallback>
            </Avatar>
            
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">kman</h1>
              <p className="text-lg text-muted-foreground mb-4">Software Developer & Designer</p>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Button variant="outline" size="icon" className="rounded-full bg-secondary/30 hover:bg-secondary/50 border-white/10" asChild>
                  <a href="https://github.com/tnuser3" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-secondary/30 hover:bg-secondary/50 border-white/10">
                  <a href="https://github.com/tnuser3" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ic:baseline-discord" width="24" height="24" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-secondary/30 hover:bg-secondary/50 border-white/10" asChild>
                  <a href="mailto:kmantnuser@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-secondary/30 hover:bg-secondary/50 border-white/10" asChild>
                  <a href="https://t.me/wembydrc" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ic:baseline-telegram" width="24" height="24" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Music Player moved to bottom of profile sidebar */}
            <div className="w-full mt-6">
              <MusicPlayer />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {/* About Me */}
              <motion.div variants={itemVariants}>
                <Card className="glass overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gradient">About</h2>
                    <p className="text-muted-foreground mb-4">
                      I'm a full stack developer with my main languages being TypeScript, JavaScript, C#, and PHP. 
                      I started coding in mid 2022 by modding Unity games, which evolved into developing web applications.
                      I specialize in creating intuitive, responsive interfaces with modern technologies.
                    </p>
                    <p className="text-muted-foreground">
                      I currently live in Tennessee, USA. At 15 years old, I'm working on my own marketplace called Qyzar,
                      combining my passion for development with entrepreneurial ambition.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants}>
                <Card className="glass overflow-hidden">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gradient">Skills</h2>
                    <div className="space-y-4">
                      {Object.entries(skillsWithIcons).map(([category, skills]) => (
                        <div key={category}>
                          <h3 className="font-medium text-sm mb-2">{category}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 auto-rows-min">
                            {skills.map((skill) => (
                              <div key={skill.name} className='flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors min-w-0'>
                                <img 
                                  src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                                  alt={skill.name} 
                                  className='h-6 w-6 flex-shrink-0' 
                                />
                                <span className='text-sm font-medium text-muted-foreground'>{skill.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Portfolio / Current Projects */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-4 text-gradient">Current Projects</h2>
                <BentoGrid />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BioSection;
