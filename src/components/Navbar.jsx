import React, { useState, useRef, useEffect } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { links } from '../data/navLinks'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);
    return (
    <header className=" navbar-sec">
    <nav className='nav container'>
          <div className='nav-header'>
            <p>&nbsp;</p>
        <button className='nav-toggle' onClick={toggleLinks}>
          <HamburgerIcon  />
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
    </div>
            </nav>
            </header>
  )
}

export default Navbar