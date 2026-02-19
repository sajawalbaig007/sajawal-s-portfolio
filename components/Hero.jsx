"use client";
import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const lines = [
  "Building Responsive Websites.",
  "Creating Modern Web Applications.",
  "Designing Scalable Solutions."
];

const Hero = () => {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentLine = lines[lineIndex];
      if (isDeleting) {
        setText(currentLine.substring(0, text.length - 1));
      } else {
        setText(currentLine.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentLine) {
        setTimeout(() => setIsDeleting(true), 1000);
        setSpeed(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
        setSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, lineIndex]);

  return (
    <section id="home" className="flex items-center justify-center mt-10 px-6 md:px-20 py-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="text-center max-w-3xl">
        <motion.div className="relative flex justify-center mb-5" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-tr from-gray-400 via-gray-300 to-gray-400 filter blur-[30px] opacity-70 animate-pulse-slow dark:block hidden"></div>
          <img src="/images/mypic.jpeg" alt="Sajawal Baig" className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover object-[center_30%] shadow-lg border-4 border-gray-300 dark:border-gray-600 transition-colors duration-300"/>
        </motion.div>

        <p className="text-gray-600 dark:text-gray-400 text-base mb-3 transition-colors duration-300">Hi! I'm Sajawal Baig 👋</p>

        <motion.h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-gray-300 transition-colors duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          Full Stack Developer <br />
          <span className="text-gray-900 dark:text-gray-300">{text}<span className="border-r-2 border-blue-600 animate-pulse ml-1"></span></span>
        </motion.h1>

        <motion.p className="text-gray-600 dark:text-gray-400 mt-4 text-sm md:text-base max-w-xl mx-auto transition-colors duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          I create scalable, responsive, and high-performance web applications using modern technologies.
        </motion.p>

        <motion.div className="flex justify-center gap-4 mt-6 flex-wrap" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
          <button className="bg-black dark:bg-gray-200 text-white dark:text-black px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition">
            Download Resume <FiArrowUpRight />
          </button>
          <button className="bg-gray-200 dark:bg-gray-500 text-black dark:text-white border border-gray-400 dark:border-gray-700 px-5 py-2.5 rounded-full hover:opacity-90 transition">
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
