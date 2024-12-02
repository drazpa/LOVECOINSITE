import React, { useState } from 'react';
import { Heart, Coins, Wallet, Award, Globe, Shield, Star, DollarSign } from 'lucide-react';

const networks = [
  {
    name: 'BASE',
    token: 'ETH',
    minAmount: 0.01,
    maxAmount: 1000,
    icon: '/eth-logo.svg',
    disabled: true
  },
  {
    name: 'BASE',
    token: 'WETH',
    minAmount: 0.01,
    maxAmount: 1000,
    icon: '/weth-logo.svg',
    disabled: true
  },
  {
    name: 'BASE',
    token: 'USDC',
    minAmount: 10,
    maxAmount: 100000,
    icon: '/usdc-logo.svg',
    disabled: true
  },
  {
    name: 'POLYGON',
    token: 'MATIC',
    minAmount: 0.01,
    maxAmount: 1000,
    icon: '/matic-logo.svg',
    disabled: true
  },
  {
    name: 'POLYGON',
    token: 'WMATIC',
    minAmount: 0.01,
    maxAmount: 1000,
    icon: '/wmatic-logo.svg',
    disabled: true
  },
  {
    name: 'POLYGON',
    token: 'USDC',
    minAmount: 10,
    maxAmount: 100000,
    icon: '/usdc-logo.svg',
    disabled: true
  },
  {
    name: 'XRPL',
    token: 'XRP',
    minAmount: 0.01,
    maxAmount: 1000,
    icon: '/xrp-logo.svg',
    disabled: false
  },
  {
    name: 'XRPL',
    token: 'UNIONCOIN',
    minAmount: 0.01,
    maxAmount: 1000,
    icon: '/union-logo.svg',
    disabled: false
  }
];

export function DonationOptions() {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[6]); // Default to XRP
  const [amount, setAmount] = useState('0.01');

  const getUnionCoinEstimate = (amount: string, token: string) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return 0;

    // Convert amount to USD equivalent for UNION token calculation
    let usdEquivalent = numAmount;
    if (token !== 'USDC') {
      // Mock conversion rates - in production these would come from an oracle
      const rates: { [key: string]: number } = {
        ETH: 2000,
        WETH: 2000,
        MATIC: 0.8,
        WMATIC: 0.8,
        XRP: 0.5,
        UNIONCOIN: 0.1
      };
      usdEquivalent = numAmount * (rates[token] || 1);
    }

    return usdEquivalent * 10000;
  };

  return (
    <div className="bg-[#020B2D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
            <span className="relative z-10">Make Your Impact</span>
            <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full"></div>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Choose your preferred network and token to make a donation. For every $1 equivalent,
            receive 10,000 UnionCoin tokens as a reward.
          </p>
        </div>

        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
          
          <div className="relative bg-gradient-to-br from-blue-900/10 to-blue-800/10 backdrop-blur-md rounded-2xl border border-blue-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-8 overflow-hidden">
            {/* Network Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {networks.map((network) => (
                <button
                  key={`${network.name}-${network.token}`}
                  onClick={() => {
                    if (!network.disabled) {
                      setSelectedNetwork(network);
                      setAmount(network.minAmount.toString());
                    }
                  }}
                  disabled={network.disabled}
                  className={`relative group p-4 rounded-xl border transition-all duration-300 
                    ${network.disabled 
                      ? 'opacity-50 cursor-not-allowed border-blue-700/30 bg-blue-900/10' 
                      : selectedNetwork === network 
                        ? 'border-blue-500 bg-blue-900/30 hover:scale-105' 
                        : 'border-blue-700/30 hover:border-blue-600/50 hover:scale-105'}`}
                >
                  <div className="text-center">
                    <div className="font-bold text-white mb-1">{network.token}</div>
                    <div className="text-sm text-blue-300">{network.name}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Amount Input */}
            <div className="mb-8">
              <label className="block text-blue-200 mb-2">Amount ({selectedNetwork.token})</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min={selectedNetwork.minAmount}
                  max={selectedNetwork.maxAmount}
                  step={selectedNetwork.token === 'USDC' ? '1' : '0.01'}
                  className="w-full bg-blue-950/50 border border-blue-700/30 rounded-lg py-3 px-4 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400">
                  {selectedNetwork.token}
                </div>
              </div>
              <div className="mt-2 text-sm text-blue-300">
                Min: {selectedNetwork.minAmount} {selectedNetwork.token} | 
                Max: {selectedNetwork.maxAmount} {selectedNetwork.token}
              </div>
            </div>

            {/* UnionCoin Reward Estimate */}
            <div className="bg-blue-900/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-200">Estimated UnionCoin Reward</div>
                <div className="text-2xl font-bold text-white">
                  {getUnionCoinEstimate(amount, selectedNetwork.token).toLocaleString()} UNION
                </div>
              </div>
              <div className="text-sm text-blue-300">
                Rate: 1 USD ≈ 10,000 UNION
              </div>
            </div>

            {/* Donate Button */}
            <button className="w-full relative group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <span className="relative flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Donate {amount} {selectedNetwork.token}
              </span>
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-blue-300 text-sm">
            All donations are processed securely through smart contracts.
            UnionCoin rewards are distributed automatically upon confirmation.
          </p>
        </div>
      </div>
    </div>
  );
}