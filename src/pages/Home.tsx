import React from 'react';
import { Hero } from '../components/Hero';
import { Story } from '../components/Story';
import { BecomeHero } from '../components/BecomeHero';
import { Missions } from '../components/Missions';
import { Goals } from '../components/Goals';
import { DonationOptions } from '../components/DonationOptions';
import { TokenRewards } from '../components/TokenRewards';

export function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Story />
      <TokenRewards />
      <BecomeHero />
      <Missions />
      <Goals />
      <DonationOptions />
    </main>
  );
}