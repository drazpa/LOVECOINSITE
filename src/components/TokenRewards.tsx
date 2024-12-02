import React from 'react';
import { Coins, ArrowRight, Wallet, Shield, BarChart } from 'lucide-react';

export function TokenRewards() {
  return (
    <div className="bg-[#020B2D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Earn UnionCoin Rewards</span>
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full"></div>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            For every $1 donated, receive 10,000 UnionCoin tokens. Make an impact while building your crypto portfolio.
          </p>
        </div>

        <div className="relative group">
          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
          
          <div className="relative bg-gradient-to-br from-blue-900/10 to-blue-800/10 backdrop-blur-md rounded-2xl border border-blue-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-8 mb-12 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 animate-pulse"></div>
            
            <div className="relative flex flex-col items-center gap-8">
              {/* Steps at the top */}
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-center justify-center space-x-8 text-blue-400 mb-12">
                  {[
                    { icon: Wallet, label: 'Donate' },
                    { icon: Shield, label: 'Impact' },
                    { icon: BarChart, label: 'Earn' }
                  ].map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="relative group">
                        {/* Step Glow Effect */}
                        <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex flex-col items-center bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-2xl p-6 border border-blue-500/20 transform transition-all duration-300 hover:scale-105">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 mb-4">
                            <item.icon className="w-10 h-10" />
                          </div>
                          <div className="text-lg font-semibold mt-2">{item.label}</div>
                        </div>
                      </div>
                      {index < 2 && (
                        <ArrowRight className="w-8 h-8 animate-pulse" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Description text below icons */}
                <p className="text-blue-200 text-center max-w-2xl mt-4">
                  Make a donation in your preferred cryptocurrency and automatically receive UnionCoin tokens as a reward for your generosity.
                </p>
              </div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 border border-blue-500/20 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-shine"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Instant Rewards',
              description: 'Tokens are minted and transferred to your wallet immediately after your donation is confirmed.'
            },
            {
              title: 'Multiple Networks',
              description: 'Choose your preferred network for receiving UnionCoin tokens: Ethereum, Polygon, or BSC.'
            },
            {
              title: 'Track Impact',
              description: 'Monitor your contributions and token rewards through our transparent blockchain tracking system.'
            }
          ].map((card, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-900/10 to-blue-800/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/20 transform transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-4">{card.title}</h4>
                <p className="text-blue-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="relative group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <span className="relative">Start Earning UnionCoin</span>
          </button>
          <p className="mt-4 text-blue-300 text-sm">
            All rewards are distributed automatically through smart contracts
          </p>
        </div>
      </div>
    </div>
  );
}