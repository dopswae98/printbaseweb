import React from "react";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useUserAuth } from "../Components/UserAuthContext";
import ShoppingCart from "../Components/ShoppingCart";

const ProductDetails = () => {
  // {AddToCart} = useUserContainer();
  const { AddToCart, visibility } = useUserAuth();
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    productName,
    imgUrl,
    category,
    price,
    shortDesc,
    // description,
    // reviews,
    // avgRating,
  } = product;
  const AlsoProducts = products.filter((also) => also.category === category);

  return (
    <div className="ProductDetails  bg-white">
      {visibility && <ShoppingCart />}
      <section className="nav-section sticky-top">
        <Navbar />
      </section>
      <div className="pt-3 d-flex flex-wrap flex-md-nowrap container align-items-center justif-content-center">
        <div className="image pt-0 ">
          <img
            src={imgUrl}
            alt={productName}
            style={{ height: 300, width: 300 }}
          />
        </div>
        <div className="details text-dark ps-5">
          <div className="">
            <h1>{productName}</h1>
            <h3>${price}</h3>
            <p>{shortDesc}</p>
            <button
              className="btn btn-warning"
              onClick={() => {
                AddToCart(product);
                // (e) => Notify();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="also-like container mt-3">
        <h3>You may also like</h3>
        <div className="also-images">
          <div className="row">
            {AlsoProducts.map((item) => {
              return (
                <div key={item.id} className="card-item  col-md-3 bg-white">
                  <Link
                    className="Link"
                    to={`/productDetail/${item.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="card-image d-flex align-items-center justify-content-center">
                      <i className="fa fa-heart"></i>

                      <img src={item.imgUrl} alt={item.productName} />
                    </div>
                    <p>{item.productName}</p>
                    <p>{item.category}</p>
                  </Link>
                  <div className="prices d-flex justify-content-between">
                    <p>{`$${item.price}`}</p>
                    <FontAwesomeIcon
                      className="add-icon"
                      icon={faCirclePlus}
                      onClick={() => {
                        AddToCart(item);
                        // (e) => Notify();
                      }}
                    />
                  </div>
                  {/* <ToastContainer /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
