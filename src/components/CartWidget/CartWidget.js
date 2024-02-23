import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { useCart } from '../CartContext/CartContext';

function CartWidget() {
  const { cartCount } = useCart();

  return(
    <div className="cartwidget">
      <AiOutlineShoppingCart />
      <h6>{cartCount}</h6> {}
    </div>
  );
}

export default CartWidget;
