import React from "react";
import { useUserAuth } from "./UserAuthContext";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RequestQuote from "../Pages/RequestQuote";
// import products from "../assets/data/products";

const ShoppingCart = () => {
  // const handleSub = (Specificitem) => {
  // const existingItem = cart.find((item) => item.id == Specificitem.id);
  // if (existingItem){
  //   cart
  // }
  // };
  const {
    cart,
    handleClose,
    removeFromCart,
    AddToCart,
    removeItemFromCart,
    rfqVisible,
    setRfqVisible,
  } = useUserAuth();
  // useEffect(() => {
  //   total();
  //   // eslint-disable-next-line
  // }, [cart]);
  // const [cartTotal, setcartTotal] = useState(0);
  const cartTotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  // const total = () => {
  //   let totalVal = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     totalVal += cart[i].price;
  //   }
  //   setcartTotal(totalVal);
  //   // console.log(cart);
  // };
  // const total = () => {
  //   let totalVal = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     totalVal += cart[i].price;
  //   }
  //   setcartTotal(totalVal);
  //   // console.log(cart);
  // };
  const handleRequestQuote = (e) => {
    e.preventDefault();
    setRfqVisible(true);
  };

  return (
    <div className="modals">
      {rfqVisible && <RequestQuote />}
      <div
        className={cart.length == 0 ? "cart-bar bg-light" : "cart-bar bg-white"}
        style={{ overflowY: "scroll", zIndex: 10 }}
      >
        <div className="cart-top d-flex justify-content-between px-3 mt-3">
          <p className="fw-bold text-dark">Cart Items</p>
          {/* <faArrowCircleUp color={"black"} size={5} /> */}
          <FontAwesomeIcon
            className="text-danger"
            icon={faCircleXmark}
            onClick={handleClose}
            style={{ color: "black" }}
          />
        </div>
        <div className="cart-item-container px-3">
          <div className="product">
            {cart.length == 0 && (
              <h5 className="fw-bold text-dark mt-2 mb-4">
                Your cart is empty!
              </h5>
            )}
            {cart.map((item, index) => {
              return (
                <div
                  className="item d-flex text-dark bg-white mt-3"
                  key={index}
                >
                  <div
                    className="img  d-flex align-items-center justify-content-center"
                    style={{
                      height: 50,
                      width: 80,
                    }}
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      style={{
                        height: 50,
                      }}
                    />
                  </div>
                  <div
                    className="desc ms-3"
                    style={{ lineHeight: 0.9, fontSize: 13 }}
                  >
                    <p>{item.productName}</p>
                    <div className="price d-flex justify-content-between align-items-center ">
                      <p className="my-auto">${item.price}</p>
                      <div className="adder d-flex">
                        <div
                          className="add 
                        border border-dark border-2 d-flex 
                        justify-content-center 
                        align-items-center"
                          // onClick={handleSub(item)}
                        >
                          <button
                            className="btn btn-outline-white border-0"
                            onClick={() => removeFromCart(item)}
                          >
                            -
                          </button>
                        </div>
                        <div className="add bg-dark text-white border border-dark border-2 d-flex justify-content-center align-items-center">
                          {item.qty}
                        </div>
                        <div
                          className="add 
                        border border-dark 
                        border-2 d-flex 
                        justify-content-center 
                        align-items-center"
                          // onClick={handleAdd}
                        >
                          <button
                            className="btn btn-outline-white border-0"
                            onClick={() => AddToCart(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="remove">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faCircleXmark}
                      color="black"
                      onClick={() => removeItemFromCart(item)}
                    />
                  </div>
                </div>
              );
            })}
            <div className="px-3 bg-light d-flex justify-content-between align-items-center pt-3 mt-3">
              <p className="fw-bold text-dark">Order Total</p>
              <p className="fw-bold text-dark">${cartTotal}</p>
            </div>
            <button
              className={
                cart.length === 0
                  ? "btn btn-secondary p-3 mt-2 w-100 disabled"
                  : "btn request-quote btn-warning p-3 mt-2 w-100"
              }
              onClick={handleRequestQuote}
            >
              <h5 className="fw-bold text-dark my-auto disabled">
                Request a Quote
              </h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
