/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target={'_blank'} rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target={'_blank'} rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://instagram.com" target={'_blank'} rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://facebook.com" target={'_blank'} rel="noreferrer">
        {' '}
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;