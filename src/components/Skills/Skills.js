import './Skills.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import React from "../../assets/img/React.svg";
import PostgressSQL from "../../assets/img/PostgreSQL.svg"
import Redux from "../../assets/img/redux.svg"
import Tailwind from "../../assets/img/tailwind.svg"
import Boostrap from "../../assets/img/bootstrap.svg"
import Express from "../../assets/img/express.svg"
import MongoDB from "../../assets/img/mongodb.svg"
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
              <div className="carrusels">
                <Carousel responsive={responsive} infinite={true} showDots={false} 
                  className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <img src={React} alt="Image" />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <img src={Redux} alt="Image" />
                    <h5>Redux</h5>
                  </div>
                  <div className="item">
                    <img src={Tailwind} alt="Image" />
                    <h5>Tailwind</h5>
                  </div><div className="item">
                    <img src={Boostrap} alt="Image" />
                    <h5>Boostrap</h5>
                  </div>
                </Carousel>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                  <div className="item">
                    <img src={PostgressSQL} alt="Image" />
                    <h5>PostgressSQL</h5>
                  </div>
                  <div className="item">
                    <img src={Express} alt="Image" />
                    <h5>Express</h5>
                  </div>
                  <div className="item">
                    <img src={MongoDB} alt="Image" />
                    <h5>MongoDB</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
