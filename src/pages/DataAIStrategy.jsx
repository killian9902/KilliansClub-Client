import React from 'react';

const DataAIStrategyPage = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            Data & <span className="text-blue-600">AI Strategy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            My approach to data architecture and AI implementation strategies.
          </p>
          <p className="mt-4 text-gray-500">
            <code className="bg-gray-100 px-2 py-1 rounded">src/pages/DataAIStrategy.jsx</code>
          </p>
        </div>

        {/* Strategy Framework Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-6">My Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="text-blue-600 text-4xl font-light">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Research</h3>
              <p className="text-gray-600">Deep analysis of data requirements and AI potential in projects.</p>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="text-blue-600 text-4xl font-light">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Design</h3>
              <p className="text-gray-600">Creating scalable architectures and implementation plans.</p>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="text-blue-600 text-4xl font-light">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Build</h3>
              <p className="text-gray-600">Implementing solutions with continuous improvement cycles.</p>
            </div>
          </div>
        </div>

        {/* Project Areas */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Project Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Architecture</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom ETL Pipeline Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Data Lake Implementation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time Analytics Systems
                </li>
              </ul>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Projects</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Predictive Analytics Models
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  NLP Applications
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Computer Vision Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAIStrategyPage; 