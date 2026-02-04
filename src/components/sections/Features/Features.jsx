import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      number: '01',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Visa Support',
      description: 'Our team is composed of highly qualified and compassionate professionals with years of hands-on experience.',
    },
    {
      number: '02',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Expert Team',
      description: 'We invest in the latest technology and ensure every procedure is faster, safer, and more comfortable.',
    },
    {
      number: '03',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15.5l2 2 4-4" />
        </svg>
      ),
      title: 'Verified Job Opportunities',
      description: 'We connect you with genuine, verified employers and roles that match your skills and experience.',
    },

    {
      number: '04',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15.5l2 2 4-4" />
        </svg>
      ),
      title: '98% Success',
      description: 'We understand that visiting the expert can be stressful; our clinic is designed with your comfort in mind.',
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <div className="header-left">
            <span className="sub-heading-white">OUR FEATURES</span>
          </div>
          <div className="header-content">
            <h2 className="features-main-title">
              From Initial Consultation To<br />
              Successful Approval — We're<br />
              With You <span className="italic-text">Every Step.</span>
            </h2>
            <p className="features-top-desc">
              Our practice has been recently refurbished with cutting edge equipment in a
              refreshed and contemporary space. The practice has been transformed but it
              retains its friendly, family-focused and professional service.
            </p>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-modern">
              <div className="card-top">
                <span className="feature-number">{feature.number}</span>
                <div className="feature-text-content">
                  <h3 className="feature-title-white">{feature.title}</h3>
                  <p className="feature-desc-white">{feature.description}</p>
                </div>
              </div>
              <div className="feature-icon-bottom">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
