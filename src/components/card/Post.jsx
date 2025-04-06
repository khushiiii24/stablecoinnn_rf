import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PostSponsorship() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    duration: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sponsorship Posted:", formData);
    alert("🎉 Sponsorship posted successfully!");
    setFormData({ title: "", description: "", budget: "", duration: "", tags: "" });
  };

  return (
    <div className="min-h-screen px-6 py-10 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-[#1e1e3f] p-8 rounded-2xl shadow-lg border border-purple-600/40"
      >
        <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">
          📢 Post New Sponsorship
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-cyan-200">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Web3 Music Video Collab"
              className="w-full p-3 rounded-xl bg-[#2e2e57] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-cyan-200">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the opportunity, goals, and what you expect..."
              rows="5"
              className="w-full p-3 rounded-xl bg-[#2e2e57] text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-cyan-200">Budget (in ETH)</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g. 2"
                className="w-full p-3 rounded-xl bg-[#2e2e57] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-cyan-200">Duration (days)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g. 30"
                className="w-full p-3 rounded-xl bg-[#2e2e57] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-cyan-200">Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g. music, nft, promotion"
              className="w-full p-3 rounded-xl bg-[#2e2e57] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold transition-all duration-300 mt-2"
          >
            🚀 Post Sponsorship
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
