import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatorDashboard from "./pages/CreatorDashboard";
import SponsorDashboard from "./pages/SponsorDashboard";
import "./assets/logo.png"
import OffersCard from "./components/creator/OffersCard";
import PortfolioCard from "./components/creator/PortfolioCard";
import MilestonesCard from "./components/creator/MilestonesCard";
import HistoryCard from "./components/creator/HistoryCard";
import FeedbackCard from "./components/creator/FeedbackCard";
import ProfileCard from "./components/creator/ProfileCard";

import About from "./pages/About";
import Features from "./pages/Features";
import Profile from "./components/card/Profile";
import Post from "./components/card/Post";
import Applications from "./components/card/Applications";
import Deals from "./components/card/Deals";

import Payment from "./components/card/Payment";
import Feedback from "./components/card/Feedback";






 
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CreatorDashboard" element={<CreatorDashboard />} />
        <Route path="/SponsorDashboard" element={<SponsorDashboard />} />
        <Route path="/creator/offers" element={<OffersCard />} />
        <Route path="/creator/portfolio" element={<PortfolioCard />} />
        <Route path="/creator/milestones" element={<MilestonesCard />} />
        <Route path="/creator/history" element={<HistoryCard />} />
        <Route path="/creator/feedback" element={<FeedbackCard />} />
        <Route path="/creator/profile" element={<ProfileCard />} />
        <Route path="/sponsor/profile" element={<Profile />} />
        <Route path="/sponsor/postsponsorship" element={<Post />} />
        <Route path="/sponsor/applications" element={<Applications />} />
        <Route path="/sponsor/deals" element={<Deals />} />
        <Route path="/sponsor/payments" element={<Payment />} />
        <Route path="/sponsor/feedback" element={<Feedback />} />
      
    
     
        {/* Add more routes as needed */}
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
       


        
      </Routes>
    </Router>
  );
}

export default App;
