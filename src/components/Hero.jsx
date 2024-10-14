import React from 'react';

function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('6.jpg')",opacity:"0.9"}}>
      <section className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to CypherLock</h1>
        <p className="text-xl mb-8">To fun and beyond. Gathering Like-Minded Individuals</p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition-colors">
          Get Started
        </button>
      </section>
    </main>
  );
}

export default Hero;

