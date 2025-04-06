import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const SponsorFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [creator, setCreator] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const submitFeedback = () => {
    if (creator && comment && rating > 0) {
      setFeedbacks([
        ...feedbacks,
        { creator, comment, rating, date: new Date().toLocaleDateString() },
      ]);
      setCreator("");
      setComment("");
      setRating(0);
    } else {
      alert("Please fill all fields and provide a rating.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-10 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-300 mb-10">
          📝 Sponsor Feedback
        </h1>

        <div className="bg-[#1e1e3a] p-6 rounded-xl shadow-lg border border-purple-600/30 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-cyan-300">Leave Feedback</h2>
          <input
            type="text"
            placeholder="Creator Username (e.g. @johnNFT)"
            className="w-full px-4 py-2 mb-4 rounded-lg bg-[#2a2a4d] text-white border border-purple-500 focus:outline-none"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
          <textarea
            placeholder="Write your feedback..."
            className="w-full px-4 py-2 mb-4 rounded-lg bg-[#2a2a4d] text-white border border-purple-500 focus:outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex items-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`w-6 h-6 cursor-pointer transition-transform duration-200 ${
                  star <= rating ? "text-yellow-400 scale-110" : "text-gray-500"
                }`}
                fill={star <= rating ? "currentColor" : "none"}
              />
            ))}
            <span className="text-sm text-gray-300">{rating}/5</span>
          </div>
          <button
            onClick={submitFeedback}
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg text-white transition-all duration-300"
          >
            Submit Feedback
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-pink-400">Your Feedbacks</h2>
          {feedbacks.length === 0 ? (
            <p className="text-gray-400">No feedback given yet.</p>
          ) : (
            feedbacks.map((fb, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#282850] p-4 rounded-xl border border-purple-500/40"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-cyan-300 font-medium">{fb.creator}</p>
                  <p className="text-sm text-gray-400">{fb.date}</p>
                </div>
                <p className="mb-2 text-white">{fb.comment}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(fb.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorFeedback;
