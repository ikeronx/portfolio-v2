import React from 'react'
import {Button, IconButton,} from '@chakra-ui/react'

const Navbar = () => {
    return (
        <>
        <header className="navbar-sec"></header>
            <nav className="nav" aria-label="Main">
                <div className = 'nav__content container'>
                    <div className="nav__logo">
                        <p>K/W</p>
                        {/* <img className="nav__globe-icon" src={globeIcon} alt="airbnb-logo" /> */}
                    </div>
                    <div className="nav__btns">
                            <Button className="nav__btn"
                                    // onClick={() => showForm() } 
                                    variant="ghost"
                                    size={['xs', 'sm', 'md']}
                                    >
                                        Projects
                            </Button>
                            <Button className="nav__btn"
                                    // onClick={() => showForm() } 
                                    variant="ghost"
                                    size={['xs', 'sm', 'md']}
                                    >
                                        About
                            </Button>
                            <Button className="nav__btn"
                                    // onClick={projectsSec}
                                    variant="ghost"
                                    size={['xs', 'sm', 'md']}
                                    >
                                        Contact
                            </Button>
                    </div>
                </div>
            </nav>
        <header className="navbar-sec"></header>
    </>
  )
}

export default Navbar