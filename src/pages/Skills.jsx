import React, { useState } from 'react';

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 }
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 92 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 85 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 88 },
      { name: "Figma", level: 90 }
    ]
  }
];

const SkillCard = ({ skill }) => {
  return (
    <div 
      className="bg-gray-800 p-4 rounded-xl hover:scale-105 hover:bg-gray-700 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-blue-400 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="opacity-100 transform translate-y-0 transition-all duration-800">
          <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            My Skills
          </h1>

          {/* Category Selector */}
          <div className="flex justify-center mb-12 space-x-4">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${activeCategory === category.name 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                `}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories
              .find(category => category.name === activeCategory)
              .skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="opacity-100 transform translate-y-0 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <SkillCard skill={skill} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;