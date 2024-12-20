// src/components/Modal.js
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full relative transition-colors duration-300"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Close Modal"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">{project.title}</h2>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline transition-colors duration-300"
            >
              View Project
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
