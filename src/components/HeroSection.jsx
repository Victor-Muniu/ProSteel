import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>We always try to provide the best product for all the people who take part</h1>
      <p>Developing ourselves as a global scale, well-integrated, and environmentally friendly steel producer.</p>
      <div className="hero-image">
        <img src="https://cdn.pixabay.com/photo/2016/01/14/20/55/factory-1140760_1280.jpg" alt="Mining equipment" />
      </div>
    </section>
  );
};

export default HeroSection;