import React, { useState } from "react";
import { ethers } from "ethers";

const CreateSponsorship = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreate = async () => {
    if (!name || !desc || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const tx = await sponsorContract.createSponsorshipOffer(
        name,
        desc,
        ethers.utils.parseEther(amount)
      );
      await tx.wait();
      alert("Sponsorship created!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h3>Create Sponsorship</h3>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
      <input placeholder="Amount in ETH" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateSponsorship;
