import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const achievements = [
  {
    date: "2024",
    title: "Best Impact Behind The Event",
    organization: "INDUSTPRO 3.0",
    description: "Received recognition for Contribution to the event and the impact created"
  },
  {
    date: "2024",
    title: "Certificate of Excellence",
    organization: "International Hackathon 2024",
    description: "Received recognition for participating in the event"
  },
  {
    date: "2024",
    title: "Certificate of Excellence",
    organization: "Encode 2024",
    description: "Received recognition for participating in the Hackathon"
  },
  {
    date: "2024",
    title: "Certificate of Semi-Finalists",
    organization: "Idealize 2024",
    description: "Received recognition for semi-finalists in the Ideathon"
  },
  {
    date: "2024",
    title: "Certificate of participation",
    organization: "IdeaForge 2024",
    description: "Received recognition for participating in the Ideathon"
  },
  {
    date: "2024",
    title: "Certificate of participation",
    organization: "AI Challenge 2024",
    description: "Received recognition for participating in the Ideathon"
  },
  {
    date: "2024",
    title: "Certificate of participation",
    organization: "Ix 2024",
    description: "Received recognition for participating in the Ui/Ux Competition"
  },
  {
    date: "2024",
    title: "Certificate of Completion",
    organization: "Linkedin Learning",
    description: "Received recognition for completing the course on Springboot"
  },
  {
    date: "2024",
    title: "Certificate of Completion",
    organization: "Linkedin Learning",
    description: "Received recognition for completing the course on Angular"
  },
  {
    date: "2024",
    title: "Certificate of Participation",
    organization: "MoraXtreme 2024",
    description: "Received recognition for participating in the 12 hours hackathon"
  },
  {
    date: "2024",
    title: "Certificate of Participation",
    organization: "IEEEXTREME 2024",
    description: "Received recognition for participating in the 24 hours hackathon"
  },
  {
    date: "2024",
    title: "IET Standing Committe Lead 24/25",
    organization: "IET",
    description: "Received recognition for being the lead of the IET Standing Committee on finance, editorial and organizing"
   
  },
  
  {
    date: "2024",
    title: "Haxmas Finalists",
    organization: "Haxmas 2024",
    description: "Received recognition for being finalists in the Haxmas Hackathon"
   
  },
  {
    date: "2025",
    title: "Certificate of Completion",
    organization: "Udemy",
    description: "Received recognition for completing the course on Machine Learning Fundamentals"
  },
  {
    date: "2025",
    title: "TBA",
    organization: "Interfacex 2025",
    description: "TBA"
  },
  {
    date: "2025",
    title: "TBA",
    organization: "Hult Prize 2025",
    description: "TBA"
  },
  // Add more achievements as needed
];

const Achievements = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-12 gradient-text text-center">
            Achievements & Recognition
          </h1>

          <VerticalTimeline>
            {achievements.map((achievement, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                date={achievement.date}
                iconStyle={{ background: '#1a1a1a', color: '#fff' }}
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  boxShadow: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
              >
                <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                <h4 className="text-gray-400 mb-2">{achievement.organization}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="card p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Machine Learning Specialization - UDEMY</li>
                <li>• Springboot Fundamentals - Linkedin Learning</li>
                <li>• Angular Fundamentals - Linkedin Learning</li>
                <li>• Idealize 2024 - Certificate of semifinalist</li>
                <li>• IdeaForge 2024 - Certificate of participation</li>
                <li>• International Hackathon 2024-  - Certificate of participation</li>
                <li>• Encide 2024-  - Certificate of participation</li>
                <li>• Moraxtreme 2024-  - Certificate of participation</li>
                <li>• Jeyapura xtreme 2024-  - Certificate of participation</li>
                <li>• IEEXTREME 18.0 2024-  - Certificate of participation</li>
                <li>• IET Installation Ceremony 2024-  - Certificate of participation</li>
                <li>• IX 2024-  - Certificate of participation</li>
                <li>• AI Challenge 2024-  - Certificate of participation</li>
                <li>• Haxmas 2024 Finalists - Ascentic Private Limited</li>
                <li>• TechTrek 2024 - Certificate of Participation</li>
              </ul>
            </motion.div>

            <motion.div
              className="card p-6 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Recognition</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Backbone of The Event  (INDUSTPRO 3.0) </li>
                <li>• IET Standing Committe Lead 24/25</li>
                <li>• Hult Prize Committee Co-Lead 25</li>
                <li>•  </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;