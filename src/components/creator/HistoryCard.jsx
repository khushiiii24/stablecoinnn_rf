import React, { useState } from "react";

// Mock data for collaboration history
const collaborations = [
  {
    sponsor: "TechWorld DAO",
    project: "AI Project Development",
    duration: "1 month",
    status: "Completed",
    success: true,
    feedback: "Excellent collaboration, highly recommended!",
    date: "2025-03-01",
  },
  {
    sponsor: "CryptoEdge",
    project: "DeFi Marketing Campaign",
    duration: "2 weeks",
    status: "Completed",
    success: true,
    feedback: "Good project, but communication could improve.",
    date: "2025-02-15",
  },
  {
    sponsor: "Blockchain Inc.",
    project: "Blockchain Research",
    duration: "3 months",
    status: "Failed",
    success: false,
    feedback: "Project didn't meet expectations. Communication was lacking.",
    date: "2025-01-10",
  },
  {
    sponsor: "InnovateX",
    project: "NFT Collection Launch",
    duration: "6 weeks",
    status: "Completed",
    success: true,
    feedback: "Fantastic partner! Everything went smoothly.",
    date: "2024-12-01",
  },
  {
    sponsor: "CryptoGlobal",
    project: "Smart Contract Development",
    duration: "2 months",
    status: "Completed",
    success: true,
    feedback: "Amazing experience! Would love to collaborate again.",
    date: "2024-11-01",
  },
];

export default function HistoryCard() {
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [filter, setFilter] = useState("all");

  const successCount = collaborations.filter((c) => c.success).length;
  const successRate = ((successCount / collaborations.length) * 100).toFixed(2);

  const filteredCollaborations =
    filter === "all"
      ? collaborations
      : collaborations.filter((c) =>
          filter === "completed" ? c.status === "Completed" : c.status === "Failed"
        );

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">📜 Collaboration History</h2>

      {/* Success Rate Progress */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="text-xl">
          ✅ <span className="font-semibold text-green-400">Success Rate:</span> {successRate}%
        </div>
        <div className="w-full md:w-1/2 bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              successRate < 50
                ? "bg-red-500"
                : successRate < 80
                ? "bg-yellow-400"
                : "bg-green-500"
            }`}
            style={{ width: `${successRate}%` }}
          ></div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["all", "completed", "failed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              filter === type
                ? "bg-cyan-600 border-cyan-400 text-white"
                : "bg-gray-800 border-gray-600 text-gray-300 hover:border-cyan-500"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Collaboration Cards */}
      <div className="grid gap-6">
        {(showAllHistory ? filteredCollaborations : filteredCollaborations.slice(0, 3)).map(
          (collab, index) => (
            <div
              key={index}
              className="bg-gray-800/80 p-6 rounded-xl shadow-md hover:shadow-cyan-600/30 transition duration-300 border border-gray-700"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-white">{collab.project}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    collab.success ? "bg-green-600 text-white" : "bg-red-600 text-white"
                  }`}
                >
                  {collab.success ? "Success" : "Failed"}
                </span>
              </div>
              <p className="text-gray-400">
                <strong className="text-white">Sponsor:</strong> {collab.sponsor}
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Duration:</strong> {collab.duration}
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Status:</strong> {collab.status}
              </p>

              <div className="mt-3">
                <p className="text-sm text-gray-500">💬 Feedback:</p>
                <p className="italic text-gray-300">{collab.feedback}</p>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => alert("View collaboration details")}
                  className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/* Toggle Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowAllHistory(!showAllHistory)}
          className="px-6 py-3 mt-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300"
        >
          {showAllHistory ? "Show Less" : "View Full History"}
        </button>
      </div>
    </div>
  );
}
