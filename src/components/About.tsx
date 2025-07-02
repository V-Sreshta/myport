import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Code, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '8.0', label: 'CGPA' },
    { icon: BookOpen, value: '3+', label: 'Projects' },
    { icon: Code, value: '5+', label: 'Technologies' },
    { icon: Users, value: '2+', label: 'Years Learning' },
  ];

  const interests = [
    {
      title: 'Web Development',
      description: 'Building responsive, user-friendly web applications',
      icon: '🌐'
    },
    {
      title: 'Machine Learning',
      description: 'Exploring AI and data-driven decision making',
      icon: '🤖'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and aesthetically pleasing interfaces',
      icon: '🎨'
    },
    {
      title: 'Open Source',
      description: 'Contributing to community projects and learning from others',
      icon: '🔓'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Get to know me better and discover my passion for technology and innovation</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h3>
            <div className="space-y-6 text-left">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm a third-year BTech student specializing in computer science & engineering, with a strong passion for creating innovative solutions through technology. I am committed to continuous learning and staying updated with the latest advancements in the tech industry.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                My journey in technology began in high school when I first discovered programming, and since then, I have been motivated by the challenge and creativity involved in solving complex problems through code.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                In my free time, I enjoy learning about emerging tech trends, working on coding projects, and enhancing my problem-solving and development skills.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border border-orange-100 dark:border-orange-800"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="text-orange-500 dark:text-orange-400" size={28} />
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* My Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">My Interests</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-orange-100 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-600"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{interest.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: 'Experience', description: 'Certifications in web development, and software engineering, applied in academic and personal projects.' },
            { title: 'Education', description: 'BTech in Computer Science & Engineering with focus on advanced computing.' },
            { title: 'Development', description: 'Building projects using modern web development frameworks and technologies.' },
            { title: 'Languages', description: 'Proficient in multiple programming languages and frameworks.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-2xl border border-orange-100 dark:border-orange-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;