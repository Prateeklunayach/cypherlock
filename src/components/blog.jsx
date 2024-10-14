import { useState } from 'react'

function Blog() {
  return (
    <div className="min-h-screen bg-purple-200">
      <header className="sticky top-0 container mx-auto px-4 py-6 flex justify-between items-center shadow-lg rounded-2xl bg-purple-200">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-800">Home</a>
          <a href="#" className="text-gray-800">About Us</a>
          <a href="#" className="text-gray-800">Events</a>
          <a href="#" className="text-gray-800">Blogs</a>
          <a href="#" className="text-gray-800">Our Team</a>
          <a href="#" className="text-gray-800">Contact us</a>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full">Join us!</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full">Login</button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-6xl font-bold mb-8">Recent Blog</h1>
    
        <p className="text-xl mb-10 max-w-7xl mx-auto">
          Get the latest updates and dive deeper into cybersecurity and blockchain knowledge with CypherLock Club. Stay
          informed on the newest trends, techniques, and innovations in the field
        </p>

        <img src='2.png' alt='blog' className='w-full h-96 object-cover rounded-lg mb-9'/>
        <p className="text-2xl font-semibold max-w-7xl mx-auto mb-12">
          Collaboration to Develop Cybersecurity and Blockchain Expertise. Join forces with
          CypherLock Club to enhance skills, share knowledge, and drive innovation in the
          growing fields of cybersecurity and blockchain.
        </p>

        <BlogList />
      </main>

      <Footer />
    </div>
  )
}

export default Blog

// New code added below
function BlogPost({ title, content, imageUrl }) {
  return (
    <div className="bg-purple-100 rounded-lg shadow-md overflow-hidden flex items-center">
      <img src={imageUrl} alt={title} className="w-1/4 h-48 object-cover" />
      <div className="p-6 text-left flex-grow">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

function BlogList() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of Cybersecurity: Emerging Threats and Technologies",
      content: "4 Min • August 19, 2022",
      imageUrl: "1.png"
    },
    {
      id: 2,
      title: "Building a Resilient Cyber Defense: Strategies for Organization",
      content: "4 Min • August 19, 2022",
      imageUrl: "2.png"
    },
    {
      id: 3,
      title: "Cryptography and Blockchain: Securing Data in a Decentralized World",
      content: "4 Min • August 19, 2022",
      imageUrl: "3.png"
    },
    {
      id: 4,
      title: "The Intersection of Artificial Intelligence, Blockchain, and Cybersecurity",
      content: "4 Min • August 19, 2022",
      imageUrl: "4.png"
    },
    {
      id: 5,
      title: "Blockchain's Role in Mitigating Ransomware Attacks",
      content: "4 Min • August 19, 2022",
      imageUrl: "5.png"
    },
    // Add more blog posts as needed
  ])

  return (
    <div className="grid grid-cols-1 gap-6">
      {blogs.map(blog => (
        <BlogPost key={blog.id} {...blog} />
      ))}
       <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full mx-auto mt-6">
        Load More
      </button>
    </div>
    
  )
}

function Footer() {
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
  )
}
