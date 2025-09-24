import { motion } from "motion/react";
import { ReactNode } from "react";
import { useTheme } from "./theme-context";

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GlowingButton({ 
  children, 
  onClick, 
  variant = "primary",
  size = "md",
  className = "" 
}: GlowingButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const getVariantClasses = () => {
    if (isDark) {
      switch (variant) {
        case "primary":
          return "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-purple-400";
        case "secondary":
          return "bg-black/40 text-purple-300 border-purple-500/50";
        case "ghost":
          return "bg-transparent text-purple-300 border-purple-500/30";
        default:
          return "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-purple-400";
      }
    } else {
      switch (variant) {
        case "primary":
          return "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-400";
        case "secondary":
          return "bg-white/60 text-blue-700 border-blue-400/50";
        case "ghost":
          return "bg-transparent text-blue-700 border-blue-400/30";
        default:
          return "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-400";
      }
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative group ${sizeClasses[size]} border rounded-lg font-medium
        backdrop-blur-sm transition-all duration-300 overflow-hidden ${getVariantClasses()} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background glow effect */}
      <motion.div
        className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600/50 to-cyan-600/50'
            : 'bg-gradient-to-r from-blue-500/40 to-purple-500/40'
        } blur-md opacity-0 group-hover:opacity-100`}
        animate={{
          opacity: [0, isDark ? 0.3 : 0.2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: '200%' }}
      />

      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${
        isDark ? 'border-purple-400' : 'border-blue-400'
      } opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${
        isDark ? 'border-purple-400' : 'border-blue-400'
      } opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${
        isDark ? 'border-purple-400' : 'border-blue-400'
      } opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${
        isDark ? 'border-purple-400' : 'border-blue-400'
      } opacity-0 group-hover:opacity-100 transition-opacity`} />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Pulse effect */}
      <motion.div
        className={`absolute inset-0 border ${
          isDark ? 'border-purple-500/50' : 'border-blue-400/50'
        } rounded-lg`}
        animate={{
          borderColor: isDark 
            ? ["rgba(155, 77, 255, 0.5)", "rgba(155, 77, 255, 1)", "rgba(155, 77, 255, 0.5)"]
            : ["rgba(59, 130, 246, 0.5)", "rgba(59, 130, 246, 1)", "rgba(59, 130, 246, 0.5)"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}