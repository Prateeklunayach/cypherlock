import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-110 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">CypherLock Club. We're here</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          At CypherLock Club, we aim to connect the right minds to achieve the best results in cybersecurity
          and blockchain. Our mission is to empower students with cutting-edge skills and insights, fostering
          collaboration and innovation in these critical fields.
        </p>
        <div className="flex justify-center mb-12">
          <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full flex items-center">
            <span className="mr-2">👋</span> Contact
          </button>
        </div>
        <div className="flex justify-between items-center">
          <img src="logo.png" alt="CypherLock Logo" className="h-24 w-auto" />
          <div>
            <p className="font-semibold mb-2">Follow Us :</p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl">𝕏</a>
              <a href="#" className="text-2xl">
                <img src="/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-2xl">
                <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
