"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Hukam Express",
    description: "Parcel delivery & booking platform. Fast, reliable, and user-friendly.",
    image: "/images/hukamexpress.png",
    link: "https://hukamexpress.com",
  },
  {
    title: "Infotecks",
    description: "Digital services: Web apps, SEO, e-commerce & marketing solutions.",
    image: "/images/infotecks.png",
    link: "https://infotecks.com",
  },
  {
    title: "Stowave",
    description: "Trendy clothing brand website with modern design & smooth UX.",
    image: "/images/stowave.png",
    link: "https://stowave.com",
  },
  {
    title: "Emaan Mall",
    description: "Electronics online store with easy navigation and seamless checkout.",
    image: "/images/emaanmall.png",
    link: "https://emaanmall.com",
  },
  {
    title: "HSelectric Store",
    description: "Electrical products e-store, user-friendly and fully responsive.",
    image: "/images/hselectric.png",
    link: "https://hselectric.com",
  },
];

export default function ProjectsSection() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [duration, setDuration] = useState(60); // default desktop duration

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth / 2);
      }
    };

    // Check screen width to adjust speed
    const updateDuration = () => {
      if (window.innerWidth < 768) {
        setDuration(30); // faster for mobile
      } else {
        setDuration(30); // slower for desktop
      }
    };

    updateWidth();
    updateDuration();

    window.addEventListener("resize", () => {
      updateWidth();
      updateDuration();
    });

    return () => window.removeEventListener("resize", () => {
      updateWidth();
      updateDuration();
    });
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-16 px-6 md:px-12 bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-500">
          Recent <span className="text-black dark:text-gray-200">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          A selection of projects I’ve built using modern web technologies.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden relative" ref={carouselRef}>
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{ x: [`0px`, `-${width}px`] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: duration, ease: "linear" }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              className="w-[280px] md:w-[300px] bg-[#F3F4F6] dark:bg-gray-500 rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <div className="relative w-full h-36 md:h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content below image */}
              <div className="p-3 md:p-4 flex flex-col items-start gap-2 h-40">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug line-clamp-3">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full text-white bg-gray-800 dark:bg-gray-700 px-5 py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                >
                  View Project <FiArrowUpRight className="text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
