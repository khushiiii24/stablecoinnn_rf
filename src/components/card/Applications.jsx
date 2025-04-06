import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, XCircle } from "lucide-react";

const mockApplications = [
  {
    id: 1,
    creator: "@nftArtist",
    title: "Launch NFT Series: Mystic Beasts",
    description:
      "A unique NFT collection launch with cross-platform promotion, storytelling, and digital art collaborations.",
    ethRequested: 1.5,
    documentLink: "https://ipfs.io/ipfs/QmSampleProposalHash1",
    status: "pending",
  },
  {
    id: 2,
    creator: "@web3edu",
    title: "Web3 Education Mini-Series",
    description:
      "Creating an engaging video series that introduces blockchain basics for underrepresented communities.",
    ethRequested: 2.0,
    documentLink: "https://ipfs.io/ipfs/QmSampleProposalHash2",
    status: "pending",
  },
];

export default function SponsorApplications() {
  const [applications, setApplications] = useState(mockApplications);

  const handleStatusChange = (id, status) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-poppins">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-300 mb-12">
          📬 Collaboration Applications
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1e1e3f] border border-purple-700/40 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-cyan-300">
                {app.title}
              </h2>
              <p className="text-gray-300 mb-2">
                From <span className="text-pink-400">{app.creator}</span>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                {app.description}
              </p>

              <div className="text-sm text-yellow-300 mb-4">
                ETH Requested: <span className="font-medium">{app.ethRequested} ETH</span>
              </div>

              <a
                href={app.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-400 hover:text-blue-300 mb-4"
              >
                <FileText className="w-4 h-4 mr-1" />
                View Proposal Document
              </a>

              <div className="flex justify-between mt-4">
                <button
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                  onClick={() => handleStatusChange(app.id, "approved")}
                >
                  <CheckCircle className="w-4 h-4" />
                  Approve
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                  onClick={() => handleStatusChange(app.id, "rejected")}
                >
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
              </div>

              {app.status !== "pending" && (
                <p className={`mt-4 text-sm font-semibold ${app.status === "approved" ? "text-green-400" : "text-red-400"}`}>
                  Application {app.status.toUpperCase()}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
