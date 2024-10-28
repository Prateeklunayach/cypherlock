import React from 'react';

function Navbar() {
  const handleNavClick = (item) => {
    if (item === 'Blogs') {
      window.location.href = '/';
    } else if (item === 'Home') {
      window.location.href = '/Home';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center px-8 py-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg sticky top-0">
        <div className="flex items-center">
          <img src="logo.png" alt="CypherLock Logo" className="h-8 mr-2" />
          <span className="text-white text-xl font-bold">CypherLock</span>
        </div>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Events', 'Membership', 'Blogs', 'Team', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300 transition-colors"
                onClick={(e) => {
                  if (item === 'Blogs' || item === 'Home') {
                    e.preventDefault();
                    handleNavClick(item);
                  }
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-purple-300 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
