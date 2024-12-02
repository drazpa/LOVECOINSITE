import React from 'react';
import { Target, TreePine, GraduationCap } from 'lucide-react';

const goals = [
  {
    icon: Target,
    title: '2024 Goals',
    description: 'Reach $5M in total donations and expand to 50+ countries',
    progress: 65,
  },
  {
    icon: TreePine,
    title: 'Environmental Impact',
    description: 'Plant 1 million trees and support 10 clean energy projects',
    progress: 45,
  },
  {
    icon: GraduationCap,
    title: 'Education Initiative',
    description: 'Provide 10,000 scholarships to students in developing nations',
    progress: 80,
  },
];

export function Goals() {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 inline-block mb-6">
                <goal.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{goal.title}</h3>
              <p className="text-blue-200 mb-6">{goal.description}</p>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-right">
                    <span className="text-sm font-semibold text-blue-200">
                      {goal.progress}%
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-blue-950/50 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${goal.progress}%` }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-shine" />
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