import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "VITISCO",

    description: "Developed a machine learning model for real-timeHand Gesture Detection and Convert it into text and voice for Hearing Aid Individuals And give Customized lessons, ML Based Automized Feedback, and Progress Tracking As For My SDGP Project.",

    technologies: ["Python", "TensorFlow", "React Native", "Node.js"],

    link: "https://vitisco.netlify.app/"
  },
  {
    title: "Real-time Ticket Booking System",
    description: "Built a full-stack Ticket Management System For Vendor And Customers for their ticket retreival and ticket purchases with using oop concepts  with Spring Boot and Angular framework.",
    technologies: ["Spring Boot", "Angular", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Breast Cancer Predicting Model",
    description: "Built a multimodel predicting ystem using R.",
    technologies: ["Python", "R", "TensorFlow"],
    link: "#"
  },
  {
    title: "EcoShift",
    description: "Built a Ui/Ux design using figma platform for a better eco-friendly system.",
    technologies: ["Figma"],
    link: "#"
  },
  {
    title: "VITISCO",
    description: "Built a Ui/Ux design using figma platform for language learninf for deaf individuals.",
    technologies: ["Figma"],
    link: "#"
  },
  {
    title: "Healthify",
    description: "Built a Ui/Ux design using figma platform for manage user healthy habits.",
    technologies: ["Figma"],
    link: "#EERfv"
  },

  {
    title: "Real-time Student Management System",
    description: "Built a student and staff records Management System For managing their recors and module details with using oop concepts and java core fundamentals   with Java and React.",
    technologies: ["Java", "React", "SQL"],
    link: "#"
  },
  // Add more projects as needed
];


const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-white hover:text-gray-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;