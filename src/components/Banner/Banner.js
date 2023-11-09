import './Banner.css';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import meet from "../../assets/img/meet.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Skills } from '../Skills/Skills.js';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Programador Web"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
                  <h1>{`Hola! Soy Facundo`} <br/>{" un "}<span className="txt-rotate" dataPeriod="10" data-rotate='["Programador Web"]'><span className="wrap">{text}</span></span></h1>
                  <p>Actualmente escribo con lenguaje javascript, con principal aplicación de tecnologías como: <br /> <br />
                    Base de datos : nosql o mongodb <br />
                    Back: postgress, express <br />
                    Front: react - redux, tailwind responsive desing <br />
                    <br />
                    Con aplicación de otras tecnologías acompañantes.
                    Me considero una persona entusiasta con ganas de aprender y aportar mis conocimientos al trabajo.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={meet} alt="Meet Img" className='PCImg' />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Skills />
    </section>
  )
}
