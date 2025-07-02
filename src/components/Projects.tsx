import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Chronic Kidney Disease Prediction',
      description: 'A machine learning-based healthcare application that predicts chronic kidney disease using patient data and medical parameters. Built with advanced algorithms to assist in early diagnosis and treatment planning.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/sreshta-vadde/chronic-kidney-disease-prediction',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Flask'],
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Bank Loan Management System',
      description: 'A comprehensive web-based banking application for managing loan applications, approvals, and customer data. Features secure authentication, loan calculation, and administrative dashboard.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/sreshta-vadde/bank-loan-system',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript'],
      gradient: 'from-red-400 to-orange-500'
    },
    {
      title: 'Netflix Frontend Clone',
      description: 'A pixel-perfect recreation of Netflix\'s user interface with responsive design, movie browsing, search functionality, and dynamic content loading. Built with modern web technologies.',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/sreshta-vadde/netflix-clone',
      technologies: ['React', 'CSS3', 'JavaScript', 'API Integration', 'Responsive Design'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Here are some of the projects I've worked on that showcase my skills and interests</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-80 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${projects[currentProject].gradient} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">{projects[currentProject].title}</h3>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={projects[currentProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={24} />
                      </a>
                      <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {projects[currentProject].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-orange-200 dark:border-orange-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={projects[currentProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Github className="mr-2" size={20} />
                    View Code
                  </a>
                  <button className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
                    <ExternalLink className="mr-2" size={20} />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-orange-200 dark:border-orange-700"
            >
              <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-orange-200 dark:border-orange-700"
            >
              <ChevronRight size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Project indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProject 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-300 dark:hover:bg-orange-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;