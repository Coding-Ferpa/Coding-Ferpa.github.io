import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export default function SocialLinks() {
  const socialMedia = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/codingferpa',
      icon: faInstagram,
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/uqyVCgYUTu',
      icon: faDiscord,
    },
    {
      name: 'Github',
      url: 'https://github.com/Coding-Ferpa',
      icon: faGithub,
    },
  ];

  return (
    <div className="flex justify-center p-6 pb-20 space-x-4 sm:space-x-6">
      {socialMedia.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-main-100 transition-colors"
        >
          <FontAwesomeIcon icon={platform.icon} className="w-8 h-8 sm:w-12 sm:h-12" />
        </a>
      ))}
    </div>
  );
}
