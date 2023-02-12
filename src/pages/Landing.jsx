import React from 'react';

import Hero from '../components/Hero';
import LandingLayout from '../components/layouts/Landinglayout';
import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <LandingLayout>
        <Hero
          title='Go CashLess with Virtual Wallet'
          subtitle='Your Everyday Essential For Making Payment'
          image='https://source.unsplash.com/collection/404339/800x600'
          ctaText='Create Your Account Now'
          ctaLink='/register'
        />
      </LandingLayout>
    </div>
  );
}
