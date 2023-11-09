// Skills.js
import React from 'react';
import './Skills.css';
import CarouselFrontEnd from './Carousel/CarouselFrontEnd/CarouselFrontEnd.js';
import CarouselBackEnd from './Carousel/CarouselBackEnd/CarouselBackEnd.js';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="front-back">
                <div className="item ">
                  <h1>Front-End</h1>
                </div>
                <div className="item ">
                  <h1>Back-End</h1>
                </div>
              </div>
              <div className='carousels'>
                <CarouselFrontEnd />
                <CarouselBackEnd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
