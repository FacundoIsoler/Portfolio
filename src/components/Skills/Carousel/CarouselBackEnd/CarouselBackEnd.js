// CarouselBackEnd.js
import React from 'react';
import './CarouselBackEnd.css';
import PostgressSQL from "../../../../assets/img/PostgreSQL.svg";
import Express from "../../../../assets/img/express.svg";
import MongoDB from "../../../../assets/img/mongodb.svg";

function CarouselBackEnd() {
    return (
        <div id="carouselBackEnd" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={PostgressSQL} className="d-block w-100" alt="PostgressSQL" />
                    <h1>PostgressSQL</h1>
                </div>
                <div className="carousel-item ">
                    <img src={Express} className="d-block w-100" alt="Express" />
                    <h1>Express</h1>
                </div>
                <div className="carousel-item ">
                    <img src={MongoDB} className="d-block w-100" alt="MongoDB" />
                    <h1>MongoDB</h1>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselBackEnd" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselBackEnd" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselBackEnd;
