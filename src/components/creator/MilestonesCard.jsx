import React, { useState } from "react";

// Mock milestone data
const milestones = [
  {
    title: "🎯 NFT Drop with Acme Sponsor - Milestone 2",
    description: "Launch the second NFT drop as per the agreement.",
    status: "completed",
    progress: 100,
    date: "2025-03-20",
  },
  {
    title: "🎯 Social Media Promo - Awaiting Approval",
    description: "Finalizing the social media strategy for the promotion.",
    status: "in-progress",
    progress: 60,
    date: "2025-03-10",
  },
  {
    title: "🎯 Community AMA - Pending",
    description: "Host a live AMA session with the sponsor's community.",
    status: "pending",
    progress: 0,
    date: "2025-04-01",
  },
];

export default function MilestonesCard() {
  const [showMilestones, setShowMilestones] = useState(false);
  const [filter, setFilter] = useState("all");

  const filteredMilestones =
    filter === "all"
      ? milestones
      : milestones.filter((milestone) => milestone.status === filter);

  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white shadow-2xl transition-all duration-500">
      <h2 className="text-3xl font-extrabold mb-6 text-center">🚀 Creator Milestones</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["all", "completed", "in-progress", "pending"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                filter === status
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
          >
            {status === "all"
              ? "All"
              : status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Milestone Cards */}
      <div className="space-y-6">
        {filteredMilestones.map((milestone, index) => (
          <div
            key={index}
            className="bg-gray-800/70 border border-gray-700 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-700/40 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">{milestone.title}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase
                  ${
                    milestone.status === "completed"
                      ? "bg-green-600/30 text-green-400 border border-green-600"
                      : milestone.status === "in-progress"
                      ? "bg-yellow-600/30 text-yellow-300 border border-yellow-500"
                      : "bg-red-600/30 text-red-400 border border-red-600"
                  }`}
              >
                {milestone.status.replace("-", " ")}
              </span>
            </div>
            <p className="text-gray-300 mb-2 text-sm">{milestone.description}</p>
            <p className="text-gray-500 text-sm mb-3">
              📅 <span className="font-medium">Due Date:</span> {milestone.date}
            </p>

            {/* Progress Bar */}
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-1">Progress</p>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    milestone.progress === 100
                      ? "bg-green-500"
                      : milestone.progress > 0
                      ? "bg-yellow-400"
                      : "bg-red-500"
                  } transition-all duration-500`}
                  style={{ width: `${milestone.progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => alert("View milestone details")}
                className="px-6 py-2 mt-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform"
              >
                🔍 View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowMilestones(!showMilestones)}
          className="px-6 py-3 mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-md hover:scale-105 transition"
        >
          {showMilestones ? "Show Less" : "View All Milestones"}
        </button>
      </div>
    </div>
  );
}
