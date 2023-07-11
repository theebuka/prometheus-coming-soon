import React, { useState } from 'react';
import CustomCursor from './customCursor.js';
// import { Canvas } from '@react-three/fiber';
import Spline from '@splinetool/react-spline';
import { ReactComponent as LogoC } from './images/logo-c.svg'; /* this is the logo to show on menu close */
import { ReactComponent as LogoL } from './images/logo-l.svg'; /* this is the logo to show on menu open */
import { ReactComponent as MenuButton } from './images/menu-button.svg'; /* this is the open menu button */
import { ReactComponent as XButton } from './images/x-button.svg'; /* this is the close menu button */
import { ReactComponent as RArrow } from './images/right-arrow-desktop.svg';


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={`fullPage${menuOpen ? ' menu-open' : ''}`}>
      <nav className='navigation'>
        <div className='logo'>
        {menuOpen ? <LogoL /> : <LogoC />}
        </div>
        <div className='menu-button' onClick={toggleMenu}>
          {menuOpen ? <XButton /> : <MenuButton />}
        </div>
      </nav>
      <div className={`menu${menuOpen ? ' active' : ''}`}>
        <div className='about'>
          Prometheus is a full service talent agency committed to bridging the gap between businesses and top-tier tech talent.
        </div>
        <ul className='menu-item'>
          <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer" disabled="true">
            <li>Home</li>
          </a>
          <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer" aria-disabled>
            <li>Services</li>
          </a>
          <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">
            <li>Team</li>
          </a>
          <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">
            <li>Careers</li>
          </a>
          <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">
            <li>Community</li>
          </a>
        </ul>
      </div>
      <div className='home'>
      <CustomCursor />
        <div className='heading-1'>
          <span className='hover-reverse-color' data-text="Curious huh?">Curious huh?</span>
          <span>Us too.</span>
        </div>
        <div className='spline-object'>
          {/* <Canvas concurrent shadowMap>
          </Canvas> */}
          <Spline scene="https://prod.spline.design/NykorNXneAMKO3Dv/scene.splinecode" />
        </div>
        <div className='heading-2'>
              <span>We're launching</span>
              <div>
                <span className='soon'>soon</span>
                <div className='newsletter'>
                    <input className='newsletter-email-input' placeholder='your email goes here'></input>
                    <button className='newsletter-submit-button'>Let me know</button>
                </div>
              </div>
          </div>
      </div>
      <footer className='contact'>
          <div className='section-title'>
            <span>Get in touch</span>
            <span><RArrow /></span>
          </div>
          <div className='social-links'>
              <a href="https://www.twitter.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.instagram.com/prometheus_HQ" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/prometheus-hq" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:hello@prometheustech.co" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
      </footer>
    </section>
  );
};

export default Home;
