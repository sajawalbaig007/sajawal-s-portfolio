"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black text-black dark:text-white py-6 md:py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top divider line */}
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 mb-4"></div>

        {/* Footer text */}
        <p className="text-center text-gray-800 dark:text-gray-200 text-sm md:text-base">
          &copy; 2026 Sajawal Baig. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
