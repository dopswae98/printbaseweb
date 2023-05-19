import React from "react";
import img1 from "../img/office1.jpg";
import img2 from "../img/office2.jpg";
// import img3 from "../img/office3.jpg";
import img4 from "../img/laptop1.jpg";
import img5 from "../img/irrigation1.jpg";

const Carousell = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block pb-5">
            <h1 className="h1 fw-bold">
              Get Quality Stationaty For Your Office
            </h1>
            <p>We supply you with the best stationary at affordable prices.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block pb-5">
            <h1 className="h1 fw-bold">
              Get Quality Stationaty For Your Office
            </h1>
            <p>We supply you with the best stationary at affordable prices.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block pb-5">
            <h1 className="h1 fw-bold">
              Get Quality Stationaty For Your Office
            </h1>
            <p>We supply you with the best stationary at affordable prices.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block pb-5">
            <h1 className="h1 fw-bold">
              Get Quality Stationaty For Your Office
            </h1>
            <p>We supply you with the best stationary at affordable prices.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousell;
