import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am a robotics engineer studying at Olin College of Engineering
              just outside of Boston. I have a passion for making robots move,
              seeing robots do weird things, and making people happy with
              coffee.
            </p>
            <p className="about__description">
              Alongside my selection of projects below, I pass my time shooting
              and producing short films.
            </p>
            <a
              href="resume/resume.pdf"
              className="btn"
              download="julian-shah-resume.pdf"
            >
              Download Resume
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Robotics</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill__one"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mathematics</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill__two"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Coffee</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill__three"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
