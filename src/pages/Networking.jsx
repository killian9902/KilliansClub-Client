import React from 'react';

const NetworkingPage = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            <span className="text-blue-600">Networking</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Connect with like-minded professionals and explore opportunities in the tech industry.
          </p>
        </div>

        {/* Events Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Tech Meetup: Web3 Development</h3>
                  <p className="text-gray-600">Join us for an evening of networking and learning about the latest in Web3 development.</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-blue-600 font-medium">March 15, 2024</span>
                  <span className="text-gray-500">6:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">AI & Machine Learning Workshop</h3>
                  <p className="text-gray-600">Hands-on workshop exploring practical applications of AI and machine learning.</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-blue-600 font-medium">April 2, 2024</span>
                  <span className="text-gray-500">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Discord Server</h3>
              <p className="text-gray-600 mb-4">Join our active Discord community to connect with other developers, share knowledge, and collaborate on projects.</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join Discord
              </button>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">LinkedIn Group</h3>
              <p className="text-gray-600 mb-4">Connect with professionals in our LinkedIn group, share your experiences, and stay updated with industry news.</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join LinkedIn Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkingPage;
  