import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart Page</h3>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div className="cartCard">
            <img src={item.image} alt="img" />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
