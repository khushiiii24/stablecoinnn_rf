import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-4xl font-extrabold text-purple-400 mb-6"
      >
        About CollabVerse
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-200 mb-10"
      >
        CollabVerse is a revolutionary decentralized platform that connects creators and sponsors globally.  
        Our mission is to empower creators with secure, transparent, and blockchain-based collaboration tools.  
        Join us in building a future where creativity knows no bounds.
      </motion.p>

      {/* Team Section */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Khushi Arya", role: "Member", bio: "Visionary  passion about blockchain." },
          { name: "Diksha", role: "Member", bio: "Tech enthusiast innovation in Web3." },
          { name: "Vibha", role: "Member", bio: "Building vibrant, and enhanced frontend" },
          { name: "Khushi", role: "Member", bio: "Building and collaboration expertise" }
        ].map(({ name, role, bio }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: "#6a3093" }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-purple-400">{name}</h2>
            <p className="text-gray-300 italic">{role}</p>
            <p className="text-gray-200 mt-2">{bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
