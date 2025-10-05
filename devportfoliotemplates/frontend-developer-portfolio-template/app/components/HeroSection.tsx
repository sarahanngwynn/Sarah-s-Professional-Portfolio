'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* --- Background layers --- */}
      <div className="pointer-events-none select-none absolute inset-0">
        {/* soft purple glow (lighter toward the top/center) */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_18%,rgba(168,85,247,0.25),transparent)]" />
        {/* subtle vertical lighten gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(99,102,241,0.12)_0%,rgba(168,85,247,0.08)_45%,transparent_85%)]" />
        {/* topography pattern; fade toward the bottom */}
        <div className="absolute inset-0 bg-[url('/topography.svg')] bg-repeat opacity-25 [mask-image:linear-gradient(180deg,white,transparent)]" />
      </div>

      {/* --- Avatar --- */}
      <div className="relative z-10 -mt-10">
        <div className="mx-auto h-44 w-44 md:h-56 md:w-56 rounded-full overflow-hidden ring-2 ring-white/15 shadow-xl shadow-purple-900/20">
          <Image
            src="/sarah.jpeg"
            alt="Sarah Gwynn"
            width={600}
            height={600}
            className="h-full w-full object-cover object-[55%_35%]" // small crop toward the right
            priority
          />
        </div>
      </div>

      {/* --- Headline & chips --- */}
      <div className="relative z-10 text-center px-4 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Sarah Gwynn
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend Developer &amp; UI/UX Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">React</span>
            <span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Next.js</span>
            <span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">TypeScript</span>
            <span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>

      {/* --- Scroll indicator --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}



