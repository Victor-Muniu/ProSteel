import React from 'react';
import './IntroductionSection.css';

const IntroductionSection = () => {
  return (
    <section className="induction-section">
      <h2>Becoming a Global Scale Integrated Nickel Producer, which is Environmentally Friendly</h2>
      <p>Developing oneself as a globally-scaled, well-integrated, environmentally-friendly nickel producer...</p>
      <div className="induction-cards">
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2021/08/05/07/15/men-6523361_1280.jpg" alt="Safety Induction" />
          <h3>Safety Induction</h3>
          <p>Safety induction is a process of introducing workers to potential hazards...</p>
          
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt="Company Profile" />
          <h3>Company Profile</h3>
          <p>Pro Steel is a steel mining company with a strong focus on sustainable practices...</p>
          
        </div>
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2023/09/06/18/10/ai-generated-8237708_1280.jpg" alt="Documenter" />
          <h3>Documenter</h3>
          <p>Pro Steel documentary showcases the company’s sustainable mining practices...</p>
          
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
