import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/wholelitelogo7.png";
import { useUserAuth } from "./UserAuthContext";
import { Link } from "react-router-dom";
import products from "../assets/data/products";

const Navbar = () => {
  const {
    cart,
    setVisibility,
    query,
    setQuery,
    visibility,
    // productsData,
    setProductsData,
  } = useUserAuth();
  const handleCart = () => {
    setVisibility(!visibility);
    // console.log(visibility);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(query.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="logo navbar-brand" to="/">
            {/* <a className="logo navbar-brand" href="/#"> */}
            <img src={logo} alt="Wholight Trading Logo" />
            {/* </a> */}
          </Link>
          <div className="acc-cart-center position-relative ms-3">
            <span className="badge bg-secondary rounded-circle">
              {cart.length}
            </span>
            <i className="fa-regular "></i>
            <FontAwesomeIcon icon={faShoppingBag} onClick={handleCart} />
            <span className="ms-2 fw-bold">
              My <span className="text-warning">Cart</span>{" "}
            </span>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="me-auto"></div>
            <div className="ge me-auto">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link active dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/#">
                        Boreholes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Construction
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Stationary
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Custom Products
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/#">
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
                <input
                  className="search-input form-control me-2 bg-transparent border-0 outline-none"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleSearch}
                />
                <button
                  className="search btn btn-outline-warning"
                  type="submit"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    color="black"
                    onClick={handleCart}
                  />
                </button>
              </form>
            </div>
            <div className="acc-cart position-relative ms-3">
              <span className="badge bg-secondary rounded-circle">
                {cart.length}
              </span>
              <i className="fa-regular "></i>
              <FontAwesomeIcon icon={faShoppingBag} onClick={handleCart} />
              <span className="ms-1"></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
