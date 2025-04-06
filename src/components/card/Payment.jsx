import React, { useState } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";

const SponsorPayments = () => {
  const [loadingId, setLoadingId] = useState(null);
  const sponsorships = [
    {
      id: 1,
      creator: "@johnNFT",
      project: "NFT Music Video Collab",
      amount: "1.5",
      status: "In Escrow",
    },
    {
      id: 2,
      creator: "@janeAI",
      project: "AI Art Promo",
      amount: "2",
      status: "Awaiting Release",
    },
  ];

  const releasePayment = async (id) => {
    setLoadingId(id);

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      const contractAddress = "0xYourSmartContractAddress";
      const abi = ["function releasePayment(uint256 sponsorshipId) public"];

      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.releasePayment(id);
      await tx.wait();

      alert(`✅ Payment for sponsorship #${id} released!`);
    } catch (err) {
      console.error("Payment release failed:", err);
      alert("❌ Failed to release payment.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-poppins">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-300 mb-8 text-center">
          💸 Manage Payments
        </h2>

        <div className="space-y-6">
          {sponsorships.map((deal) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1f1f3f] p-6 rounded-xl border border-purple-600/40 shadow-lg flex flex-col md:flex-row justify-between items-center"
            >
              <div className="space-y-1 text-left">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {deal.project}
                </h3>
                <p className="text-sm">
                  👤 Creator: <span className="text-pink-400">{deal.creator}</span>
                </p>
                <p className="text-sm">💰 Amount: {deal.amount} ETH</p>
                <p className="text-sm">🔒 Escrow Status: {deal.status}</p>
              </div>
              <button
                disabled={loadingId === deal.id}
                onClick={() => releasePayment(deal.id)}
                className={`mt-4 md:mt-0 md:ml-6 px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  loadingId === deal.id
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                {loadingId === deal.id ? "Processing..." : "Release Payment"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorPayments;
