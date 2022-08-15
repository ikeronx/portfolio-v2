import React from 'react'
import { Button, IconButton,} from '@chakra-ui/react'
import { EmailIcon,  } from '@chakra-ui/icons'


const Contact = () => {
  return (
    <section className="container contact-sec heading-sec sec--pad">
        <h2 className="heading-sec contact-heading">Get In Touch</h2>
        <div className="contact__btns">
              <Button
                        className="contact__btn"
                        onClick={() => showForm()} 
                        leftIcon={<EmailIcon/>}
                        bg='#ffffff14'
                        size={['xs', 'sm', 'md']}
                        _hover={{ bg: '#ffffff30', color: '#fff'}}
              >
                  Email
              </Button>
              &nbsp;
              <Button
                        className="contact__btn"
                        onClick={() => showForm()} 
                        leftIcon={<ion-icon name="logo-linkedin"></ion-icon>}
                        bg='#ffffff14'
                        size={['xs', 'sm', 'md']}
                        _hover={{ bg: '#ffffff30', color: '#fff'}}
              >
                  LinkedIn
                </Button>
              &nbsp;
              <Button
                        className="contact__btn"
                        onClick={() => showForm()} 
                        leftIcon={<ion-icon name="logo-github"></ion-icon>}
                        bg='#ffffff14'
                        size={['xs', 'sm', 'md']}
                        _hover={{ bg: '#ffffff30', color: '#fff'}}
              >
                  Github
                </Button>
          </div>
          <div className="contact__para">
            <p>Designed & Created by Keron Williams, 2022</p>
            <p>Built with React & Chakra.</p>
        </div>
    </section>
  )
}

export default Contact