import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import ProfileCard from "../components/creator/ProfileCard";
import OffersCard from "../components/creator/OffersCard";
import PortfolioCard from "../components/creator/PortfolioCard";
import MilestonesCard from "../components/creator/MilestonesCard";
import HistoryCard from "../components/creator/HistoryCard";
import FeedbackCard from "../components/creator/FeedbackCard";
import ConnectWallet from "../components/WalletConnect";
const rpcUrl = "https://lb.drpc.org/ogrpc?network=sepolia&dkey=AiUXd-BWJkD2jbay87BvdRp84ssnEs8R8JjzKjrWkQAY";


export default function CreatorDashboard() {
  // const {sponsorContract} = state
  const navigate = useNavigate();

  const connectWallet = async () => {
      if (window.ethereum) {
        try {
          // const provider = new ethers.providers.Web3Provider(window.ethereum);
          const provider = new ethers.JsonRpcProvider(rpcUrl);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          alert(`Wallet connected: ${address}`);
        } catch (err) {
          console.error("Wallet connection failed", err);
        }
      } else {
        alert("MetaMask not detected");
      }
    };

  const [creatorInfo, setCreatorInfo] = useState({
    name: "Jane Doe",
    username: "@creatorjane",
    wallet: "0xabc...123",
    bio: "I create Web3 content across music and art.",
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.type === "creator") {
      setCreatorInfo(user);
    }
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const cardThemes = [
    "bg-gradient-to-br from-[#1f2945] to-[#111887]",
    "bg-gradient-to-br from-[#1e3a8a] to-[#312e81]",
    "bg-gradient-to-br from-[#065f46] to-[#064e3b]",
    "bg-gradient-to-br from-[#7c3aed] to-[#4c1d95]",
    "bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d]",
    "bg-gradient-to-br from-[#ca8a04] to-[#78350f]",
  ];

  const cardData = [
    {
      title: "Profile",
      content: (
        <>
          <p><strong>Name:</strong> {creatorInfo.name}</p>
          <p><strong>Username:</strong> {creatorInfo.username}</p>
          <p><strong>Wallet:</strong> {creatorInfo.wallet}</p>
          <p><strong>Bio:</strong> {creatorInfo.bio}</p>
          <button
            className="mt-4 btn"
            onClick={() => navigate("/creator/profile")}
          >
            Edit Profile
          </button>
        </>
      ),
    },
    {
      title: "Offers",
      content: (
        <>
          <p>You have 2 new sponsorship invites.</p>
          <button
            className="mt-4 btn"
            onClick={() => navigate("/creator/offers")}
          >
            View Offers
          </button>
        </>
      ),
    },
    {
      title: "Portfolio",
      content: (
        <>
          <p>Showcase your top work and previous collaborations.</p>
          <button
            className="mt-4 btn"
            onClick={() => navigate("/creator/portfolio")}
          >
            Manage Portfolio
          </button>
        </>
      ),
    },
    {
      title: "Milestones",
      content: (
        <>
          <ul className="list-disc ml-4 text-sm space-y-1">
            <li>🎯 NFT drop with Acme Sponsor - Milestone 2</li>
            <li>🎯 Social media promo - Awaiting Approval</li>
          </ul>
          <button
            className="mt-4 btn"
            onClick={() => navigate("/creator/milestones")}
          >
            View Milestones
          </button>
        </>
      ),
    },
    {
      title: "History",
      content: (
        <>
          <p>Completed 5 collaborations with 90% success rate.</p>
          <button
            className="mt-4 btn"
            onClick={() => navigate("/creator/history")}
          >
            View History
          </button>
        </>
      ),
    },
    {
      title: "Feedback",
      content: (
        <>
          <p>🌟 “Great partner to work with!” - Sponsor X</p>
          <button
            className="mt-4 btn"
            onClick={() => navigate("/creator/feedback")}
          >
            See All Reviews
          </button>
        </>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen px-6 py-10 text-white bg-gradient-to-br from-[#0f172a] to-[#1e293b] font-poppins">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg">
          🎨 Creator Dashboard
        </h1>
        <div className="flex gap-4 cursor-pointer">
          <ConnectWallet />
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition shadow-lg font-medium"
        >
          Logout
        </button>
        </div>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg text-white transition-all duration-700 transform ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } ${cardThemes[index % cardThemes.length]}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h2 className="text-2xl font-semibold mb-3 text-white drop-shadow">{card.title}</h2>
            <div className="text-sm space-y-1">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}