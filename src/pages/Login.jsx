import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("creator");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      alert("Login successful!");
      navigate(role === "creator" ? "/CreatorDashboard" : "/SponsorDashboard");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden px-6 py-10">
      {/* Purple-Pink Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-700 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-600 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl bg-gray-900 bg-opacity-90 backdrop-blur-md p-10 rounded-3xl shadow-2xl z-10"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Login to CollabVerse
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-300">Login As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="creator">Creator</option>
              <option value="sponsor">Sponsor</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-lg rounded-xl font-semibold shadow-xl transition"
          >
            Login
          </motion.button>

          <div className="text-center mt-6 text-gray-400">
            <p>
              Don&apos;t have an account?{" "}
              <a
                href="/signup"
                className="text-pink-400 hover:text-pink-500 underline transition"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
