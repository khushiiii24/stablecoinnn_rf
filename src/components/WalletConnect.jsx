// src/components/WalletConnect.jsx
import React, { useState } from "react";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Function to trigger the MetaMask connection process
  const handleConnect = async () => {
    if (!window.ethereum) {
      setErrorMessage("MetaMask not detected! Please install MetaMask.");
      return;
    }

    setLoading(true);
    try {
      // Trigger MetaMask's connection prompt
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      setErrorMessage("");
    } catch (error) {
      console.error("Error during wallet connection:", error);
      setErrorMessage("Connection request was rejected or failed.");
    }
    setLoading(false);
    // Close the modal after connection attempt
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        disabled={loading}
        className="text-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        {loading
          ? "Connecting..."
          : account
          ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
          : "Connect Wallet"}
      </button>
      {errorMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black w-80">
            <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>
            <p className="mb-4">
              Do you want to connect your wallet? This will trigger the MetaMask
              prompt.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConnect}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
    
export default ConnectWallet;
