"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  // Check session on load
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };
    checkSession();
  }, []);

  // Fetch messages if logged in
  useEffect(() => {
    if (!user) return;
    const fetchMessages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setMessages(data as Message[]);
      }
      setLoading(false);
    };
    fetchMessages();
  }, [user]);

  // Handle login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      setUser(data.user);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (!user) {
    return (
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-lg dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Messages Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p className="text-gray-700 dark:text-gray-300">
            Loading messages...
          </p>
        ) : messages.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">
            No messages received yet.
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="p-3 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(msg.created_at).toLocaleString()}
                </p>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  name : {msg.name}
                </h3>
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                  email : {msg.email}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-xl">
                  message : {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
