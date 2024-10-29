import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';



const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogDetails = {
    1: {
      title: "The Future of Cybersecurity: Emerging Threats and Technologies",
      date: "August 19, 2022",
      readTime: "4 Min",
      author: "Dr. Sarah Chen",
      authorRole: "Chief Security Researcher",
      authorImage: "author1.jpg",
      imageUrl: "/1.png",
      category: "Cybersecurity",
      tags: ["AI Security", "Machine Learning", "Threat Detection"],
      content: `
        <h2>Introduction to Modern Cybersecurity Landscape</h2>
        <p>As we venture deeper into the digital age, the cybersecurity landscape continues to evolve at an unprecedented pace. Organizations face increasingly sophisticated threats while trying to protect ever-expanding digital footprints. This article explores the cutting-edge developments in cybersecurity and what the future holds for this critical field.</p>

        <h2>Emerging Cyber Threats in 2024</h2>
        <p>The threat landscape has grown significantly more complex with the emergence of:</p>
        <ul>
          <li>AI-powered cyber attacks that can adapt and evolve in real-time</li>
          <li>Quantum computing threats to traditional encryption methods</li>
          <li>Advanced persistent threats (APTs) targeting critical infrastructure</li>
          <li>Supply chain attacks affecting multiple organizations simultaneously</li>
        </ul>

        <h2>Revolutionary Defense Technologies</h2>
        <p>To combat these evolving threats, cybersecurity professionals are leveraging:</p>
        <ul>
          <li>Artificial Intelligence and Machine Learning for threat detection</li>
          <li>Blockchain-based security solutions</li>
          <li>Zero-trust architecture implementation</li>
          <li>Quantum-resistant encryption methods</li>
        </ul>

        <h2>The Role of Human Expertise</h2>
        <p>While technology plays a crucial role, human expertise remains irreplaceable. Security professionals must:</p>
        <ul>
          <li>Develop adaptive thinking skills</li>
          <li>Maintain continuous learning practices</li>
          <li>Foster collaboration across security teams</li>
          <li>Balance security with usability</li>
        </ul>
      `
    },
    2: {
      title: "Blockchain Security Best Practices",
      date: "September 15, 2022",
      readTime: "5 Min",
      author: "Dr. Sarah Chen",
      authorRole: "Chief Security Researcher",
      authorImage: "author1.jpg",
      imageUrl: "/2.png",
      category: "Blockchain",
      tags: ["Blockchain", "Security", "Best Practices"],
      content: `
        <h2>Introduction to Blockchain Security</h2>
        <p>Blockchain technology has revolutionized the way we understand and implement security. This article explores the best practices for securing blockchain applications.</p>
      `
    },
    // Add more blog details as needed
  };

  const blog = blogDetails[id];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-purple-200">
      <Navbar img={cypherLockLogo} />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-purple-800 hover:text-purple-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blogs
        </button>

        <article className="bg-purple-100 rounded-2xl shadow-xl overflow-hidden">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8 lg:p-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-300 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              {blog.tags.map(tag => (
                <span key={tag} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-6 text-purple-900">
              {blog.title}
            </h1>

            <div className="flex items-center mb-8 space-x-4">
              <img 
                src={blog.authorImage} 
                alt={blog.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-300"
              />
              <div>
                <h3 className="font-medium text-purple-900">{blog.author}</h3>
                <p className="text-purple-700">{blog.authorRole}</p>
              </div>
              <div className="text-purple-600 text-sm">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>{blog.readTime} read</span>
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none prose-purple prose-headings:text-purple-900 prose-p:text-purple-800 prose-li:text-purple-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-12 pt-8 border-t border-purple-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-purple-700 hover:text-purple-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-2 text-purple-700 hover:text-purple-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
                <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Blockchain Security Best Practices</h3>
              <p className="text-purple-700">Essential guidelines for securing blockchain applications...</p>
            </div>
            <div className="bg-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-2">AI in Cybersecurity</h3>
              <p className="text-purple-700">How artificial intelligence is transforming security...</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
