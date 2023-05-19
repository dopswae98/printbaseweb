import React from "react";
// import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/printbaselogo2.png";
// import { useUserAuth } from "./UserAuthContext";
import { Link } from "react-router-dom";
// import products from "../assets/data/products";
import image1 from "../img/mockup1.jpg";
import "./printbase.css";

const PrintbaseSolutions = () => {
  return (
    <div className="overflow-hidden" style={{ backgroundColor: "#ccb99c" }}>
      <section className="nav-section sticky-top container rounded">
        <div className="nav-container" style={{ backgroundColor: "#cbbb9a" }}>
          <nav className="navbar navbar-expand-lg bg-lights mt-2">
            <div className="container position-relative">
              <Link className="logo navbar-brand" to="/">
                {/* <a className="logo navbar-brand" href="/#"> */}
                <img
                  className="logo-img position-absolute"
                  src={logo}
                  style={{ height: 70, width: 65, top: -5 }}
                  alt="Wholight Trading Logo"
                />
                {/* </a> */}
              </Link>
              <div className="acc-cart-center position-relative ms-3">
                <span className="badge bg-secondary rounded-circle">
                  {/* {cart.length} */}
                </span>
                {/* <i className="fa-regular "></i>
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className="ms-2 fw-bold">
                  My <span className="text-warning">Cart</span>{" "}
                </span> */}
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="me-auto"></div>
                <div className="ge me-auto">
                  <ul className="navbar-nav mb-2 mb-lg-0 position-relative">
                    <li className="nav-item">
                      <a
                        className="tab nav-link active fw-bold"
                        aria-current="page"
                        href="/#"
                      >
                        <span className=" me-1">
                          {/* <i
                            className="fa fa-circle"
                            style={{ fontSize: 7, top: 14 }}
                          ></i> */}
                        </span>
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" href="/#">
                        <span className="me-1">
                          {/* <i
                            className="fa fa-circle"
                            style={{ fontSize: 7, top: 14 }}
                          ></i> */}
                        </span>
                        About
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link active dropdown-toggle fw-bold"
                        href="/#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="me-1">
                          {/* <i
                            className="fa fa-circle"
                            style={{ fontSize: 7, top: 14 }}
                          ></i> */}
                        </span>
                        Services
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item fw-bold" href="/#">
                            Boreholes
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item fw-bold" href="/#">
                            Construction
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item fw-bold" href="/#">
                            Stationary
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item fw-bold" href="/#">
                            Custom Products
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" href="/#">
                        <span className="me-1">
                          {/* <i
                            className="fa fa-circle"
                            style={{ fontSize: 7, top: 14 }}
                          ></i> */}
                        </span>
                        Pages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active fw-bold" href="/#">
                        <span className="me-1">
                          {/* <i
                            className="fa fa-circle"
                            style={{ fontSize: 7, top: 14 }}
                          ></i> */}
                        </span>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white  rounded-pill">
                  <form
                    className="d-flex border border-0 border-2 border-top-0 border-start-0 border-end-0 mx-0"
                    role="search"
                  >
                    {/* <input
                      className="search-input form-control me-2 bg-transparent border-0 outline-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      //   onChange={handleSearch}
                    /> */}
                    <button
                      className="search btn btn-outline-danger"
                      type="submit"
                    >
                      <FontAwesomeIcon
                        icon={faSearch}
                        color="black"
                        // onClick={handleCart}
                      />
                    </button>
                  </form>
                </div>
                <div className="acc-cart position-relative ms-3">
                  <span className="badge bg-danger rounded-circle">1</span>
                  <i className="fa-regular "></i>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    //   onClick={handleCart}
                  />
                  <span className="ms-1"></span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className="hero container py-5 position-relative">
        <div className="row">
          <div className="welcome col-md-4 pt-5">
            <p className="text-danger fw-bold">Welcome to Our Company</p>
            <h1 className="fw-bold" style={{ fontSize: 43 }}>
              First & Quality Printbase
              <span className="ms-1 fs-4 text-white">Solutions</span>
            </h1>
            <div className="happy mt-3 py-1 border border-danger border-3 border-top-0 border-end-0 border-bottom-0 px-1">
              <p>
                When we say we're not happy until, we really do mean it . You
                will be happy with our service.
              </p>
            </div>
            <div className="buttons mt-3">
              <button className="btn btn-danger fw-bold rounded-0">
                Make an order <i className="fa fa-arrow-right"></i>
              </button>
              <button className="btn btn-light fw-bold ms-3 rounded-0">
                How it works <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className="img"
          style={{ position: "absolute", top: 20, left: 0, right: 50 }}
        >
          <img
            className="hero-img"
            src={image1}
            alt="image1"
            style={{
              position: "absolute",
              height: 380,
              transform: "rotate(-17deg)",
              right: 90,
              borderRadius: 10,
            }}
          />
        </div>
      </section>
      <section className="serices pt-5 container">
        <div className="rows d-block d-md-flex flex-row">
          <div className="service text-center me-1 col-md-2 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-address-card fs-1 text-danger"></i>
            <p className="fw-bold">Business Card</p>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-2 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-print fs-1 text-danger"></i>
            <p className="fw-bold">Printing Services</p>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-2 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-shirtsinbulk fs-1 text-danger"></i>
            <p className="fw-bold">T-Shirt Print</p>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-2 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-modx fs-1 text-danger"></i>
            <p className="fw-bold">Billboard Print</p>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-2 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-gg  fs-1 text-danger"></i>
            <p className="fw-bold">Branding Print</p>
          </div>
          <div className="service mt-3 mt-md-0 text-center me-1 col-md-2 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-copyright fw-bold fs-1 text-danger"></i>
            <p className="fw-bold">Copyright</p>
          </div>
        </div>
      </section>
      <section className="about-section py-5 container">
        <p className="text-danger">About Us</p>
        <h1 className="h1">Printing Solutions For Your Company</h1>
        <div className="solution-container pt-4">
          <div className="row">
            <div className="col-md-5">
              <p className="text-muted">
                From finance, retail and travel, to social media, cybersecurity,
                adtech, and more, market leaders are leveraging web data to
                maintain their advantage. Discover how it can work for you.
              </p>
              <img
                className="img-fluid rounded"
                src={image1}
                alt="printing"
                style={{ height: 240 }}
              />
            </div>
            <div className="col-md-4 mt-3 mt-md-0">
              <p className="text-muted">
                Complete Design Toolkit-huge collection of elements, rich
                customization options. Flexible layouts, and instant results!
              </p>
              <div className="mt-3 text-muted">
                <ul>
                  <li>Request API Intergration</li>
                </ul>
                <ul>
                  <li>Request API Intergration</li>
                </ul>
                <ul>
                  <li>Request API Intergration</li>
                </ul>
              </div>
              <div className="hoi d-flex flex-row align-items-center">
                <img
                  src={image1}
                  alt="hoi"
                  style={{ height: 50, width: 51, borderRadius: 25 }}
                />
                <div
                  className="name-hod pb-3 pb-md-0 ms-2 pt-3"
                  style={{ lineHeight: 0.4 }}
                >
                  <p className="fw-bold">Miranda Helson</p>
                  <p className="text-muted">Head Of Idea</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 bg-dark text-white py-3">
              <h5 className="fw-bold">Working Hours</h5>
              <p className="text-muted">
                Those obsesed with print are not good the first requsite.
              </p>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Monday</p>
                <p className="text-muted">8 AM - 9 PM</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Tuesday</p>
                <p className="text-muted">8 AM - 9 PM</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Wednesday</p>
                <p className="text-muted">8 AM - 9 PM</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Thursday</p>
                <p className="text-muted">8 AM - 9 PM</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Friday</p>
                <p className="text-muted">8 AM - 9 PM</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Saturday/Sunday</p>
                <p className="text-danger fw-bold">Off Day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services container">
        <p className="text-danger">Services</p>
        <h1 className="h1">What we do</h1>
        <div className="rows d-flex flex-row">
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-address-card fs-1 text-danger"></i>
            <p className="fw-bold">Business Card</p>
          </div>
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-print fs-1 text-danger"></i>
            <p className="fw-bold">Printing Services</p>
          </div>
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-shirtsinbulk fs-1 text-danger"></i>
            <p className="fw-bold">T-Shirt Print</p>
          </div>
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-modx fs-1 text-danger"></i>
            <p className="fw-bold">Billboard Print</p>
          </div>
        </div>
        <div className="rows d-flex flex-row mt-4">
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-shirtsinbulk fs-1 text-danger"></i>
            <p className="fw-bold">T-Shirt Print</p>
          </div>
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-modx fs-1 text-danger"></i>
            <p className="fw-bold">Billboard Print</p>
          </div>
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-gg  fs-1 text-danger"></i>
            <p className="fw-bold">Branding Print</p>
          </div>
          <div className="service text-center me-1 col-md-3 py-4 d-flex text-align-center justify-content-center flex-column bg-light">
            <i className="fa fa-copyright fw-bold fs-1 text-danger"></i>
            <p className="fw-bold">Copyright</p>
          </div>
        </div>
        <div className="sponsers my-4 py-3 bg-light text-center">
          <p>
            <span className="text-danger">100+</span> Happy Sponsors
          </p>
          <div className="sponsor-logos d-flex flex-row justify-content-around py-3">
            <i className="fa fa-copyright fw-bold fs-1 text-danger"></i>
            <i className="fa fa-copyright fw-bold fs-1 text-danger"></i>
            <i className="fa fa-copyright fw-bold fs-1 text-danger"></i>
            <i className="fa fa-copyright fw-bold fs-1 text-danger"></i>
            <i className="fa fa-copyright fw-bold fs-1 text-danger"></i>
          </div>
        </div>
      </section>
      <section className="best-plan container my-5">
        <p className="text-danger text-center ">pricing table</p>
        <h1 className="h1 text-center">Choose Your Best Plan</h1>
        <div className="d-flex pt-3 justify-content-center">
          <div>
            <p className="text-danger fw-bold">Monthly</p>
          </div>
          <div className="option mx-3">
            <p
              className="border border-2 border-danger rounded-pill px-1 text-danger py-auto"
              style={{ width: 40, height: 20 }}
            >
              *
            </p>
          </div>
          <div>
            <p className="fw-bold">Yearly</p>
          </div>
        </div>
        <div className="prices">
          <div className="row  text-center d-flex align-items-center ">
            <div className="col-md-11 mx-auto">
              <div className="row px-auto d-flex justify-content-center align-items-center">
                <div className="col-md-3 bg-light py-4 rounded">
                  <p className="fw-bold">Startup Plan</p>
                  <div className="price d-flex justify-content-center">
                    <span>$</span>
                    <h1 className="fw-bold text-danger">39</h1>
                    <p className="fw-bold pt-3">.99</p>
                  </div>
                  <hr />
                  <div className="features" style={{ lineHeight: 0.9 }}>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                  </div>
                  <button className="btn btn-danger fw-bold ms-3 rounded-0 mx-auto">
                    Get Started <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
                <div
                  className="col-md-5 mx-2 bg-light py-4 border border-danger border-2  position-relative"
                  style={{ borderRadius: 4 }}
                >
                  <div
                    className="tiangle position-absolute bg-danger"
                    style={{
                      clipPath: "polygon(49% -1%, 82% 54%, 19% 50%)",
                      height: 90,
                      width: 150,
                      borderRadius: 10,
                      transform: "rotate(45deg)",
                      right: -44,
                      top: -13,
                      overflow: "",
                    }}
                  >
                    <p
                      className="recommended pt-4 text-white fw-bold"
                      style={{ fontSize: 12 }}
                    >
                      POPULAR
                    </p>
                  </div>
                  <p className="fw-bold">Startup Plan</p>
                  <div className="price d-flex justify-content-center">
                    <span>$</span>
                    <h1 className="fw-bold text-danger">59</h1>
                    <p className="fw-bold pt-3">.99</p>
                  </div>
                  <hr />
                  <div className="features" style={{ lineHeight: 0.9 }}>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                  </div>
                  <button className="btn btn-danger fw-bold ms-3 rounded-0 mx-auto">
                    Get Started <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
                <div className="col-md-3 bg-light py-4 rounded">
                  <p className="fw-bold">Startup Plan</p>
                  <div className="price d-flex justify-content-center">
                    <span>$</span>
                    <h1 className="fw-bold text-danger">49</h1>
                    <p className="fw-bold pt-3">.99</p>
                  </div>
                  <hr />
                  <div className="features" style={{ lineHeight: 0.9 }}>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                    <p>5 Email Account</p>
                  </div>
                  <button className="btn btn-danger fw-bold ms-3 rounded-0 mx-auto">
                    Get Started <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq container mb-5">
        <p className="text-danger text-center">faq</p>
        <h1 className="h1 text-center">Common Question Answer</h1>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="faqs mt-4">
              <div className="accordion">
                <div>
                  <div className="bd-example">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item ">
                        <h4 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button bg-danger text-white fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Appropriate For Your Specific Business
                          </button>
                        </h4>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse shows"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed fw-bold text-white bg-danger"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Design and development Troubleshooting
                          </button>
                        </h4>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h4 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button bg-danger text-white fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            What Service Do You Offer
                          </button>
                        </h4>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse shows"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed fw-bold text-white bg-danger"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Is Everthing Done In-House
                          </button>
                        </h4>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h4 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button bg-danger text-white fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            Do You Invest In The Latest Tech?
                          </button>
                        </h4>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse shows"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed fw-bold text-white bg-danger"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            What Are The TurnAround Times Like?
                          </button>
                        </h4>
                        <div
                          id="collapseSix"
                          className="accordion-collapse "
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us pb-5 container">
        <div className="rows d-block d-md-flex flex-row d-block d-md-flex justify-content-between">
          <div className="service text-start px-3 me-1 col-md-3 py-3  bg-light">
            <p className="fw-bold">Harare</p>
            <div className="contact-specific">
              <p>6 Nigel Phillip Avenue </p>
              <p>printbasezim@gmail.com</p>
              <p>+263 774 000 000</p>
            </div>
          </div>
          <div className="service text-start px-3 me-1 col-md-3 py-3  bg-light">
            <p className="fw-bold">Harare</p>
            <div className="contact-specific">
              <p>6 Nigel Phillip Avenue </p>
              <p>printbasezim@gmail.com</p>
              <p>+263 774 000 000</p>
            </div>
          </div>
          <div className="service text-start px-3 me-1 col-md-3 py-3  bg-light">
            <p className="fw-bold">Harare</p>
            <div className="contact-specific">
              <p>6 Nigel Phillip Avenue </p>
              <p>printbasezim@gmail.com</p>
              <p>+263 774 000 000</p>
            </div>
          </div>
          <div className="service text-start px-3 me-1 col-md-3 py-3  bg-light">
            <p className="fw-bold">Harare</p>
            <div className="contact-specific">
              <p>6 Nigel Phillip Avenue </p>
              <p>printbasezim@gmail.com</p>
              <p>+263 774 000 000</p>
            </div>
          </div>
        </div>
        <div className="get-in-touch pt-4">
          <div className="row pt-4">
            <div className="col-md-6">
              <img
                className="rounded img-fluid"
                src={image1}
                alt="map"
                style={{ height: 300 }}
              />
            </div>
            <div className="col-md-6 ">
              <p className="text-danger mt-3 mt-md-0">Contact Us</p>
              <h2 className="fw-bold">Get In Touch</h2>
              <form>
                <div className="inputs row py-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control fw-bold"
                    />
                    <input
                      className="form-control mt-3 fw-bold"
                      type="text"
                      placeholder="Full Name"
                    />
                    <select
                      className="form-select mt-3 fw-bold"
                      aria-label="Default Select Example"
                    >
                      <option selected>Quantity</option>
                      <option value="1">1-500</option>
                      <option value="1">500-5000</option>
                      <option value="1">5000-5000</option>
                    </select>
                  </div>
                  <div className="col-md-6 mt-3 mt-md-0">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="form-control fw-bold"
                    />
                    <select
                      className="form-select mt-3 fw-bold"
                      aria-label="Default Select Example"
                    >
                      <option selected>Category</option>
                      <option value="1">Fliers</option>
                      <option value="1">Banners</option>
                      <option value="1">T-Shirt</option>
                      <option value="1">Label</option>
                      <option value="1">Billboard</option>
                    </select>
                    <select
                      className="form-select mt-3 fw-bold"
                      aria-label="Default Select Example"
                    >
                      <option selected>Budget</option>
                      <option value="1">$1-$500</option>
                      <option value="1">$500-$5000</option>
                      <option value="1">$5000-$5000</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-danger">Make An Order</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="footer bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="fw-bold">About Us</p>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                reprehenderit voluptatibus, consequatur quis voluptatum fugit
                expedita!
              </p>
            </div>
            <div className="col-md-3">
              <p className="fw-bold">Other Pages</p>
              <div className="links text-muted">
                <div className="page-links d-flex justify-content-between">
                  <p>About Us</p>
                  <p>Carrers</p>
                </div>
                <div className="page-links d-flex justify-content-between">
                  <p>Services</p>
                  <p>News & Insights</p>
                </div>
                <div className="page-links d-flex justify-content-between">
                  <p>Our Team</p>
                  <p>Refund Policy</p>
                </div>
                <div className="page-links d-flex justify-content-between">
                  <p>Pricing</p>
                  <p>Terms & Conditions</p>
                </div>
                <p>FAQ & ANS</p>
              </div>
            </div>
            <div className="col-md-3">
              <p className="fw-bold">Get In Touch</p>
              <div className="links text-muted">
                <p>000 0000 0000</p>
                <p>kotrumenterprises@gmail.com</p>
                <p>6 Nigel Phillip Avenue Eastlea Harare, Zimbabwe</p>
              </div>
            </div>
            <div className="col-md-3">
              <p className="fw-bold">Subscribe Us</p>
              <p className="text-muted">
                Subscribe us & receive our office & update directly into your
                inbox.
              </p>
              <div className="input bg-white d-flex flex-row">
                {/* <i className="fa fa-envelope text-danger"></i> */}
                <input
                  className="form-control"
                  placeholder="youremail.gmail.com"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintbaseSolutions;
