import React, { useState } from 'react';
import { Heart, Mail, MapPin, User } from 'lucide-react';

export function BecomeHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-24 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-100">Become a Hero</h2>
          <p className="text-xl text-blue-200">
            Join our network of dedicated individuals making a difference in their communities.
            Sign up today to start your journey as a Union Coin Hero.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-200 mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-blue-950/50 border border-blue-700/30 rounded-lg py-3 px-10 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-blue-200 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-blue-950/50 border border-blue-700/30 rounded-lg py-3 px-10 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-blue-200 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-blue-950/50 border border-blue-700/30 rounded-lg py-3 px-10 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your location"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" />
              <span>Become a Hero</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}