import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 ${
        isDark 
          ? "bg-gradient-to-r from-purple-600/40 to-cyan-600/40 border border-purple-500/50" 
          : "bg-gradient-to-r from-blue-200 to-purple-200 border border-blue-300/50"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: isDark
          ? [
              "0 0 10px rgba(155, 77, 255, 0.3)",
              "0 0 20px rgba(155, 77, 255, 0.6)",
              "0 0 10px rgba(155, 77, 255, 0.3)",
            ]
          : [
              "0 0 10px rgba(59, 130, 246, 0.3)",
              "0 0 20px rgba(59, 130, 246, 0.6)",
              "0 0 10px rgba(59, 130, 246, 0.3)",
            ],
      }}
      transition={{
        duration: 1.2, // faster ambient glow
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Toggle Circle */}
      <motion.div
        className={`relative w-6 h-6 rounded-full flex items-center justify-center ${
          isDark 
            ? "bg-gradient-to-br from-purple-500 to-cyan-500" 
            : "bg-gradient-to-br from-orange-400 to-yellow-400"
        }`}
        animate={{
          x: isDark ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 800, // snappier toggle
          damping: 28,
          mass: 0.6,
        }}
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0.8,
          }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-white" />
          ) : (
            <Sun className="w-4 h-4 text-white" />
          )}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full ${
            isDark 
              ? "bg-gradient-to-br from-purple-400/50 to-cyan-400/50" 
              : "bg-gradient-to-br from-orange-300/50 to-yellow-300/50"
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          animate={{
            opacity: isDark ? 0.3 : 0.7,
            scale: isDark ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-3 h-3 text-yellow-400" />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 0.7 : 0.3,
            scale: isDark ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-3 h-3 text-purple-300" />
        </motion.div>
      </div>

      {/* Scanning line effect */}
      <motion.div
        className={`absolute inset-0 rounded-full overflow-hidden ${
          isDark 
            ? "bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" 
            : "bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
        }`}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: '200%' }}
      />
    </motion.button>
  );
}