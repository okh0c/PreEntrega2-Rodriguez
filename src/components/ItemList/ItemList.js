import React from 'react';
import './ItemList.js'; 


const ItemList = ({ items }) => {
  return (
    <div className="product-list">
      {items.map(item => (
        <div key={item.id} className="product-card">
          <img src={item.pictureUrl} alt={item.title} />
          <div className="product-info">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-availability">{item.disponibility}</p>
            <p className="product-price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
