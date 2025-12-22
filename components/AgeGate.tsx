'use client';

import { useState, useEffect } from 'react';
import AgeVerification from './AgeVerification';

interface AgeGateProps {
  children: React.ReactNode;
}

export default function AgeGate({ children }: AgeGateProps) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already verified their age
    const verified = localStorage.getItem('ageVerified');
    setIsVerified(verified === 'true');
    setIsLoading(false);
  }, []);

  const handleVerified = () => {
    // Store verification in localStorage
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  // Show nothing while checking localStorage
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Show age verification if not verified
  if (!isVerified) {
    return <AgeVerification onVerified={handleVerified} />;
  }

  // Show actual content if verified
  return <>{children}</>;
}
