import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Navbar } from "@/components/Navbar";
import { LanguageSelector } from "@/components/LanguageSelector";
import { motion } from "framer-motion";

export default function App() {
  const { language } = useLanguage();
  const t = translations[language];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-black selection:text-white antialiased font-sans">
      <Navbar />
      <LanguageSelector />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-4xl"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase font-light mb-8 block opacity-60">
            {t.hero.location}
          </span>
          <h1 className="text-5xl md:text-8xl tracking-[0.2em] font-light uppercase serif mb-12">
            {t.hero.title}
          </h1>
          <p className="text-sm md:text-lg tracking-[0.1em] font-light max-w-2xl mx-auto leading-relaxed opacity-80">
            {t.hero.description}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-black/20" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl tracking-[0.1em] font-light uppercase serif mb-16">
              {t.about.title}
            </h2>
            <div className="space-y-8">
              {t.about.content.map((paragraph, i) => (
                <p key={i} className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section id="bespoke" className="py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl tracking-[0.1em] font-light uppercase serif mb-12">
              {t.bespoke.title}
            </h2>
            <p className="text-sm tracking-[0.2em] uppercase font-light opacity-60 mb-8">
              {t.bespoke.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="md:w-1/2 space-y-8"
          >
            <p className="text-lg font-light leading-relaxed">{t.bespoke.description}</p>
            <p className="text-lg font-light leading-relaxed opacity-80">{t.bespoke.details}</p>
            <p className="text-sm italic font-light opacity-60 pt-8 border-t border-black/10">
              {t.bespoke.footer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-32 md:py-48 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-4xl tracking-[0.2em] font-light uppercase serif mb-8">
              {t.collection.title}
            </h2>
            <p className="text-sm tracking-[0.1em] uppercase font-light opacity-60 mb-12">
              {t.collection.subtitle}
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              {t.collection.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-12 text-center">
            {t.collection.manifesto.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="text-lg md:text-xl font-light leading-relaxed opacity-80"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl tracking-[0.1em] font-light uppercase serif mb-24 text-center">
              {t.process.title}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/10 hidden md:block" />
              <div className="space-y-16">
                {t.process.steps.map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 text-center md:text-right px-4">
                      {i % 2 === 0 && <span className="text-lg font-light tracking-widest">{step}</span>}
                    </div>
                    <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white z-10 text-[10px]">
                      0{i + 1}
                    </div>
                    <div className="flex-1 text-center md:text-left px-4">
                      {i % 2 !== 0 && <span className="text-lg font-light tracking-widest">{step}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geography & Contact */}
      <section id="contact" className="py-32 md:py-48 px-6 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl tracking-[0.1em] font-light uppercase serif mb-8">
              {t.geography.title}
            </h2>
            <p className="text-lg font-light leading-relaxed opacity-80">
              {t.geography.content}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl tracking-[0.1em] font-light uppercase serif mb-8">
              {t.contact.title}
            </h2>
            <div className="space-y-4">
              <a href={`mailto:iakupovabespoke@gmail.com`} className="block text-lg font-light luxury-link w-fit">
                iakupovabespoke@gmail.com
              </a>
              <a href="https://instagram.com/iakupovabespoke" target="_blank" rel="noopener noreferrer" className="block text-lg font-light luxury-link w-fit">
                @iakupovabespoke
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase font-light opacity-40">
          © {new Date().getFullYear()} IAKUPOVA. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
