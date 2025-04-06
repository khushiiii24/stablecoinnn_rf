import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function SponsorProfile() {
  const location = useLocation();
  const sponsor = location.state?.sponsor || {
    name: "Unnamed Sponsor",
    username: "@unknown",
    description: "No description provided",
    amount: "0",
    wallet: "Not connected",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-8 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-[#1f1f3a] p-8 rounded-2xl shadow-lg border border-purple-600/30 backdrop-blur-md"
      >
        <h1 className="text-3xl font-bold text-purple-400 mb-6 text-center">
          👤 Sponsor Profile
        </h1>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="mb-2"><span className="font-semibold text-purple-300">Name:</span> {sponsor.name}</p>
            <p className="mb-2"><span className="font-semibold text-purple-300">Username:</span> @{sponsor.name?.toLowerCase().replace(/\s/g, "")}</p>
            <p className="mb-2"><span className="font-semibold text-purple-300">About:</span> {sponsor.description}</p>
            <p className="mb-2"><span className="font-semibold text-purple-300">Planned Contribution:</span> ${sponsor.amount}</p>
            <p className="mb-2"><span className="font-semibold text-purple-300">Wallet Address:</span> {sponsor.wallet}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-cyan-300">📈 Wallet Stats</h3>
            <ul className="text-sm list-disc list-inside text-gray-300">
              <li>Total Sponsored: $12,000</li>
              <li>Deals Completed: 5</li>
              <li>Ongoing Deals: 2</li>
              <li>Avg. Rating from Creators: ⭐ 4.8</li>
            </ul>

            <h3 className="text-lg font-semibold text-cyan-300 mt-6">📜 Sponsorship History</h3>
            <ul className="text-sm text-gray-300">
              <li>🎤 Music Collab with @beatboy (Completed)</li>
              <li>🎮 Game Asset Deal with @pixelqueen (In Progress)</li>
              <li>📸 NFT Promo with @artify (Completed)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-xl transition-all duration-300">
            ✏️ Edit Profile
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl transition-all duration-300">
            📜 View Sponsorships
          </button>
        </div>
      </motion.div>
    </div>
  );
}
