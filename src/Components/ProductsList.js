import React from "react";
import {
  // faShoppingBag,
  // faArrowCircleUp,
  // faCircleXmark,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserAuth } from "./UserAuthContext";

const ProductsList = ({ productsData }) => {
  const { AddToCart } = useUserAuth();
  return (
    <div className="card rounded-0">
      <div className="row px-3 w-100">
        {productsData.map((item) => {
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
                <p className="fw-bolder fs-5">{`$${item.price}`}</p>
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
  );
};

export default ProductsList;
