import React, { useState } from "react";

// Use Unsplash or any CDN that reliably serves images
const portfolioItems = [
  {
    title: "AI Project for TechWorld",
    description: "Developed an AI model for real-time predictions in a trading app.",
    image: "https://source.unsplash.com/300x200/?ai,technology", // Replaced with Unsplash
    link: "#",
  },
  {
    title: "DeFi Campaign for CryptoEdge",
    description: "Led a successful marketing campaign for CryptoEdge's DeFi product.",
    image: "https://source.unsplash.com/300x200/?blockchain,finance",
    link: "#",
  },
  {
    title: "Blockchain Education for BlockchainX",
    description: "Created educational content and workshops for the blockchain community.",
    image: "https://source.unsplash.com/300x200/?education,web3",
    link: "#",
  },
];

export default function PortfolioCard() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white shadow-2xl transition-all duration-500">
      {!showPortfolio ? (
        <div className="text-center">
          <p className="text-3xl font-bold mb-6 tracking-tight text-white/90">
            🚀 Showcase Your Best Work
          </p>
          <p className="text-gray-400 mb-6">
            Highlight your top collaborations and achievements.
          </p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
            onClick={() => setShowPortfolio(true)}
          >
            Manage Portfolio
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-4xl font-extrabold mb-8 text-center text-white">
            ✨ My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur border border-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-purple-700/40 hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-xl mb-4 border border-gray-600"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium transition"
                  >
                    🔗 View
                  </a>
                  <button
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-lg transition"
                    onClick={() => alert(`Editing project: ${item.title}`)}
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl shadow-md hover:scale-105 transition"
              onClick={() => setShowPortfolio(false)}
            >
              ⬅ Close Portfolio
            </button>
          </div>
        </>
      )}
    </div>
  );
}
