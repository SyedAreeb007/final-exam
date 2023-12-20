import React from 'react';
import image from '../assets/images/Mask group.png';
import social from '../assets/images/Social.png';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <img src={image} alt="Logo" style={logoStyle} />
      </div>
      <div style={linksContainer}>
        <a href="#" style={linkStyle}>
          Web3Makr
        </a>
        <a href="#" style={linkStyle}>
          White Paper
        </a>
        <a href="#" style={linkStyle}>
          Services
        </a>
        <a href="#" style={linkStyle}>
          Tool
        </a>
        <a href="#" style={linkStyle}>
          Contact Us
        </a>
      </div>
      <div style={copyrightStyle}>
        Copyright 2022 &copy; Web3Makr
      </div>
      <div style={socialIconsContainer}>
        <img src={social} style={socialIconStyle} />
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333', // Dark background color
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  bottom: 0,
  width: '100%',
};

const logoStyle = {
  height: '50px',
};

const linksContainer = {
  display: 'flex',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff', // White text color
  marginRight: '20px',
};

const socialIconsContainer = {
  display: 'flex',
  gap: '10px',
};

const socialIconStyle = {
  height: '30px',
};

const copyrightStyle = {
  marginLeft: 'auto', // Push to the right
  color: '#fff', // White text color
};

export default Footer;
