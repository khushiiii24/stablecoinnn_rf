import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-4xl font-extrabold text-purple-400 mb-6"
      >
        Our Features
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { title: "Decentralized", desc: "Trustless smart contracts ensure fair deals." },
          { title: "NFT-Driven", desc: "Track collaborations with on-chain NFT records." },
          { title: "Secure Payments", desc: "Blockchain-powered escrow and milestone payments." },
          { title: "Global Reach", desc: "Collaborate with creators worldwide." },
          { title: "Smart Analytics", desc: "Real-time performance tracking and reporting." },
          { title: "Community Driven", desc: "Join an ecosystem of innovators and supporters." }
        ].map(({ title, desc }, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(135deg, #6a3093, #a044ff)",
              transition: { duration: 0.5 }
            }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transition transform"
          >
            <h2 className="text-2xl font-bold text-purple-400 mb-3">{title}</h2>
            <p className="text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
