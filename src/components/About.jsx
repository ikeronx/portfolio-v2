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
          <div className="about-me__tech-stack-list">
            <ul>
              <li><ion-icon name="logo-html5"></ion-icon> HTML5</li>
              <li><ion-icon name="logo-css3"></ion-icon> CSS3</li>
              <li><ion-icon name="logo-javascript"></ion-icon> JavaScript</li>
              <li><ion-icon name="logo-sass"></ion-icon> Sass</li>
            </ul>
            <ul>
              <li><ion-icon name="logo-react"></ion-icon> React</li>
              <li><ion-icon name="logo-github"></ion-icon> Git & Github</li>
              <li><ion-icon name="logo-figma"></ion-icon>  Figma</li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default About