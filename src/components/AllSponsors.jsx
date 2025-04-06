import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import data from "../constants/sponsorcreatorABI.json";

// Replace with your actual contract address
const contractAddress = "0xDED68584fa8c29BE5A7C2CbF6EDD68DE932e007E";

const AllSponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        // Use window.ethereum provider (e.g., MetaMask) if available.
        const _provider = new ethers.BrowserProvider(window.ethereum);
        const _signer = await _provider.getSigner();
        const _contract = new ethers.Contract(contractAddress, data.sponsorcreatorABI, _signer);

        // Call your contract method (adjust method name if needed)
        const sponsorsData = await _contract.getAllCreators();
        console.log("sponsorsData", sponsorsData);

        // Convert BigNumber values (if any) to strings and adjust as needed.
        const formattedSponsors = sponsorsData.map(sponsor => ({
          name: sponsor[0],
          amount: sponsor[1].toString(),
          sponsorAddress: sponsor.sponsorAddress || "N/A"
        }));

        setSponsors(formattedSponsors);
      } catch (err) {
        console.error("Error fetching sponsors:", err);
        setError("Failed to fetch sponsors.");
      }
    };

    fetchSponsors();
  }, []);

  return (
    <div className="sponsors-container">
      <h1>All Sponsors</h1>
      {error && <p className="error">{error}</p>}
      <div className="card-grid">
        {sponsors.map((sponsor, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">{sponsor.name}</h3>
            <p>
              <strong>Address:</strong> {sponsor.sponsorAddress}
            </p>
            <p>
              <strong>Amount:</strong> {sponsor.amount}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        .sponsors-container {
          padding: 40px;
          background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
          min-height: 100vh;
          font-family: 'Arial', sans-serif;
        }
        .sponsors-container h1 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          color: #333;
        }
        .error {
          text-align: center;
          color: red;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .card {
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }
        .card-title {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        .card p {
          margin: 8px 0;
          font-size: 1rem;
          color: #34495e;
        }
      `}</style>
    </div>
  );
};

export default AllSponsors;
