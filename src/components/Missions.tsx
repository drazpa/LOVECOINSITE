import React from 'react';
import { Gift, Utensils, Book, Leaf } from 'lucide-react';

const missions = [
  {
    icon: Gift,
    title: "Christmas Joy Initiative",
    goal: "Feed 50+ Children",
    raised: "1.2 ETH",
    target: "2 ETH",
    deadline: "Dec 25, 2024",
    description: "Provide Christmas meals and gifts to underprivileged children in local communities.",
    progress: 60,
    image: "https://images.unsplash.com/photo-1545622783-b3e021430fee?auto=format&fit=crop&q=80&w=2000"
  },
  {
    icon: Book,
    title: "Education First",
    goal: "Support 100 Students",
    raised: "2.8 ETH",
    target: "4 ETH",
    deadline: "Aug 31, 2024",
    description: "Provide school supplies and educational resources to students in developing nations.",
    progress: 70,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000"
  },
  {
    icon: Utensils,
    title: "Community Kitchen",
    goal: "10,000 Meals",
    raised: "0.8 ETH",
    target: "2 ETH",
    deadline: "Ongoing",
    description: "Support local food banks and community kitchens in providing meals to those in need.",
    progress: 40,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2000"
  },
  {
    icon: Leaf,
    title: "Green Future",
    goal: "Plant 5000 Trees",
    raised: "1.5 ETH",
    target: "3 ETH",
    deadline: "Oct 15, 2024",
    description: "Environmental initiative to combat deforestation and promote sustainability.",
    progress: 50,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000"
  }
];

export function Missions() {
  return (
    <div className="bg-[#020B2D] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Active Missions</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Join our ongoing missions to make a real difference. Each mission represents
            a specific goal we're working towards with measurable impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 backdrop-blur-md rounded-xl overflow-hidden border border-blue-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transform transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'linear-gradient(135deg, rgba(13,46,120,0.1) 0%, rgba(9,30,80,0.1) 100%)',
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-transparent to-transparent z-10" />
                <img 
                  src={mission.image} 
                  alt={mission.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-2">
                    <mission.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-blue-900/80 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-white">{mission.goal}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{mission.title}</h3>
                <p className="text-blue-200 text-sm mb-6">
                  {mission.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-blue-200 mb-2">
                    <span>Raised: {mission.raised}</span>
                    <span>Goal: {mission.target}</span>
                  </div>
                  <div className="h-2 bg-blue-950/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-500 relative"
                      style={{ width: `${mission.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-shine" />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-blue-300">{mission.progress}% Complete</span>
                    <span className="text-blue-300">Deadline: {mission.deadline}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                  Support This Mission
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}