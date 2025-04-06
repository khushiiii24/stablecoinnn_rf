import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LogoSplash from "../components/logosplash";

export default function Home() {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Show splash for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen min-w-100vw flex items-center justify-center bg-black">
        <LogoSplash />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-[Poppins] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-sm z-20 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          CollabVerse
        </h1>
        <ul className="flex space-x-6 text-white font-semibold">
          <li><button onClick={() => navigate("/")}>Home</button></li>
          <li><button onClick={() => navigate("/about")}>About</button></li>
          <li><button onClick={() => navigate("/features")}>Features</button></li>
          <li><button onClick={() => navigate("/signup")}>Sign Up</button></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-36 md:py-48 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-8 text-white drop-shadow-lg"
        >
          Welcome to CollabVerse 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-2xl max-w-3xl text-gray-200 mb-10 leading-relaxed"
        >
          A decentralized platform where creators and sponsors collaborate securely using Web3, smart contracts, and NFTs.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          onClick={() => navigate("/signup")}
          className="bg-purple-700 hover:bg-purple-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Get Started
        </motion.button>
      </main>

      {/* Features Section */}
      <section className="bg-black/30 backdrop-blur-md py-16 px-6 text-center border-t border-white/10">
        <h3 className="text-3xl md:text-4xl font-semibold mb-10 text-purple-300">
          Why CollabVerse?
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Decentralized", desc: "No middlemen. Trustless smart contracts ensure fair deals." },
            { title: "NFT-Driven", desc: "Track collaborations and sponsorships with on-chain NFT records." },
            { title: "Secure Payments", desc: "Escrow and milestone-based payments powered by blockchain." },
            { title: "Global Reach", desc: "Collaborate with creators worldwide seamlessly." },
            { title: "Smart Analytics", desc: "Track performance with real-time analytics and reporting." },
            { title: "Community Driven", desc: "Join a vibrant ecosystem of innovators and supporters." },
          ].map(({ title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl border border-purple-700/40 backdrop-blur-lg cursor-pointer"
            >
              <h4 className="text-xl font-bold mb-3 text-pink-400">{title}</h4>
              <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-5 border-t border-white/10 bg-black/20 backdrop-blur-md z-10">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Links */}
          {/* ... your social icons code remains here ... */}
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CollabVerse. Built with ❤️ for creators.
        </p>
      </footer>
    </div>
  );
}
