import React from 'react';

export function Story() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Story */}
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
            <h2 className="text-3xl font-bold mb-6 text-blue-100">Our Story</h2>
            <p className="text-blue-200 mb-6">
              Founded in 2023, Union Coin Charity Fund emerged from a simple yet powerful idea: 
              leveraging blockchain technology to create transparent, efficient charitable giving.
              Our mission is to bridge the gap between crypto holders and meaningful causes.
            </p>
            <p className="text-blue-200">
              Today, we're proud to support initiatives across education, healthcare, 
              and environmental conservation, making a real difference in communities worldwide.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
            <h2 className="text-3xl font-bold mb-6 text-blue-100">Our Vision</h2>
            <p className="text-blue-200 mb-6">
              We envision a world where blockchain technology revolutionizes charitable giving,
              creating a transparent and efficient ecosystem that maximizes the impact of every donation.
            </p>
            <p className="text-blue-200">
              Through innovation and collaboration, we aim to build a global community of
              crypto philanthropists committed to creating lasting positive change.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
            <h2 className="text-3xl font-bold mb-6 text-blue-100">Our Mission</h2>
            <p className="text-blue-200 mb-6">
              To harness the power of blockchain technology in creating transparent,
              efficient, and impactful charitable giving solutions that directly benefit
              communities in need.
            </p>
            <p className="text-blue-200">
              We're committed to ensuring every donation creates maximum impact
              through innovative technology and strategic partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}