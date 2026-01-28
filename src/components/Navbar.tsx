import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.bespoke, href: "#bespoke" },
    { name: t.collection, href: "#collection" },
    { name: t.process, href: "#process" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl tracking-[0.3em] font-light uppercase serif"
        >
          IAKUPOVA
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] tracking-[0.2em] uppercase font-light luxury-link"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 border-l border-black/10 pl-10">
            {["EN", "IT", "RU"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang.toLowerCase() as any)}
                className={`text-[10px] tracking-[0.1em] font-light ${
                  language === lang.toLowerCase() ? "opacity-100 font-normal" : "opacity-40"
                } hover:opacity-100 transition-opacity`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="flex flex-col space-y-6 px-6 py-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs tracking-[0.2em] uppercase font-light"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-6 pt-6 border-t border-black/5">
                {["EN", "IT", "RU"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang.toLowerCase() as any);
                      setIsMenuOpen(false);
                    }}
                    className={`text-[10px] tracking-[0.1em] font-light ${
                      language === lang.toLowerCase() ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
