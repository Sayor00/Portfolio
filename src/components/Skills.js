// src/components/Skills.js
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact size={40} color="#61DBFB" />, level: 90 },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#68A063" />, level: 85 },
  { name: 'Databases', icon: <FaDatabase size={40} color="#f29111" />, level: 80 },
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34C26" />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#264de4" />, level: 90 },
  { name: 'JavaScript', icon: <FaJs size={40} color="#F0DB4F" />, level: 88 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 transition-colors duration-300">{skill.name}</h3>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5 mb-2">
                <motion.div
                  className={`bg-blue-500 dark:bg-blue-400 h-2.5 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
