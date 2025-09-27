import Image from "next/image";
import { projects } from "@/lib/projects";

export default function WebProjects() {
  const webProjects = projects.filter((p) => p.category === "web");

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Web Development Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
            <div
              key={project.slug}
              className="p-6 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:shadow-lg transition"
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 dark:text-yellow-400 font-medium hover:underline"
                >
                  Case Study
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
