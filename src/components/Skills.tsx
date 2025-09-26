export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center md:text-left text-gray-900 dark:text-white">
          Core Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "TailwindCSS",
            "JavaScript",
            "React",
            "Next.js",
            "SQL",
            "Python",
            "Excel",
            "Power BI",
            "Firebase",
            "Supabase",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
