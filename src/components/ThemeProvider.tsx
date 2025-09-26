"use client";
import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount, check localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-lg shadow-lg"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      {children}
    </>
  );
}
