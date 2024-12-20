// src/components/Hero.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Overlay for Dark Mode */}
      <div className="absolute inset-0 bg-white opacity-10 dark:bg-black opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm Tahsin Faiyaz (Sayor)
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A Full-Stack Developer Crafting Exceptional Digital Experiences
          </motion.p>
          <motion.a
            href="#portfolio"
            className="inline-block bg-white dark:bg-blue-600 text-blue-600 dark:text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-blue-700 transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label="View My Portfolio"
          >
            View My Work
          </motion.a>
        </div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 mb-8 md:mb-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white dark:border-blue-600 shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
