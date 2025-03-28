import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1 
            className="text-4xl font-bold mb-8 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h1>
          
          <motion.div className="space-y-8 text-gray-300">
            <motion.div 
              className="card p-8 rounded-lg backdrop-blur-lg"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">My Journey</h2>
              <p className="leading-relaxed">
                As a Computer Science undergraduate at IIT, I've developed a deep passion for creating innovative technological solutions. 
                My journey began with a fascination for problem-solving and has evolved into a comprehensive skill set spanning machine learning, 
                software development, and UI/UX design. I believe in the power of technology to transform ideas into impactful solutions.
              </p>
            </motion.div>
            

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
              <div className="card p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Higher Education</h3>
                  <p className="text-gray-400">T/R.K.M SRI KONESWARA HINDU COLLEGE</p>
                  <p className="text-gray-400">2009 - 2022</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                    <li>Finished G.C.E O/L</li>
                    <li>Finished G.C.E A/L</li>
                   
                  </ul>
                </div>
              </div>

              <div className="card p-6 rounded-lg relative overflow-hidden mt-8">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
                  <p className="text-gray-400">Informatics Institute of Technology (IIT)</p>
                  <p className="text-gray-400">2024 - Present</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                    <li>Enthusiast Artificial Intelligence and Machine Learning</li>
                    <li>Member Computing Society</li>
                    <li>Research Assistant in Deep Learning </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold text-white mb-6">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Machine Learning",
                    description: "Specializing in deep learning, neural networks, and data analysis using Python and R. Experienced in developing predictive models and implementing computer vision solutions.",
                    icon: "🤖"
                  },
                  {
                    title: "Software Development",
                    description: "Full-stack development with React, Node.js, Spring Boot, and Angular. Building scalable web applications with modern architectures.",
                    icon: "💻"
                  },
                  {
                    title: "Mobile Development",
                    description: "Creating cross-platform mobile applications using React Native, Node Js, Flutter, and Kotlin. Focus on performance and user experience.",
                    icon: "📱"
                  },
                  {
                    title: "Application Development",
                    description: "Applications development with Java, Python, And Oop Consepts.",
                    icon: "📱"
                  },
                  {
                    title: "Designing",
                    description: "Designing Eye-catching Posters, animations and Designs Using Adobe Photshop, Adobe Illustrator, Adobe Premiere Pro and After Effects.",
                    icon: "🎨"
                  },
                  {
                    title: "UI/UX Design",
                    description: "Designing intuitive user interfaces with Figma. Creating user-centered designs with a focus on accessibility and user experience.",
                    icon: "🎨"
                  },
                  
                ].map((expertise, index) => (
                  <motion.div
                    key={index}
                    className="card p-6 rounded-lg transform hover:scale-105 transition-transform"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(255,255,255,0.1)"
                    }}
                  >
                    <div className="text-4xl mb-4">{expertise.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{expertise.title}</h3>
                    <p className="text-gray-400">{expertise.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="card p-6 rounded-lg mt-8"
            >
              <h2 className="text-2xl font-semibold mb-4">Professional Philosophy</h2>
              <p className="text-gray-300 leading-relaxed">
                I believe in creating technology that makes a difference. My approach combines technical expertise with creative problem-solving, 
                always striving to build solutions that are not just functional but also intuitive and impactful. I'm particularly passionate about 
                leveraging AI and machine learning to solve real-world challenges.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;