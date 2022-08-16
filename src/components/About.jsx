import React from 'react'

const About = () => {
  return (
    <section id='about' className="container sec--pad">
      <h2 className="heading-sec">About Me</h2>
      <div  className="about-me__box">
        <div>
          <h3  className="about-me__subtitle">Bio</h3>
          <p>I'm a Self-Taught Front-End Developer/Freelancer who builds quality responsive websites and rich interactive web applications that <span className="solve-problems">solve problems</span>.</p>
          <p>I'm always striving to learn and develop new skills to be a better developer by indulging myself in project building, thus sharpening my problem-solving skills to apply in real-life situations for quick and optimized solutions.</p>
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
                 <span style={{paddingLeft: "1.4rem"}}><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank"><ion-icon name="logo-javascript"></ion-icon></a></span>
                <p>JavaScript</p>
            </div>
            <div className="sass-box">
                <span style={{paddingLeft: "0.2rem"}}><a href="https://sass-lang.com/" target="_blank"><ion-icon name="logo-sass"></ion-icon></a></span>
                <p>Sass</p>
            </div>
            <div>
            <span style={{paddingLeft: "0.2rem"}}><a href="https://reactjs.org/" target="_blank"><ion-icon ion-icon name="logo-react"></ion-icon></a></span>
                <p>React</p>
            </div>
            <div className="end-box">
                <span style={{paddingLeft: "1.5rem"}}><a href="https://git-scm.com/" target="_blank"><ion-icon name="logo-github"></ion-icon></a></span>
                <p>Git & Github</p>
            </div>
            <div>
                <span style={{paddingLeft: "0.5rem"}}><a href="https://www.figma.com/" target="_blank"><ion-icon name="logo-figma"></ion-icon></a></span>
                <p>Figma</p>
            </div>
            <div  className="markdown-box">
                <span style={{paddingLeft: "1.3rem"}}><a href="https://www.markdownguide.org/" target="_blank"><ion-icon name="logo-markdown"></ion-icon></a></span>
                <p>Markdown</p>
            </div>
            <div className="netlify-box end-box">
              <span style={{paddingLeft: "0.3rem"}}><a href="https://www.netlify.com/" target="_blank"><img className="netlify-img" src="https://www.svgrepo.com/show/354110/netlify.svg" alt="img of Netlify icon" /></a></span>
                <p>Netlify</p>
            </div>

            {/* <ul>
              <li><ion-icon name="logo-html5"></ion-icon> HTML5</li>
              <li><ion-icon name="logo-css3"></ion-icon> CSS3</li>
              <li><ion-icon name="logo-javascript"></ion-icon> JavaScript</li>
              <li><ion-icon name="logo-sass"></ion-icon> Sass</li>
            </ul>
            <ul>
              <li><ion-icon name="logo-react"></ion-icon> React</li>
              <li><ion-icon name="logo-github"></ion-icon> Git & Github</li>
              <li><ion-icon name="logo-figma"></ion-icon>  Figma</li>
            </ul> */}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About