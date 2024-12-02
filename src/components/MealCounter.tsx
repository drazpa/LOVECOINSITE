import React from 'react';
import { DollarSign, Target, Users, Award } from 'lucide-react';

const monthlyGoals = [
  {
    icon: Target,
    title: 'Monthly Goal',
    current: 37500,
    target: 50000,
    percentage: 75,
    timeLeft: '12 days remaining',
    trend: '+2.3% above target'
  },
  {
    icon: Users,
    title: 'Families Supported',
    current: 8750,
    target: 10000,
    percentage: 87.5,
    timeLeft: '12 days remaining',
    trend: '+5.1% above target'
  },
  {
    icon: Award,
    title: 'Distribution Efficiency',
    current: 95,
    target: 100,
    percentage: 95,
    timeLeft: 'Ongoing',
    trend: '+2.5% improvement'
  }
];

export function MealCounter() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Impact Tracker</h2>
          <p className="text-xl text-blue-200">Real-time monitoring of our global impact</p>
        </div>
        
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-blue-800/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 text-center border border-blue-600/20 transform transition-all hover:scale-105 group shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-3 shadow-lg group-hover:from-blue-400 group-hover:to-blue-500 transition-all">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            
            <div className="mt-8">
              <div className="text-6xl font-bold text-white mb-2 tracking-tight">
                $5,000+
              </div>
              <div className="text-2xl font-semibold text-blue-200 mb-2">
                Total Money Raised
              </div>
              <div className="text-lg text-blue-300 mb-4">
                Supporting communities worldwide through blockchain technology
              </div>
              <div className="text-sm text-emerald-400 font-medium bg-emerald-500/10 py-1 px-3 rounded-full inline-block">
                +15.3% this month
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {monthlyGoals.map((goal, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-800/20 to-blue-900/20 backdrop-blur-lg rounded-2xl border border-blue-600/20 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2 mr-4">
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{goal.title}</h3>
                </div>
                
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <div className="text-3xl font-bold text-white">{goal.current.toLocaleString()}</div>
                    <div className="text-sm text-blue-300">Current</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-blue-300">{goal.target.toLocaleString()}</div>
                    <div className="text-sm text-blue-400">Target</div>
                  </div>
                </div>

                <div className="relative pt-4">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-sm text-blue-300">{goal.timeLeft}</div>
                    <div className="text-sm font-semibold text-blue-200">
                      {goal.percentage}%
                    </div>
                  </div>
                  <div className="h-3 bg-blue-900/50 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${goal.percentage}%` }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500 relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-shine" />
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-emerald-400 font-medium">
                    {goal.trend}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}