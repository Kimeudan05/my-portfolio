"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const honey = formData.get("website") as string; // honeypot field

    // If honeypot is filled, treat as spam
    if (honey) {
      setStatus("Spam detected, message ignored.");
      return;
    }

    try {
      // 1. Save to Supabase
      const { error } = await supabase
        .from("messages")
        .insert([{ name, email, message }]);
      if (error) throw error;

      // 2. Forward to Formspree
      await fetch("https://formspree.io/f/mrbyeqvr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      setStatus("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Contact Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Have a question, want to work together, or just say hi? Fill out the
          form below or reach out directly via email or WhatsApp.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          {/* Honeypot field (hidden from users) */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-lg dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-lg dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 border rounded-lg dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {status}
            </p>
          )}
        </form>

        {/* Direct Contact Options */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-lg">
          <a
            href="mailto:kimeudan05@gmail.com"
            className="flex items-center gap-2 text-blue-600 dark:text-yellow-400 hover:underline"
          >
            <FaEnvelope /> kimeudan05@gmail.com
          </a>
          <a
            href="https://wa.me/254799182231"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 hover:underline"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="https://linkedin.com/in/daniel-masila-55a195245/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
