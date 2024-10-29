import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Blog() {
  return (
    <div className="min-h-screen bg-purple-200">
       <Navbar />

      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-6xl font-bold mb-12 mt-20">Recent Blog</h1>
    
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
function BlogPost({ id, title, content, imageUrl }) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-purple-100 rounded-lg shadow-md overflow-hidden flex items-center cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => navigate(`/blog/${id}`)}
    >
      <img src={imageUrl} alt={title} className="w-1/4 h-48 object-cover" />
      <div className="p-6 text-left flex-grow">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

function BlogList() {
  const [blogs] = useState([
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
