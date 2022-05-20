import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Developed By:</p>
      <p className='developer-1'><a href="https://github.com/Jlavarine" target='_blank'>Jacob Lavarine</a></p>
      <p className='developer-2'><a href="https://github.com/userigorgithub" target='_blank'>Igor Decess</a></p>
      <p className='school'><a href="https://turing.edu/" target='_blank'><span>While Attending: </span>Turing School of Software and Design</a></p>
    </div>
  )
}

export default Footer;
