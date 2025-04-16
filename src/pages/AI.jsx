import React from 'react';

const AIPage = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            <span className="text-blue-600">AI</span> Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Exploring artificial intelligence through personal projects and experiments.
          </p>
          <p className="mt-4 text-gray-500">
            <code className="bg-gray-100 px-2 py-1 rounded">src/pages/AI.jsx</code>
          </p>
        </div>

        {/* AI Projects Grid */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal AI Assistant</h3>
                  <p className="text-gray-600">Custom AI assistant built using OpenAI's GPT models and Python.</p>
                </div>
              </div>
              <a 
                href="https://github.com/yourusername/ai-assistant" 
                className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                View Project
              </a>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Recognition App</h3>
                  <p className="text-gray-600">Real-time object detection using TensorFlow and React Native.</p>
                </div>
              </div>
              <a 
                href="https://github.com/yourusername/image-recognition" 
                className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Experiments */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Recent Experiments</h2>
          <div className="space-y-6">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sentiment Analysis</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <p className="text-gray-600">Experimenting with different NLP models for sentiment analysis on social media data.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      BERT Implementation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Real-time Analysis
                    </li>
                  </ul>
                </div>
                <a 
                  href="https://github.com/yourusername/sentiment-analysis" 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Generative AI Art</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <p className="text-gray-600">Exploring creative applications of GANs and diffusion models.</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Style Transfer
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Image Generation
                    </li>
                  </ul>
                </div>
                <a 
                  href="https://github.com/yourusername/ai-art" 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPage; 