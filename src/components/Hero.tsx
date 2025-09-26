import Image from "next/image";
import profilePic from "../../public/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-6 md:px-20">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-yellow-400">
            Daniel Kimeu Masila
          </span>
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Web Developer & Data Analyst
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I build responsive and accessible web apps using{" "}
          <span className="font-semibold text-blue-600 dark:text-yellow-400">
            React, TailwindCSS, and Next.js
          </span>
          . I also deliver end-to-end analytics solutions with{" "}
          <span className="font-semibold text-blue-600 dark:text-yellow-400">
            Python, SQL, Excel, and Power BI
          </span>
          , helping businesses transform raw data into meaningful insights and
          decisions.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Whether it’s designing a user-friendly dashboard, optimizing
          workflows, or predicting customer churn, I love solving problems at
          the intersection of{" "}
          <span className="italic text-blue-600 dark:text-yellow-400">
            technology and data
          </span>
          .
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="/web-projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium shadow-lg hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium shadow-lg hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <Image
          src={profilePic}
          alt="Daniel Masila"
          width={260}
          height={260}
          title="Daniel Masila"
          className="rounded-full border-4 border-blue-600 dark:border-yellow-400 shadow-xl hover:scale-105 transition-transform"
        />
      </div>
    </section>
  );
}
