import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const stats = [
  {
    icon: Target,
    value: '$2.5M+',
    label: 'Raised in Crypto',
  },
  {
    icon: Users,
    value: '15,000+',
    label: 'Lives Impacted',
  },
  {
    icon: Globe,
    value: '25+',
    label: 'Countries Reached',
  },
];

export function Impact() {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-100">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-blue-900/50 backdrop-blur-sm border border-blue-800/50">
              <stat.icon className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}