import React from 'react';
import "./About.css"

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
          I am eager to succeed in a fast-paced development environment, supporting the latest robotics advancements while learning and improving my skill in Engineerig.
        </p>
        <a href='https://drive.google.com/file/d/152osHKPXtMys9BIB4D68s6cqMsXrlIn1/view?usp=sharing' className='btn' download={"Julian's Resume"}>Download Resume</a>
      </div>

      <div className='about__skills grid'>
        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>
            Robotics
            </h3>
            <span className='skills__number'>80%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage skill__one'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Mathematics</h3>
            <span className='skills__number'>70%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage skill__two'></span>
          </div>
        </div>

        <div className='skills__data'>
          <div className='skills__titles'>
            <h3 className='skills__name'>Coffee</h3>
            <span className='skills__number'>98.6%</span>
          </div>

          <div className='skills__bar'>
            <span className='skills__percentage skill__three'></span>
          </div>
        </div>

      </div>

    </div>
    </div>

    </section>
  )
}

export default About
