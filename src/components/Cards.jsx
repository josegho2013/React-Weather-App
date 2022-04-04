import React from "react";
import Card from "./Card.jsx";
import "./Cards.css";

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className="cards">
        {cities.map((c) => (
          <Card
            id={c.id}
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            wind={c.wind}
            humidity={c.humidity}
            onClose={() => onClose(c.id)}
            weather={c.weather}
            description={c.description}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
