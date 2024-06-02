import React from 'react';
import './Logo.scss';
import LogoImg from './../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <a href="/" className="logo">
      <img src={LogoImg} alt="Logo" />
    </a>
  );
};

export default Logo;