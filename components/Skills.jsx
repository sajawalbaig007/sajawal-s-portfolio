"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiFigma, SiJavascript, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
  { name: "JavaScript", icon: <SiJavascript />, level: 90 },
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "Express.js", icon: <SiExpress />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb />, level: 75 },
  { name: "GitHub", icon: <FaGithub />, level: 85 },
  { name: "Figma", icon: <SiFigma />, level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-500"
        >
          My <span className="text-black dark:text-gray-200">Skills</span>
        </motion.h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="relative bg-[#F3F4F6] dark:bg-gray-500 p-4 rounded-2xl shadow-lg hover:shadow-gray-400/50 hover:scale-[1.02] transition-transform duration-300 ease-out flex flex-col items-center"
          >
            <div className="text-4xl mb-3 text-gray-700 dark:text-gray-100">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{skill.name}</h3>

            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 dark:from-gray-400 dark:via-gray-300 dark:to-gray-200"
              />
            </div>
            <span className="mt-1 text-xs text-gray-700 dark:text-gray-200">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
