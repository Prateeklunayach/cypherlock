import React from 'react';

import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/home" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link to="/events" className="text-gray-600 hover:text-gray-900">Events</Link>
            <Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link>
            <Link to="/team" className="text-gray-600 hover:text-gray-900">Our Team</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact us</Link>
          </nav>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Join us!</button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">Login</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="relative">
          <img src="team.jpeg" alt="Team Photo" className="w-full h-[calc(100vh-4rem)] object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">Meet Our Team</h2>
          </div>
        </div>

        {/* Team Categories */}
        <div className="bg-purple-700 py-4">
          <div className="container mx-auto px-4 flex items-center space-x-2 overflow-x-auto">
            <button className="text-white px-4 py-2 rounded-full bg-purple-800 hover:bg-purple-900 whitespace-nowrap">View All</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800 whitespace-nowrap">Heads</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800 whitespace-nowrap">Event & Logistics</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800 whitespace-nowrap">Creative & Design</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800 whitespace-nowrap">Event Management</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800 whitespace-nowrap">Webmaster</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800 whitespace-nowrap">Anchoring</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800 whitespace-nowrap">Social Media Management</button>
            <button className="text-white px-4 py-2 rounded-full hover:bg-purple-800">›</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;
