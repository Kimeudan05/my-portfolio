"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-gray-800 p-4 flex justify-between items-center z-50 bg-gray-400/70 dark:bg-gray-900/70 transition-colors">
      <h1 className="font-bold text-xl">Portfolio</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/web-projects">Web Projects</Link>
        <Link href="/data-projects">Data Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
