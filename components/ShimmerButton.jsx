"use client";

import { motion } from "framer-motion";

export default function ShimmerButton({ children, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-xl overflow-hidden group"
    >
      {/* Glow aura (green neon) */}
      <div className="absolute -inset-3 rounded-xl bg-green-500/30 blur-2xl animate-spin-slow group-hover:opacity-90 transition-all duration-300 pointer-events-none z-[-1]"></div>

      {/* Shimmer streak (subtle neon line sweep) */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        <div className="absolute top-0 left-[-150%] h-full w-[150%] bg-gradient-to-r from-transparent via-green-400/40 to-transparent opacity-70 blur-lg animate-shimmer"></div>
      </div>

      {/* Solid button background */}
      <div className="absolute inset-0 rounded-xl bg-green-600/20 border border-green-500/30 backdrop-blur-sm"></div>

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
