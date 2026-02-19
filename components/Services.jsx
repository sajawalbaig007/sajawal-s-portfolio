"use client";

import React from "react";
import { FaLaptopCode, FaTools, FaShoppingCart, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites using React, Next.js, and modern technologies.",
    icon: <FaLaptopCode size={28} />,
  },
  {
    title: "Web Maintenance",
    description: "Keeping your website updated, secure, and optimized for performance.",
    icon: <FaTools size={28} />,
  },
  {
    title: "E-Commerce Solutions",
    description: "Creating scalable e-commerce platforms with secure payments and smooth UX.",
    icon: <FaShoppingCart size={28} />,
  },
  {
    title: "Backend & API",
    description: "Developing APIs, server-side logic, and database integration for robust applications.",
    icon: <FaServer size={28} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-20 px-6 md:px-20 bg-white dark:bg-black">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-500"
        >
          My <span className="text-black dark:text-gray-200">Services</span>
        </motion.h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            className="relative bg-[#F3F4F6] dark:bg-gray-500 p-5 rounded-2xl shadow-lg hover:shadow-gray-400/50 hover:scale-[1.02] transition-transform duration-300 ease-out text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 text-gray-700 dark:text-gray-100">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
