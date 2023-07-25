import React from 'react';
import './style.scss';
import { FaArrowDown, FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <nav className="footer">
      <div className="nextPage">
        <FaArrowDown className="downArrow" />
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </nav>
  );
}

export default Footer;
