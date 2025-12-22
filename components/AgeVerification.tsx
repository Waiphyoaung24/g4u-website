'use client';

import { useState } from 'react';

interface AgeVerificationProps {
  onVerified: () => void;
}

export default function AgeVerification({ onVerified }: AgeVerificationProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleVerify = (isOfAge: boolean) => {
    if (isOfAge) {
      setIsAnimating(true);
      setTimeout(() => {
        onVerified();
      }, 800);
    } else {
      alert('You must be 21 years or older to access this site. Please visit us when you are of legal age.');
    }
  };

  return (
    <section className={`age-verification-hero ${isAnimating ? 'fade-out' : ''}`}>
      {/* Background ornaments */}
      <div className="background-ornament">
        <div className="ornament-line ornament-line-1"></div>
        <div className="ornament-line ornament-line-2"></div>
        <div className="ornament-line ornament-line-3"></div>
        <div className="ornament-line ornament-line-4"></div>
      </div>

      {/* Corner ornaments */}
      <div className="corner-ornament corner-ornament-tl"></div>
      <div className="corner-ornament corner-ornament-tr"></div>
      <div className="corner-ornament corner-ornament-bl"></div>
      <div className="corner-ornament corner-ornament-br"></div>

      {/* Floating particles */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Blood drips */}
      <div className="blood-drip blood-drip-1"></div>
      <div className="blood-drip blood-drip-2"></div>
      <div className="blood-drip blood-drip-3"></div>

      {/* Vignette overlay */}
      <div className="vignette"></div>

      {/* Hero content */}
      <div className="hero-content">
        <p className="subtitle font-[var(--font-montserrat)]">Premium Cannabis</p>
        <div className="decorative-line"></div>
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dkk8ylzhy/image/upload/v1765793783/2_nlkxmy.png"
            alt="Grow4U Logo"
            className="age-verification-logo"
          />
        </div>
       

        {/* Age verification buttons */}
        <div className="age-verification-buttons">
          <p className="verification-question font-[var(--font-montserrat)]">
            You must be 21 or older to enter this site
          </p>
          <p className="verification-subtext font-[var(--font-montserrat)]">
            Are you 21 years of age or older?
          </p>
          <div className="button-group">
            <button
              onClick={() => handleVerify(true)}
              className="verify-button verify-yes font-[var(--font-montserrat)]"
            >
              Yes, I am 21+
            </button>
            <button
              onClick={() => handleVerify(false)}
              className="verify-button verify-no font-[var(--font-montserrat)]"
            >
              No, I am not
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
