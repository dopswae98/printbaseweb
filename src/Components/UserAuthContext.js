import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import products from "../assets/data/products";

const userAuthContext = createContext();
// const UserContainerContext = () => {
//   return <div></div>;
// };

// export default UserContainerContext;

export function UserAuthContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [query, setQuery] = useState("");
  const [rfqVisible, setRfqVisible] = useState(false);
  const [productsData, setProductsData] = useState([...products]);

  // function AddToCart(item) {
  //   setCart([...cart, item]);
  //   toast.success("Product Added Succesfully");
  // }
  function AddToCart(product) {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Product Added Succesfully");
    }
  }
  function removeFromCart(product) {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
      toast.warning("Product Removed Succesfully");
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  function removeItemFromCart(product) {
    // const exist = cart.find((x) => x.id === product.id);

    setCart(cart.filter((x) => x.id !== product.id));
    toast.warning("Product Removed Succesfully");
  }

  function handleClose() {
    setVisibility(false);
  }
  // function removeFromCart(item) {
  //   let hardCopy = [...cart];
  //   hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
  //   setCart(hardCopy);
  //   toast.error("Product Remove Succesfully");
  // }

  return (
    <userAuthContext.Provider
      value={{
        AddToCart,
        cart,
        setCart,
        visibility,
        setVisibility,
        handleClose,
        removeFromCart,
        query,
        setQuery,
        productsData,
        setProductsData,
        products,
        removeItemFromCart,
        rfqVisible,
        setRfqVisible,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
