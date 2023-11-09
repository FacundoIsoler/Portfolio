// CarouselFrontEnd.js
import React from 'react';
import './CarouselFrontEnd.css';
import ReactImage from "../../../../assets/img/React.svg";
import Redux from "../../../../assets/img/redux.svg";
import Tailwind from "../../../../assets/img/tailwind.svg";
import Boostrap from "../../../../assets/img/bootstrap.svg";

function CarouselFrontEnd() {
    return (
        <div id="carouselFrontEnd" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ReactImage} className="cImg" alt="React" />
                    <h1>React</h1>
                </div>
                <div className="carousel-item">
                    <img src={Redux} className="cImg" alt="..." />
                    <h1>Redux</h1>
                </div>
                <div className="carousel-item">
                    <img src={Tailwind} className="cImg" alt="..." />
                    <h1>Tailwind</h1>
                </div>
                <div className="carousel-item">
                    <img src={Boostrap} className="cImg" alt="..." />
                    <h1>Boostrap</h1>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselFrontEnd" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselFrontEnd" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselFrontEnd;
