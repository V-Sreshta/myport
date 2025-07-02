import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center flex flex-col items-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Sreshta Vadde
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Computer Science Engineering Student
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 dark:text-gray-400 text-lg mb-8 max-w-3xl mx-auto"
          >
            A passionate 3rd-year BTech student in Computer Science, focused on developing 
            software applications and exploring new technologies to create real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
          >
            <a
              href="Sreshta_s_CV.pdf"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 rounded-full hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-all transform hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://linkedin.com/in/sreshta-vadde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-orange-500 dark:text-orange-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/sreshta-vadde"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-gray-900 dark:text-gray-100"
            >
              <Github size={24} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <
            <img
              src="profile photo.jpg"
              alt="Sreshta"
              className="w-full h-full object-cover"
            />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
