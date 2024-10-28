import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const events = [
    { id: 1, title: "Hackathon 2023", image: "event1.jpg" },
    { id: 2, title: "Tech Workshop", image: "event2.jpg" },
    { id: 3, title: "AI Conference", image: "event3.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('6.jpg')", opacity: "0.9"}}>
        <section className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to CypherLock</h1>
          <p className="text-xl mb-8">To fun and beyond. Gathering Like-Minded Individuals</p>
          <button className="bg-purple-300 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-300 transition-colors">
            Get Started
          </button>
        </section>
      </main>

      <section className="py-16 px-4 bg-white-300 ">
        <div className="bg-purple-300 text-black rounded-lg shadow-lg max-w-4xl mx-auto p-8">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center mb-12">
            The CypherLock Club, led by Secretary Siddhant, was created to discover and nurture talent within the
            university. We're a community of tech enthusiasts focused on innovation and problem-solving. Through
            hackathons and workshops, we provide students with opportunities to showcase their
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Events</h2>
          <Slider {...settings}>
            {events.map((event) => (
              <div key={event.id} className="px-2">
                <div className="bg-purple-300 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                  <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <button className="bg-white text-purple-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-300 transition-colors">
                      Event Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-16 px-4 bg-white-300">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-purple-300 rounded-lg p-8 h-full">
              <h3 className="text-3xl font-bold text-black mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-black">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +91 9501443398
                </p>
                <p className="flex items-center text-black">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  cypherlockclub@gmail.com
                </p>
                <p className="flex items-center text-black">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Information Security Specialisation,<br />AIT-CSE, Chandigarh Univeristy
                </p>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-black hover:text-gray-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-black hover:text-gray-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="text-black hover:text-gray-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Have a Question?<br />Drop it here.</h3>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="mb-4">
                  <input type="text" placeholder="Subject" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="mb-6">
                  <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
                </div>
                <button type="submit" className="w-full bg-purple-300 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;