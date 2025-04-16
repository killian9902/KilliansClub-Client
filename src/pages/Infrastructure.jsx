import React from 'react';

const InfrastructurePage = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6">
            <span className="text-blue-600">Infrastructure</span> Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Exploring and implementing modern infrastructure solutions through personal projects.
          </p>
          <p className="mt-4 text-gray-500">
            <code className="bg-gray-100 px-2 py-1 rounded">src/pages/Infrastructure.jsx</code>
          </p>
        </div>

        {/* Personal Projects Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Featured Projects</h2>
          <div className="space-y-6">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Infrastructure Automation</h3>
                  <p className="text-gray-600">Personal project implementing infrastructure as code using Terraform and AWS.</p>
                </div>
                <div className="flex items-center text-blue-600">
                  <a href="https://github.com/yourusername/project" className="font-medium hover:underline">View Project →</a>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">DevOps Pipeline Setup</h3>
                  <p className="text-gray-600">Custom CI/CD pipeline implementation using GitHub Actions and Docker.</p>
                </div>
                <div className="flex items-center text-blue-600">
                  <a href="https://github.com/yourusername/project" className="font-medium hover:underline">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Technologies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AWS Cloud Architecture
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Terraform & Infrastructure as Code
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kubernetes & Container Orchestration
                </li>
              </ul>
            </div>
            <div className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">DevOps Practices</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  CI/CD Pipeline Design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Docker & Containerization
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monitoring & Observability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructurePage; 