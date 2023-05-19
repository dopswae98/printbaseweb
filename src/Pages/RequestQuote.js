import React from "react";
import { useUserAuth } from "../Components/UserAuthContext";

const RequestQuote = () => {
  const { setRfqVisible, setVisibility, setCart, cart } = useUserAuth();
  const handleQuote = () => {
    setVisibility(false);
    setRfqVisible(false);
    cart.map((prod) => {
      console.log(prod.productName, prod.price);
    });
    setCart([]);
    alert("Email received Successfully!!!");
  };
  return (
    <div className="rfq vh-100">
      <div className="quote container d-flex flex-column align-content-center pt-5 text-white">
        <div className="row">
          <div className="col-md-8 mx-auto bg-dark d-flex flex-column py-3">
            <form action="" className="email rfq-form">
              <h6 className="fw-bold fs-md-6 fs-6">
                Enter Your Email Below to receive a qoute
              </h6>
              <input
                className="email-text border-primary border-top-0 border-start-0 border-end-0 w-100 w-md-50 bg-transparent"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="btn w-100 btn-warning mt-3"
                onClick={handleQuote}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
