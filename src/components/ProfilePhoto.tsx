import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const ProfilePhoto = () => {
  return (
    <section id="profile" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl"
            >
              <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-8xl font-bold text-gray-300 dark:text-gray-600">
                SV
              </div>
            </motion.div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 -left-4 w-6 h-6 bg-pink-400 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-2 left-10 w-4 h-4 bg-green-400 rounded-full"
            />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <Award size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilePhoto;