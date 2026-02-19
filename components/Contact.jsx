"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiSend, FiUser, FiMessageSquare, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", success: true });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setFormData({ name: "", email: "", message: "" });
      setToast({ show: true, message: "Message sent successfully!", success: true }); // ✅ Success toast
    } catch (err) {
      setToast({ show: true, message: "Something went wrong!", success: false }); // ❌ Error toast
    } finally {
      setLoading(false);
      setTimeout(() => setToast({ ...toast, show: false }), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-16 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-500">
            Get in <span className="text-black dark:text-gray-200">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Feel free to reach out for collaborations, projects, or just to say hi! 
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 text-gray-800 dark:text-gray-200 text-lg">
            <div className="flex items-center gap-3"><FiMail className="text-xl" /> <span>sajawalbaig007@gmail.com</span></div>
            <div className="flex items-center gap-3"><FiPhone className="text-xl" /> <span>03244816538</span></div>
            <div className="flex items-center gap-3"><FiPhone className="text-xl" /> <span>03064869689</span></div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-3 text-2xl text-gray-800 dark:text-gray-200">
            <a href="https://wa.me/03064869689" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/sajawal-baig-7429ba360/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition"><FaLinkedin /></a>
            <a href="https://instagram.com/sajawal_baig11" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="https://github.com/sajawalbaig007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition"><FaGithub /></a>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="md:w-1/2 bg-[#F3F4F6] dark:bg-gray-500 rounded-3xl p-6 md:p-8 shadow-lg flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <FiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="relative">
              <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="relative">
              <FiMessageSquare className="absolute top-4 left-4 text-gray-400 dark:text-gray-300" />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"} <FiSend />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed top-5 right-5 flex items-center gap-3 p-4 rounded-lg shadow-lg z-50 ${
              toast.success ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {toast.success ? <FiCheckCircle className="text-2xl" /> : <FiXCircle className="text-2xl" />}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
