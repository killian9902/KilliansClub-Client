import React from 'react';

const WelcomePage = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">Killian's Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Exploring technology, infrastructure, and AI solutions through personal projects and insights.
          </p>
          <p className="mt-4 text-gray-500">
            <code className="bg-gray-100 px-2 py-1 rounded">src/pages/Welcome.jsx</code>
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-6">About Me</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Welcome to my personal space where I share my journey and expertise in technology. 
              I specialize in infrastructure development, AI implementation, and data strategy.
            </p>
            <p>
              Through this platform, I aim to showcase my projects, share insights, and connect with 
              like-minded professionals in the tech industry.
            </p>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Latest Projects</h2>
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800">Infrastructure Automation</h3>
                <p className="text-gray-600 mt-2">Custom solutions for cloud infrastructure and DevOps workflows.</p>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800">AI Integration</h3>
                <p className="text-gray-600 mt-2">Implementing AI solutions in real-world applications.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800">Infrastructure</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Cloud Architecture</li>
                  <li>DevOps</li>
                  <li>Automation</li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800">AI & Data</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Machine Learning</li>
                  <li>Data Strategy</li>
                  <li>AI Implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage; 