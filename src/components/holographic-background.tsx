import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-context";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function HolographicBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        x: particle.x < 0 ? window.innerWidth : particle.x > window.innerWidth ? 0 : particle.x,
        y: particle.y < 0 ? window.innerHeight : particle.y > window.innerHeight ? 0 : particle.y,
      })));
    };

    const interval = setInterval(animateParticles, 16);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Grid Background */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-10'}`}>
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-[linear-gradient(rgba(155,77,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(155,77,255,0.1)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)]'
        } bg-[size:100px_100px]`}>
          <motion.div
            animate={{ 
              backgroundPosition: ['0px 0px', '100px 100px'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            isDark ? 'bg-purple-400' : 'bg-blue-400'
          }`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: isDark ? particle.opacity : particle.opacity * 0.6,
            boxShadow: isDark 
              ? `0 0 ${particle.size * 3}px rgba(155, 77, 255, ${particle.opacity})`
              : `0 0 ${particle.size * 2}px rgba(59, 130, 246, ${particle.opacity * 0.6})`,
          }}
          animate={{
            opacity: isDark 
              ? [particle.opacity, particle.opacity * 0.3, particle.opacity]
              : [particle.opacity * 0.6, particle.opacity * 0.2, particle.opacity * 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy Beams */}
      <motion.div
        className={`absolute top-1/4 left-0 w-full h-0.5 ${
          isDark 
            ? 'bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30'
            : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-15'
        }`}
        animate={{
          scaleX: [0, 1, 0],
          opacity: isDark ? [0, 0.5, 0] : [0, 0.25, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute top-3/4 left-0 w-full h-0.5 ${
          isDark 
            ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30'
            : 'bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-15'
        }`}
        animate={{
          scaleX: [0, 1, 0],
          opacity: isDark ? [0, 0.3, 0] : [0, 0.15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Corner Glows */}
      <div className={`absolute top-0 left-0 w-96 h-96 ${
        isDark ? 'bg-purple-600/10' : 'bg-blue-400/5'
      } rounded-full blur-3xl`} />
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${
        isDark ? 'bg-cyan-600/10' : 'bg-purple-400/5'
      } rounded-full blur-3xl`} />
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${
        isDark ? 'bg-purple-500/5' : 'bg-blue-300/3'
      } rounded-full blur-3xl`} />
    </div>
  );
}