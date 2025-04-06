import React, { useState } from "react";

// Mock data for feedback
const feedbackData = [
  {
    sponsor: "Sponsor X",
    rating: 5,
    review: "🌟 “Great partner to work with! Highly recommend.”",
    date: "2025-03-01",
  },
  {
    sponsor: "Sponsor Y",
    rating: 4,
    review: "🌟 “Good collaboration, but could improve communication.”",
    date: "2025-02-15",
  },
  {
    sponsor: "Sponsor Z",
    rating: 5,
    review: "🌟 “Absolutely fantastic experience! Will work together again.”",
    date: "2025-01-10",
  },
];

export default function FeedbackCard() {
  const [showAllFeedback, setShowAllFeedback] = useState(false);
  const [replies, setReplies] = useState({});
  const [activeReplyBox, setActiveReplyBox] = useState(null);

  const handleReplySubmit = (index, text) => {
    setReplies((prev) => ({ ...prev, [index]: text }));
    setActiveReplyBox(null); // Close the reply box
  };

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-purple-400">
        💬 Feedback & Reviews
      </h2>

      <div className="space-y-6">
        {(showAllFeedback ? feedbackData : feedbackData.slice(0, 2)).map(
          (feedback, index) => (
            <div
              key={index}
              className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 shadow-md hover:shadow-purple-500/30 transition duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {feedback.sponsor}
                </h3>
                <div className="flex items-center space-x-1">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic mb-2">{feedback.review}</p>
              <p className="text-sm text-gray-500">
                {new Date(feedback.date).toLocaleDateString()}
              </p>

              {/* Reply section */}
              {replies[index] ? (
                <div className="mt-3 text-sm text-green-400">
                  <strong>Your Reply:</strong> {replies[index]}
                </div>
              ) : activeReplyBox === index ? (
                <div className="mt-3">
                  <textarea
                    className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-600 mb-2"
                    placeholder="Write your reply..."
                    rows={2}
                    onChange={(e) => setReplies((prev) => ({ ...prev, [index]: e.target.value }))}
                  />
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1 bg-purple-600 hover:bg-purple-700 rounded-md"
                      onClick={() => handleReplySubmit(index, replies[index] || "")}
                    >
                      Submit
                    </button>
                    <button
                      className="px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-md"
                      onClick={() => setActiveReplyBox(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="mt-3 text-sm text-purple-400 hover:underline"
                  onClick={() => setActiveReplyBox(index)}
                >
                  Reply
                </button>
              )}
            </div>
          )
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowAllFeedback(!showAllFeedback)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition duration-300"
        >
          {showAllFeedback ? "Show Less" : "See All Reviews"}
        </button>
      </div>
    </div>
  );
}
