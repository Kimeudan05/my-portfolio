import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-8 mt-16 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Copyright */}
        <p className="text-sm text-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} Daniel Kimeu Masila. All rights reserved.
        </p>

        {/* Middle - Quick Links */}
        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            Home
          </Link>
          <Link
            href="/web-projects"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            Web Projects
          </Link>
          <Link
            href="/data-projects"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            Data Projects
          </Link>
          <Link
            href="/services"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:underline text-gray-800 dark:text-gray-200"
          >
            Contact
          </Link>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-4 text-xl text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-yellow-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-yellow-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-blue-600 dark:hover:text-yellow-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
