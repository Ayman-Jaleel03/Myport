import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "Kotlin", "PHP"]
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Spring Boot", "Angular", "Flutter"]
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "Figma", "AWS", "TensorFlow"]
  }
];

const SkillBar = ({ name }) => (
  <div className="mb-4">
    <span className="text-sm font-medium">{name}</span>
    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
      <motion.div
        className="bg-white h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Skills</h1>
          
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="card p-6 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} name={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;