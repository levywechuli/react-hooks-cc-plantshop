import React from "react";

function PlantCard({ id, name, image, price, inStock, onToggleInStock }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={inStock ? "" : "primary"}
        onClick={() => onToggleInStock(id)}
      >
        {inStock ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;