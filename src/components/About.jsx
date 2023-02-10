import React from 'react'

const About = () => {
  return (
    <section id='about' className="container about-sec sec--pad">
      <h2 className="heading-sec">About Me</h2>
      <div  className="about-me__box">
        <div className="about-me__box--one" >
          <h3  className="about-me__subtitle">Bio</h3>
          <p>I'm a Developer who builds quality emails, responsive websites and rich interactive web applications that <span className="solve-problems">solve problems</span>.</p>
          <p style={{ marginTop: "0.7rem" }}>I continuously strive to improve as a developer by constantly learning and acquiring new skills through hands-on projects. This sharpens my problem-solving abilities and helps me provide efficient solutions to real-life challenges.</p>
        </div>
        <div>
          <h3 className="about-me__subtitle">My Tech Stack</h3>
          <div className="about__techstack">
            <div>
            <span style={{paddingLeft: "0.7rem"}}><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank"><ion-icon name="logo-html5"></ion-icon></a></span>
              
                <p>HTML5</p>
            </div>
            <div>
            <span style={{paddingLeft: "0.2rem"}}><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank"><ion-icon name="logo-css3"></ion-icon></a></span>
                <p>CSS3</p>
            </div>
            <div className="end-box">
                <span style={{marginLeft: "2.3rem"}}><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank"><ion-icon name="logo-javascript"></ion-icon></a></span>
              <p style={{ marginLeft: "1rem" }}>JavaScript</p>
            </div>
            {/* <div className="sass-box">
                <span style={{paddingLeft: "0.2rem"}}><a href="https://sass-lang.com/" target="_blank"><ion-icon name="logo-sass"></ion-icon></a></span>
                <p>Sass</p>
            </div> */}
            <div>
            <span style={{marginLeft: "0.7rem"}}><a href="https://reactjs.org/" target="_blank"><ion-icon ion-icon name="logo-react"></ion-icon></a></span>
              <p style={{ marginLeft: "0.3rem" }}>React</p>
            </div>
            <div className="end-box">
                <span style={{marginLeft: "2.2rem"}}><a href="https://git-scm.com/" target="_blank"><ion-icon name="logo-github"></ion-icon></a></span>
              <p style={{ marginLeft: "0.5rem" }}>Git & Github</p>
            </div>
            <div>
              <span style={{ marginLeft: "0.3rem" }}><a href="https://www.figma.com/" target="_blank"><ion-icon name="logo-figma"></ion-icon></a></span>
                <p>Figma</p>
            </div>
            {/* <div  className="markdown-box">
                <span style={{paddingLeft: "1.3rem"}}><a href="https://www.markdownguide.org/" target="_blank"><ion-icon name="logo-markdown"></ion-icon></a></span>
                <p>Markdown</p>
            </div> */}
            
            <div className="netlify-box end-box">
              <span style={{ marginLeft: "0.6rem" }}><a href="https://www.netlify.com/" target="_blank"><img className="mailchimp-img icon--clr" src="https://www.svgrepo.com/show/473706/mailchimp.svg" alt="img of Netlify icon" /></a></span>
              <p style={{ marginLeft: "0.7rem" }}>MailChimp</p>
            </div>
            <div className="netlify-box">
              <span style={{ paddingLeft: "0.9rem" }}><a href="https://www.netlify.com/" target="_blank"><img className="netlify-img icon--clr" src="https://www.svgrepo.com/show/342014/marketo.svg" alt="img of Netlify icon" /></a></span>
              <p style={{ marginLeft: "0.3rem" }}>Marketo</p>
            </div>
            <div className="netlify-box end-box">
              <span style={{ marginLeft: "01.5rem" }}><a href="https://www.netlify.com/" target="_blank"><img className="email-on-acid-img icon--clr" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_ff5640f6cfcf6fc15a0d929dae2f2f37/email-on-acid.png" alt="img of Netlify icon" /></a></span>
              <p>Email On Acid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About