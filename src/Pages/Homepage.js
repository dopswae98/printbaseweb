import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import logo from "../img/wholelitelogo7.png";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./homepage.css";

//import serviceData from "../assets/data/serviceData";
// import products from "../assets/data/products";

import Navbar from "../Components/Navbar";
import { useUserAuth } from "../Components/UserAuthContext";
import ShoppingCart from "../Components/ShoppingCart";
import Carousell from "../Components/Carousell";
import ProductsList from "../Components/ProductsList";

const Homepage = () => {
  // const [visibility, setVisibility] = useState(false);
  const [setEmail] = useState(""); //add the clear email box functionality !!!

  const { visibility } = useUserAuth();
  // const [visibility, setVisibility] = useState(false);
  // const Notify = () => toast("Item Successfully Added!");

  // {cart} = useUserContainer()

  const { query, productsData } = useUserAuth();

  // const [cart, setCart] = useState([]);
  // const AddToCart = (item) => {
  //   setCart([...cart, item]);
  //   toast.success("Product Added Succesfully");
  // };

  // const config = {
  //   // Email.send({
  //   Host: "smtp.elasticemail.com",
  //   Port: 2525,
  //   Username: "douggens@gmail.com",
  //   Password: "EFF99A999C079FAD43EFAD08B97343038AC0",
  //   To: "douggens@gmail.com",
  //   From: "douggens@gmail.com",
  //   Subject: "<email subject>",
  //   Body: "<email body>",
  // }).then(
  //   message => alert("mail sent successfully")
  // };
  const form = useRef();
  const handleSubscribe = (e) => {
    e.preventDefault();
    // console.log("clicked");
    // if (window.Email) {
    //   window.Email.send(config);
    // }
    const test = true;
    if (test) {
      console.log(form.current);
    }

    emailjs
      .sendForm(
        "service_ypheqjj",
        "template_9ktwqjq",
        form.current,
        "8De3Ia49CcY8TSrVA"
      )
      .then((res) => {
        toast.success("Your Added Succesfully to Our list");
      })
      .then((err) => console.log(err));
    setEmail("");
  };

  return (
    <div className="Homepage">
      {visibility && <ShoppingCart />}
      <section className="nav-section sticky-top">
        <Navbar />
      </section>
      <section className="carousel">
        {query.length > 0 ? null : <Carousell />}
      </section>
      <section className="products">
        {productsData.length === 0 ? (
          <div className="my-5 py-3">
            <h1 className="fw-bold text-center">No Products Found!!!</h1>
          </div>
        ) : (
          <ProductsList productsData={productsData} />
        )}
      </section>
      <section className="footer text-dark  py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex flex-row mb-2">
                <a className="logo navbar-brand" href="/#">
                  <img src={logo} alt="Wholight Trading Logo" />
                </a>
                <h5 className="fw-bold ms-1">Wholelight Trading</h5>
              </div>
              <p>
                <a href="+263773072851">+263 773 072 851</a>{" "}
              </p>
              <p>
                <a href="mailto:wholelighttrading@hotmail.com">
                  wholelighttrading@hotmail.com
                </a>
              </p>
              <p>6 Nigel Phillip Eastlea Harare</p>
            </div>
            <div className="col-md-3">
              <h6>FAQ</h6>
              <h6>Delivery Period</h6>
              <h6>Returns</h6>
              <h6>Customer Service</h6>
            </div>
            <div className="col-md-3">
              <h6>Stores</h6>
              <h6>Wholesale</h6>
              <h6>Refer a friend</h6>
              <h6>Contact US</h6>
            </div>
            <div className="col-md-3">
              <h5>Lets stay together</h5>
              <p>Enter your email to unlock 10% OFF.</p>
              <div>
                <form
                  ref={form}
                  // onChange={setEmail((e) => e.target.value)}
                  onSubmit={handleSubscribe}
                  className="email border border-top-0 border-start-0 border-end-0 "
                >
                  <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between">
                    <input
                      name="email"
                      type="email"
                      // value={email}
                      // onChange={setEmail((e) => e.target.value)}
                      placeholder="Your Email"
                      className="email-text bg-transparent text-white border-0 mb-1"
                    />

                    <button
                      type="submit"
                      className="btn bg-transparent border-none fw-bold"
                      onClick={handleSubscribe}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="follow-us pt-3 pb-1">
                <h5>Follow Us</h5>
                <div className="social d-flex justify-content-between">
                  <div className="icon bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-facebook fs-5"></i>
                  </div>
                  <div className="icon  bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-whatsapp fs-5"></i>
                  </div>
                  <div className="icon bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-twitter fs-5"></i>
                  </div>
                  <div className="icon bg-warning d-flex align-items-center justify-content-center">
                    <i className="fa fa-instagram fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section py-3  d-flex justify-content-between flex-wrap">
            <span>&copy; 2023 Wholelighttrading</span>
            <span>
              Terms of Service | Privacy Policy | Refund Policy | Accessibility
              Policy
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
