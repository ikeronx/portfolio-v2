import React from 'react'
import {Button, IconButton,} from '@chakra-ui/react'

const Navbar = () => {
    return (
        <>
        <header id='home' className="navbar-sec"></header>
            <nav className="nav" aria-label="Main">
                <div className = 'nav__content container'>
                    <div className="nav__logo">
                    <a href="#home"><p>K/W</p></a>
                        {/* <img className="nav__globe-icon" src={globeIcon} alt="airbnb-logo" /> */}
                    </div>
                    <div className="nav__btns">
                    <a href="#projects">
                            <Button className="nav__btn"
                                    // onClick={() => showForm() } 
                                    variant="ghost"
                                    size={['xs', 'sm', 'md']}
                                    >
                                        Projects
                            </Button>
                        </a>
                        <a href="#about">
                            <Button className="nav__btn"
                                    // onClick={() => showForm() } 
                                    variant="ghost"
                                    size={['xs', 'sm', 'md']}
                                    >
                                        About
                            </Button>
                         </a>
                        <a href="#contact">
                            <Button className="nav__btn"
                                    // onClick={projectsSec}
                                    variant="ghost"
                                    size={['xs', 'sm', 'md']}
                                    >
                                        Contact
                            </Button>
                        </a>
                    </div>
                </div>
            </nav>
        <header className="navbar-sec"></header>
    </>
  )
}

export default Navbar