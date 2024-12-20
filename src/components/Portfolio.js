// src/components/Portfolio.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import projects from '../data/projects';
import Modal from './Modal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:underline transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal for Project Details */}
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
};

export default Portfolio;
