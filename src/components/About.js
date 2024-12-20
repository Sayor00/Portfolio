// src/components/About.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </motion.div>
        {/* Text */}
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white transition-colors duration-300">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
            I'm Tahsin Faiyaz (Sayor), a passionate Full-Stack Developer with expertise in building dynamic and responsive web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            With a strong foundation in both front-end and back-end technologies, I strive to create seamless user experiences and robust functionalities. Let's work together to bring your ideas to life!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
