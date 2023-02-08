import React from 'react'
import { Button} from '@chakra-ui/react'


const Hero = () => {
  return (
      <section id='home' className="container hero-sec sec--pad">
          <p className="hero-heading-sub">Hi, my name is</p>
          <h1 className="heading-sec hero-heading">Keron Williams.</h1>
      <p className="hero-heading-sub">I am a <span className="solve-problems">Email Developer </span> | <span className="solve-problems">Front-End Developer</span></p>
          <div className="hero__btns">
          <a href="#projects">
              <Button
                        className="hero__btn"
                        onClick={() => showForm()} 
                        leftIcon={<ion-icon name="briefcase"></ion-icon>}
                  bg='#82c6fb'
                  color = '#000'
                        size={['xs', 'sm', 'md']}
                        _hover={{ bg: '#ffffff30', color: '#fff'}}
              >
                  Projects
                  </Button>
            </a>
              &nbsp;&nbsp;

            <a href="#contact">
              <Button
                        className="hero__btn"
                        onClick={() => showForm()} 
                        leftIcon={<ion-icon name="person"></ion-icon>}
                        bg='#ffffff14'
                        size={['xs', 'sm', 'md']}
                        _hover={{ bg: '#ffffff30', color: '#fff'}}
              >
                  Contact
                  </Button>
            </a>
          </div>
          <div className="hero__socials">
            <div className="hero__social"><a href="https://www.linkedin.com/in/keron-williams/" target="_blank"><ion-icon class='hero-icon'  name="logo-linkedin"></ion-icon></a></div>
            <div className="hero__social"><a href="https://github.com/ikeronx" target="_blank"><ion-icon class='hero-icon' name="logo-github"></ion-icon></a></div>
            <div className="hero__social"><a href="https://codepen.io/ikeronx" target="_blank"><ion-icon class='hero-icon' name="logo-codepen"></ion-icon></a></div>
          </div>
    </section>
  )
}

export default Hero