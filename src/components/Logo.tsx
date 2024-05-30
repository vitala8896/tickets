import React from 'react';
import './Logo.scss';

const Logo: React.FC = () => {
  return (
    <a href="/" className="logo">
      <img src="/assets/logo.png" alt="Company Logo" />
    </a>
  );
};

export default Logo;
