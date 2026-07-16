"use client";

import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if user has already seen splash screen in this session
    const hasSeen = sessionStorage.getItem("splash_seen");
    if (hasSeen) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("splash_seen", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-green-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-green-900/50 relative overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-green-50"
              />
              <BookOpen size={48} className="text-green-700 relative z-10" />
            </div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-2 text-center"
            >
              Yayasan Al-Muhajirin
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 w-24 bg-green-400 rounded-full mt-4"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
