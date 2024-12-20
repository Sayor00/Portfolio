// src/components/Footer.js
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 shadow-inner transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          &copy; {new Date().getFullYear()} Tahsin Faiyaz (Sayor). All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            aria-label="GitHub"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
            aria-label="Twitter"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
