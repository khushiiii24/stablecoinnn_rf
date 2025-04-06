import React, { useState } from "react";

// Sample sponsor offers
const offers = [
  {
    sponsor: "TechWorld DAO",
    description: "We'd love to sponsor your upcoming AI project!",
    amount: "0.5 ETH",
    duration: "2 weeks",
    logo: "https://source.unsplash.com/40x40/?technology",
  },
  {
    sponsor: "CryptoEdge",
    description: "Collaborate with us for our DeFi marketing campaign.",
    amount: "1 ETH",
    duration: "1 month",
    logo: "https://source.unsplash.com/40x40/?crypto",
  },
  {
    sponsor: "MetaGaming",
    description: "Join our gaming-focused sponsorship program!",
    amount: "0.75 ETH",
    duration: "1 month",
    logo: "https://source.unsplash.com/40x40/?gaming",
  },
  {
    sponsor: "BlockchainX",
    description: "Partner with us for blockchain education content.",
    amount: "1.5 ETH",
    duration: "3 weeks",
    logo: "https://source.unsplash.com/40x40/?blockchain",
  },
];

export default function OffersCard() {
  const [showOffers, setShowOffers] = useState(false);

  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white shadow-2xl transition-all duration-500">
      {!showOffers ? (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4 tracking-tight text-white/90">
            🎯 You have {offers.length} new sponsorship invites!
          </p>
          <p className="text-gray-400 mb-6">Check out offers from top sponsors ready to collaborate.</p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
            onClick={() => setShowOffers(true)}
          >
            View Offers
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-extrabold mb-8 text-center text-white">💼 Sponsorship Offers</h2>
          <div className="space-y-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-cyan-700/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={offer.logo}
                    alt={`${offer.sponsor} logo`}
                    className="w-12 h-12 rounded-full mr-4 border border-gray-500 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{offer.sponsor}</h3>
                    <p className="text-sm text-gray-400">{offer.status || "Pending"}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{offer.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-4">
                  <p className="font-semibold text-gray-300">💰 Amount:</p>
                  <p>{offer.amount}</p>
                  <p className="font-semibold text-gray-300">⏳ Duration:</p>
                  <p>{offer.duration}</p>
                </div>
                <div className="flex justify-between gap-4">
                  <button
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition"
                    onClick={() => alert(`Accepted offer from ${offer.sponsor}`)}
                  >
                    ✅ Accept
                  </button>
                  <button
                    className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                    onClick={() => alert(`Rejected offer from ${offer.sponsor}`)}
                  >
                    ❌ Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-md hover:scale-105 transition"
              onClick={() => setShowOffers(false)}
            >
              ⬅ Back
            </button>
          </div>
        </>
      )}
    </div>
  );
}
