export default function About() {
  const skills = [
    {
      name: "HTML",
      logo: "/skills/html.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      logo: "/skills/css.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "TailwindCSS",
      logo: "/skills/tailwindcss.png",
      link: "https://tailwindcss.com/docs",
    },
    {
      name: "JavaScript",
      logo: "/skills/javascript.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React",
      logo: "/skills/react.png",
      link: "https://react.dev",
    },
    {
      name: "Next.js",
      logo: "/skills/nextjs.png",
      link: "https://nextjs.org/docs",
    },
    {
      name: "SQL",
      logo: "/skills/sql.png",
      link: "https://www.w3schools.com/sql/",
    },
    {
      name: "Python",
      logo: "/skills/python.png",
      link: "https://docs.python.org/3/",
    },
    {
      name: "Excel",
      logo: "/skills/excel.png",
      link: "https://support.microsoft.com/en-us/excel",
    },
    {
      name: "Power BI",
      logo: "/skills/powerbi.png",
      link: "https://learn.microsoft.com/en-us/power-bi/",
    },
    {
      name: "Firebase",
      logo: "/skills/firebase.png",
      link: "https://firebase.google.com/docs",
    },
    {
      name: "Supabase",
      logo: "/skills/supabase.png",
      link: "https://supabase.com/docs",
    },
    {
      name: "PostgreSQL",
      logo: "/skills/postgresql.png",
      link: "https://www.postgresql.org/docs/",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I’m a multidisciplinary developer who bridges modern web development
          and data analytics. I build responsive, accessible web apps with
          React, Next.js, and TailwindCSS, while also delivering end-to-end data
          solutions with SQL, Python, Excel, and Power BI.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          My focus is on transforming raw data into actionable insights,
          optimizing business processes, and creating impactful digital
          experiences. I enjoy working on projects that combine problem-solving,
          analytics, and clean design.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center md:text-left text-gray-900 dark:text-white">
          Core Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-12 w-12 mb-3 object-contain"
                title={skill.link}
              />
              <span className="text-gray-900 dark:text-gray-200 font-medium">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
