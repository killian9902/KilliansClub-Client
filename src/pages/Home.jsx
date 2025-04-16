import React from 'react';

const HomePage = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">Killian's Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A space for innovation, learning, and sharing knowledge in the world of technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rapid Development</h3>
            <p className="text-gray-600">Building modern web applications with cutting-edge technologies and best practices.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">Exploring new technologies and sharing knowledge through practical examples.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Focus</h3>
            <p className="text-gray-600">Connecting with developers and sharing experiences in the tech community.</p>
          </div>
        </div>

        {/* Latest Projects */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">A modern e-commerce solution built with React and Node.js, featuring real-time inventory management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management App</h3>
              <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates and team features.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
  