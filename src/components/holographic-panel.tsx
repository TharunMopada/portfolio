import { motion } from "motion/react";
import { ReactNode } from "react";
import { useTheme } from "./theme-context";

interface HolographicPanelProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  pulsate?: boolean;
}

export default function HolographicPanel({ 
  children, 
  className = "", 
  glowColor = "purple-500", 
  delay = 0,
  pulsate = true 
}: HolographicPanelProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
    >
      {/* Outer glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-xl ${
          isDark 
            ? `bg-gradient-to-r from-${glowColor}/20 to-cyan-500/20 blur-md`
            : `bg-gradient-to-r from-blue-400/15 to-purple-400/15 blur-md`
        }`}
        animate={pulsate ? {
          opacity: isDark ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
          scale: [1, 1.02, 1],
        } : {}}
        transition={pulsate ? {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        } : {}}
      />
      
      {/* Main panel */}
      <div className={`relative ${
        isDark 
          ? `bg-black/40 border border-${glowColor}/30`
          : `bg-white/60 border border-blue-300/40 shadow-lg`
      } backdrop-blur-sm rounded-xl overflow-hidden`}>
        {/* Holographic scanlines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{
            y: ['-100%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: isDark 
              ? `linear-gradient(180deg, transparent 0%, rgba(155, 77, 255, 0.1) 50%, transparent 100%)`
              : `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.08) 50%, transparent 100%)`,
            height: '200%',
            width: '100%',
          }}
        />

        {/* Corner highlights */}
        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${
          isDark ? `border-${glowColor}` : `border-blue-400`
        }`} />
        <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${
          isDark ? `border-${glowColor}` : `border-blue-400`
        }`} />
        <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${
          isDark ? `border-${glowColor}` : `border-blue-400`
        }`} />
        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${
          isDark ? `border-${glowColor}` : `border-blue-400`
        }`} />

        {/* Content */}
        <div className="relative z-10 p-6">
          {children}
        </div>

        {/* Hover effect */}
        <motion.div
          className={`absolute inset-0 ${
            isDark 
              ? `bg-gradient-to-r from-${glowColor}/10 to-cyan-500/10`
              : `bg-gradient-to-r from-blue-400/10 to-purple-400/10`
          } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </div>
    </motion.div>
  );
}