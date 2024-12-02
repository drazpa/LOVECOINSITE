import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

interface DonationPoint {
  lat: number;
  lng: number;
  name: string;
  amount: string;
  impact: string;
  size: number;
  color: string;
  altitude: number;
}

const IMPACT_POINTS: DonationPoint[] = [
  {
    lat: 14.5995,
    lng: 120.9842,
    name: "Manila Education Center",
    amount: "2.5 ETH",
    impact: "Supporting 200 students",
    size: 1.2,
    color: '#22c55e',
    altitude: 0.1
  },
  {
    lat: 10.3157,
    lng: 123.8854,
    name: "Cebu Healthcare Initiative",
    amount: "1.8 ETH",
    impact: "Medical supplies for 500 families",
    size: 1.2,
    color: '#3b82f6',
    altitude: 0.1
  },
  {
    lat: 7.0707,
    lng: 125.6127,
    name: "Davao Community Support",
    amount: "1.2 ETH",
    impact: "Food security program",
    size: 1.2,
    color: '#ec4899',
    altitude: 0.1
  },
  {
    lat: 16.4023,
    lng: 120.5960,
    name: "Baguio Youth Program",
    amount: "0.9 ETH",
    impact: "Youth development initiatives",
    size: 1.2,
    color: '#f59e0b',
    altitude: 0.1
  },
  {
    lat: 13.4125,
    lng: 121.1830,
    name: "Batangas Relief Center",
    amount: "1.5 ETH",
    impact: "Emergency response support",
    size: 1.2,
    color: '#8b5cf6',
    altitude: 0.1
  }
];

export function DonationMap() {
  const globeRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector('.globe-container');
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: Math.min(700, window.innerHeight * 0.7)
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      
      // Initial position focusing on Philippines
      globe.pointOfView({
        lat: 12.879721,
        lng: 121.774017,
        altitude: 2
      }, 2000);

      // Configure controls
      const controls = globe.controls();
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.enableRotate = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.minDistance = 200;
      controls.maxDistance = 800;
      controls.dampingFactor = 0.1;
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Global Impact Map</h2>
        <div className="globe-container relative rounded-xl overflow-hidden shadow-2xl bg-blue-950">
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            pointsData={IMPACT_POINTS}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointAltitude="altitude"
            pointRadius="size"
            pointsMerge={false}
            pointResolution={3}
            pointLabel={(point: DonationPoint) => `
              <div class="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div class="font-bold text-lg">${point.name}</div>
                <div class="text-blue-600 font-semibold">${point.amount}</div>
                <div class="text-gray-600">${point.impact}</div>
              </div>
            `}
            atmosphereColor="#4299e1"
            atmosphereAltitude={0.1}
            ringsData={IMPACT_POINTS}
            ringLat="lat"
            ringLng="lng"
            ringAltitude={0}
            ringColor="color"
            ringMaxRadius={2}
            ringPropagationSpeed={3}
            ringRepeatPeriod={1000}
            hexPolygonsData={[]}
            hexPolygonResolution={3}
            hexPolygonMargin={0.7}
            hexPolygonColor={() => 'rgba(255, 255, 255, 0.1)'}
          />
        </div>
        <div className="mt-8 text-center text-white/80">
          <p>Interactive 3D visualization of our impact across the Philippines</p>
        </div>
      </div>
    </div>
  );
}