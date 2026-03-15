import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  GitBranch,
  Server,
  Smartphone,
  Palette,
  Cloud,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: Code, level: 90, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Zap, level: 85, color: 'text-yellow-500' },
    { name: 'Python', icon: Code, level: 80, color: 'text-green-500' },
    { name: 'FastAPI', icon: Server, level: 75, color: 'text-teal-500' },
    { name: 'MySQL', icon: Database, level: 85, color: 'text-orange-500' },
    { name: 'Git & GitHub', icon: GitBranch, level: 90, color: 'text-purple-500' },
    { name: 'Node.js', icon: Server, level: 80, color: 'text-green-600' },
    { name: 'Tailwind CSS', icon: Palette, level: 85, color: 'text-cyan-500' },
    { name: 'AWS', icon: Cloud, level: 70, color: 'text-orange-600' },
    { name: 'React Native', icon: Smartphone, level: 75, color: 'text-blue-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`w-8 h-8 ${skill.color} mr-3`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-600 h-2 rounded-full"
                ></motion.div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;