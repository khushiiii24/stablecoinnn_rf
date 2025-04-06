import React, { useState } from "react";

// Mock user data for profile details
const user = {
  profilePicture: "https://via.placeholder.com/150?text=Profile+Pic",
  coverImage: "https://via.placeholder.com/800x300?text=Cover+Image",
  name: "Vibha",
  username: "@vibha",
  bio: "Blockchain enthusiast, tech innovator, and a passionate developer. Exploring the future of decentralized technologies.",
  socialLinks: {
    twitter: "https://x.com/vibha36822",
    linkedin: "https://www.linkedin.com/in/vibha-dawar-8a82b7325",
    github: "https://github.com/vibhadawar",
  },
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(user);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Cover Image */}
        <div className="relative">
          <img
            src={profile.coverImage}
            alt="Cover"
            className="w-full h-48 object-cover opacity-80"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-900 shadow-lg"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="text-center pt-16 pb-8 px-6">
          <h2 className="text-3xl font-bold">{profile.name}</h2>
          <p className="text-lg text-gray-400">{profile.username}</p>
          <p className="mt-4 text-gray-300">{profile.bio}</p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <a href={profile.socialLinks.twitter} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500 transition">
              Twitter
            </a>
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-600 transition">
              LinkedIn
            </a>
            <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
              GitHub
            </a>
          </div>

          {/* Edit Button */}
          <button
            className="mt-6 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
            onClick={handleEdit}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <div className="bg-gray-900 px-8 py-6 border-t border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">Edit Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Username</label>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows="4"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
