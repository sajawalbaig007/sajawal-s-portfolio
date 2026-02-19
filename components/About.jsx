"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const aboutItems = [
  {
    title: "Who I Am",
    content:
      "Hi! I'm Sajawal Baig, a passionate Full Stack Developer. I love building modern, responsive, and high-performance web applications that solve real-world problems and create an amazing user experience.",
    fromLeft: true,
  },
  {
    title: "What I Do",
    content:
      "I focus on creating scalable web solutions using React, Next.js, Node.js, and modern web technologies. Clean, maintainable code and performance are my top priorities.",
    fromLeft: false,
  },
  {
    title: "Why Me",
    content:
      "I am committed to delivering high-quality results while continuously learning and adapting to new technologies. I aim to make every project efficient, beautiful, and user-friendly.",
    fromLeft: true,
  },
  {
    title: "Let’s Connect",
    content:
      "Whether you’re a recruiter, collaborator, or fellow developer — feel free to reach out. I’m always excited to discuss new ideas and opportunities.",
    fromLeft: false,
  },
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Scroll to Contact Section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-24 px-6 md:px-20 bg-white dark:bg-black overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-500"
        >
          About <span className="text-black dark:text-gray-200">Me</span>
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Static line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>

        {/* Dynamic fill line */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-500 via-gray-400 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-400 rounded-full shadow-lg"
        />

        {/* Items */}
        <div className="relative flex flex-col gap-20">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.fromLeft ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className={`relative md:w-1/2 ${
                item.fromLeft ? "self-start pr-10" : "self-end pl-10"
              }`}
            >
              {/* Number Dot */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gray-300 bg-gray-800 flex items-center justify-center shadow-lg z-10">
                <span className="text-gray-200 font-bold text-lg">{index + 1}</span>
              </div>

              {/* Card */}
              <div className="relative bg-[#F3F4F6] dark:bg-gray-500 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-gray-400/50 hover:scale-[1.02] transition-transform duration-300 ease-out">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base mb-4">
                  {item.content}
                </p>

                {/* Last item button */}
                {index === aboutItems.length - 1 && (
                  <button
                    onClick={scrollToContact}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-700 dark:to-gray-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact Me</span>
                    <span className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 hover:opacity-30 transition-opacity duration-500"></span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
