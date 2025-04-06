import React, { useEffect, useState } from "react";
import { getContracts } from "../utils/contractHelpers";

const ViewOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const { sponsorContract } = await getContracts();
        const total = await sponsorContract.getTotalOffers(); // You must have this in your contract
        const allOffers = [];

        for (let i = 0; i < total; i++) {
          const offer = await sponsorContract.sponsorshipOffers(i);
          allOffers.push(offer);
        }

        setOffers(allOffers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div>
      <h2>Available Sponsorship Offers</h2>
      {offers.map((offer, idx) => (
        <div key={idx} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p><strong>Name:</strong> {offer.name}</p>
          <p><strong>Description:</strong> {offer.description}</p>
          <p><strong>Amount:</strong> {offer.amount && offer.amount.toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewOffers;
