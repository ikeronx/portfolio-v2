import React from 'react'
import { Button,} from '@chakra-ui/react'
import { EmailIcon,  } from '@chakra-ui/icons'


const Contact = () => {
  return (
    <section id="contact" className="container contact-sec sec--pad">
      <h2 className="heading-sec contact-heading">Get In Touch</h2>
      <div className="contact__btns">
        <a href="mailto:ikeronw@gmail.com" target="_blank">
          <Button
            className="contact__btn"
            onClick={() => showForm()}
            leftIcon={<EmailIcon />}
            bg="#ffffff14"
            size={["xs", "sm", "md"]}
            _hover={{ bg: "#ffffff30", color: "#fff" }}
          >
            Email
          </Button>
        </a>
        &nbsp;
        <a href="https://www.linkedin.com/in/keron-williams/" target="_blank">
          <Button
            className="contact__btn"
            onClick={() => showForm()}
            leftIcon={<ion-icon name="logo-linkedin"></ion-icon>}
            bg="#ffffff14"
            size={["xs", "sm", "md"]}
            _hover={{ bg: "#ffffff30", color: "#fff" }}
          >
            LinkedIn
          </Button>
        </a>
        &nbsp;
        <a href="https://github.com/ikeronx" target="_blank">
          <Button
            className="contact__btn"
            onClick={() => showForm()}
            leftIcon={<ion-icon name="logo-github"></ion-icon>}
            bg="#ffffff14"
            size={["xs", "sm", "md"]}
            _hover={{ bg: "#ffffff30", color: "#fff" }}
          >
            Github
          </Button>
        </a>
      </div>
      <div className="contact__para">
        <p>{` © ${new Date().getFullYear()} All Rights Reserved.`}</p>
        <p>Built with React & Chakra UI by: Keron Williams</p>
      </div>
    </section>
  );
}

export default Contact