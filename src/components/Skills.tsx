import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const programmingSkills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C', level: 85 },
    { name: 'JavaScript', level: 70 }
  ];

  const webSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'React', level: 70 },
    { name: 'Node.js', level: 70 }
  ];

  const technologies = [
    'React', 'MySQL', 'MongoDB', 'AWS', 'Git', 'Node.js'
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-orange-500 dark:text-orange-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Here are some of the skills I've acquired throughout my academic and professional journey</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-800"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl mr-4">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Programming Languages</h3>
            </div>
            {programmingSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </motion.div>

          {/* Web Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-800"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl mr-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web Technologies</h3>
            </div>
            {webSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Technologies & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-800"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl mr-4">
              <Wrench className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technologies & Tools</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl text-center hover:shadow-md transition-all transform hover:scale-105 border border-orange-100 dark:border-orange-800"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;