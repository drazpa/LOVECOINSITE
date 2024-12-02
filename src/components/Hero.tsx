import React from 'react';
import { Infinity } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-blue-950 text-white">
      {/* Navigation Bar */}
      <nav className="relative z-50 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Infinity className="w-8 h-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Union Coin</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-blue-100 hover:text-white transition">Home</a>
              <a href="#" className="text-blue-100 hover:text-white transition">About</a>
              <a href="#" className="text-blue-100 hover:text-white transition">Impact</a>
              <a href="#" className="text-blue-100 hover:text-white transition">Donate</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 rounded-lg text-blue-100 hover:text-white transition">
                Login
              </button>
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition">
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            {/* Welcome Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-sm border border-blue-800/50 rounded-full px-4 py-2 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
              <span className="text-sm text-blue-200">Welcome to Union Coin</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <div className="flex flex-col space-y-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Empowering Change
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
                  Through Blockchain
                </span>
              </div>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-blue-200 mb-12 max-w-2xl">
              Join us in revolutionizing charitable giving through blockchain technology. 
              Every donation creates transparent, verifiable impact in communities worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 font-semibold transition-all transform hover:scale-105">
                Start free trial
              </button>
              <button className="group px-8 py-4 rounded-lg border border-blue-700 hover:border-blue-600 text-blue-200 hover:text-white font-semibold transition-all transform hover:scale-105">
                View pricing
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden xl:block">
            <div className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 shadow-2xl w-80">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <Infinity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Impact Dashboard</h3>
                  <p className="text-sm text-blue-300">Real-time tracking</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-950/50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Total Donations</span>
                    <span className="text-white font-semibold">$5,000+</span>
                  </div>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Active Projects</span>
                    <span className="text-white font-semibold">6</span>
                  </div>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Lives Impacted</span>
                    <span className="text-white font-semibold">15,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}