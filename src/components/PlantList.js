import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleInStock }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          inStock={plant.inStock} 
          onToggleInStock={onToggleInStock}  
        />
      ))}
    </ul>
  );
}

export default PlantList;
