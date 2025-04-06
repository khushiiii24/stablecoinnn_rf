import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";

const dummyDeals = [
  {
    id: 1,
    creator: "@johnNFT",
    project: "NFT Launch Campaign",
    milestones: [
      { task: "Promo Video", status: "completed" },
      { task: "Twitter AMA", status: "in-progress" },
      { task: "Launch Party", status: "pending" },
    ],
  },
  {
    id: 2,
    creator: "@web3musician",
    project: "Web3 Music Collaboration",
    milestones: [
      { task: "Song Composition", status: "completed" },
      { task: "Recording", status: "in-progress" },
      { task: "Distribution", status: "pending" },
    ],
  },
];

const statusColor = {
  completed: "text-green-400",
  "in-progress": "text-yellow-400",
  pending: "text-gray-400",
};

export default function SponsorDeals() {
  const [deals, setDeals] = useState(dummyDeals);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-300 mb-10">
          🤝 Ongoing Sponsorship Deals
        </h1>

        <div className="space-y-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1f1f3c] rounded-xl p-6 shadow-xl border border-purple-600/30"
            >
              <div className="mb-4">
                <h2 className="text-2xl text-cyan-300 font-semibold">
                  {deal.project}
                </h2>
                <p className="text-gray-400">with {deal.creator}</p>
              </div>

              <h3 className="text-lg text-pink-400 font-medium mb-2">
                Milestones
              </h3>
              <ul className="space-y-2">
                {deal.milestones.map((milestone, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    {milestone.status === "completed" ? (
                      <CheckCircle className={`${statusColor[milestone.status]} w-5 h-5`} />
                    ) : (
                      <Clock className={`${statusColor[milestone.status]} w-5 h-5`} />
                    )}
                    <span className={`${statusColor[milestone.status]} text-sm`}>
                      {milestone.task} - {milestone.status}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-end">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition duration-300">
                  View Proposal Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
