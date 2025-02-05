import React from 'react';
import './Socialicons.css'; // Import the CSS for styling the icons

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/company/vj-garuda-vigilance/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
          alt="LinkedIn"
          className="social-icon-img"
        />
      </a>
      <a
        href="https://www.instagram.com/vjgarudavigilance?igsh=MW9nd3hleTczY3h3YQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
          alt="Instagram"
          className="social-icon-img"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
