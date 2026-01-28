import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export function LanguageSelector() {
  const { language, setLanguage, showSplash } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (!saved) {
      setIsOpen(true);
    } else {
      setHasSelected(true);
    }
  }, []);

  if (showSplash || (hasSelected && !isOpen)) return null;

  const handleSelect = (lang: "ru" | "en" | "it") => {
    setLanguage(lang);
    setIsOpen(false);
    setHasSelected(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-white/95 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-xl tracking-[0.2em] font-light uppercase serif">Select Language</h2>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
              <button
                onClick={() => handleSelect("en")}
                className="text-lg tracking-[0.1em] font-light uppercase luxury-link"
              >
                English
              </button>
              <button
                onClick={() => handleSelect("it")}
                className="text-lg tracking-[0.1em] font-light uppercase luxury-link"
              >
                Italiano
              </button>
              <button
                onClick={() => handleSelect("ru")}
                className="text-lg tracking-[0.1em] font-light uppercase luxury-link"
              >
                Русский
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
