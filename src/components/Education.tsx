import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, ChevronRight, Award, Trophy, MapPin } from 'lucide-react';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const educationData = [
    {
      title: 'Bachelor of Technology In Computer Science',
      institution: 'SR University',
      location: 'Warangal, India',
      period: '2022 - 2026',
      grade: '8.0/10 CGPA',
      description: 'Pursuing a comprehensive education in computer science fundamentals, algorithms, data structures, software engineering, and emerging technologies.',
      achievements: [
        'Won 1st place at SRU Idea Conclave by pitching an innovative project for patent approval',
        'Developed an automated tourism website during the SIH Internal Hackathon, handling 150+ customer queries efficiently',
        'Guided a five-member team in the Inter-College Hackathon at SR University, securing 3rd place for designing a blockchain-powered supply chain security solution',
        'Earned the Semester Topper Award across the fifth semester, ranking among the highest score for academic excellence'
      ],
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Higher Secondary Education (Science)',
      institution: 'Vidwan Junior College',
      location: 'Bheemaram, India',
      period: '2020 - 2022',
      grade: '60%',
      description: 'Specialized in Physics, Chemistry, and Mathematics.',
      achievements: [
        'Secured 60% marks in final exams',
        'Recognized for strong problem-solving skills and analytical thinking in all subjects',
        'Known for excellent time management and dedication to academic excellence',
        'Led study groups and helped peers understand complex topics in Mathematics and Physics'
      ],
      color: 'from-red-400 to-orange-500'
    },
    {
      title: 'Secondary Education',
      institution: 'Vidyodaya High School',
      location: 'Nekkonda, India',
      period: '2018 - 2020',
      grade: '9.7/10 CGPA',
      description: 'Received a well-rounded education with emphasis on academics and extracurricular activities.',
      achievements: [
        'Graduated with distinction (9.7/10 CGPA)',
        'Lauded for strong interpersonal skills, making connections and fostering meaningful conversations',
        'Received special recognition for outstanding artistic contribution in the school exhibition',
        'Active participant in various science exhibitions and competitions'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">My academic journey and educational background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-red-400 to-orange-500"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12 ml-20"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-14 top-6 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full border-4 border-white dark:border-gray-800 shadow-lg`}></div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-orange-100 dark:border-orange-800 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">{item.institution}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {item.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {item.period}
                          </div>
                          <div className="flex items-center">
                            <Award size={16} className="mr-1" />
                            {item.grade}
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                      </div>
                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="p-2 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors"
                      >
                        <ChevronRight 
                          className={`transform transition-transform text-orange-500 ${expandedCard === index ? 'rotate-90' : ''}`}
                          size={20}
                        />
                      </button>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedCard === index ? 'auto' : 0,
                        opacity: expandedCard === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-orange-100 dark:border-orange-800">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Trophy className="mr-2 text-orange-500" size={18} />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achievementIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;