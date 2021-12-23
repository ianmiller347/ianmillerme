import React from 'react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="logo"
    viewBox="0 0 1000 800"
    fill="transparent"
    className="app-logo"
  >
    <polygon
      points="0,0 0,800 600,400"
      className="triangle"
      stroke="black"
      strokeWidth="4"
    />
    <polygon
      points="150,0 150,800 750,400"
      className="triangle"
      stroke="black"
      strokeWidth="4"
    />
    <polygon
      points="300,0 300,800 900,400"
      className="triangle"
      stroke="black"
      strokeWidth="4"
    />
  </svg>
);

export default Logo;
