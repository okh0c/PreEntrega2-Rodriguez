import React, { useState } from 'react';
import './ItemDetail.css'; 
import stock from '../../mocks/stock';
import { useCart } from '../CartContext/CartContext'; // Asegúrate de que la ruta de importación sea correcta



const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [availableStock, setAvailableStock] = useState(stock[item.id]);

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, Math.min(availableStock, parseInt(e.target.value, 10)));
    setQuantity(newQuantity);
  };

  const addToCartDisabled = quantity > availableStock;

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${item.title}, cantidad: ${quantity}`);
    const newAvailableStock = availableStock - quantity;
    setAvailableStock(newAvailableStock);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <img src={item.pictureUrl} alt={item.title} className="item-detail-image" />
        <h2>{item.title}</h2>
        <p>${item.price}</p>
        <p>{item.description}</p>
        <div className="item-detail-quantity">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max={availableStock}
          />
        </div>
        <p className="item-detail-stock">{availableStock} unidades disponibles</p>
        <button 
          onClick={handleAddToCart}
          disabled={addToCartDisabled}
        >
          Agregar al Carrito
        </button>
        {addToCartDisabled && <p className="error">La cantidad excede el stock disponible.</p>}
      </div>
    </div>
  );
};

export default ItemDetail;