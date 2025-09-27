"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { projects } from "@/lib/projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Previous image handler
  const prevImage = useCallback(() => {
    if (lightboxIndex !== null && project?.images.length) {
      setLightboxIndex(
        (lightboxIndex - 1 + project.images.length) % project.images.length
      );
    }
  }, [lightboxIndex, project?.images.length]);

  // Next image handler
  const nextImage = useCallback(() => {
    if (lightboxIndex !== null && project?.images.length) {
      setLightboxIndex((lightboxIndex + 1) % project.images.length);
    }
  }, [lightboxIndex, project?.images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  if (!project) return notFound();

  // Touch swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) nextImage(); // swipe left
    else if (diff < -50) prevImage(); // swipe right

    setTouchStart(null);
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {project.title}
        </h1>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="focus:outline-none"
            >
              <Image
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover hover:opacity-80 transition"
              />
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        {/* Tools */}
        <div className="mb-6 flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-yellow-400 font-medium hover:underline"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-yellow-400 font-medium hover:underline"
            >
              Live Demo
            </a>
          )}
          {project.report && (
            <a
              href={project.report}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-yellow-400 font-medium hover:underline"
            >
              Report
            </a>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white text-2xl font-bold"
          >
            ✕
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl"
          >
            ‹
          </button>

          {/* Image */}
          <Image
            src={project.images[lightboxIndex]}
            alt={`Fullscreen ${project.title}`}
            width={1000}
            height={700}
            className="max-h-[80vh] w-auto rounded-lg shadow-lg"
          />

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
