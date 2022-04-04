import React from "react";
import "./Card.css";

export default function Card({
  min,
  max,
  name,
  img,
  onClose,
  id,
  humidity,
  wind,
  description
}) {
  return (
    <div className="card">
      <div id="closeIcon">
        <button onClick={() => onClose(id)} className="btn-danger">
          X
        </button>
      </div>
      <div className="card-body">
        <div className="image">
          <img
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="150"
            height="150"
            alt=""
          />
          <h3 className="weather">{description.toUpperCase()}</h3>
        </div>

        <div className="title">
          <h1 className="card-title">{name}</h1>
          <p>{max}°</p>
        </div>
      </div>

      <div className="data">
        <div>
          <div className="cold" width="50" height="50" />
          <p className="card-title">{min}°</p>
        </div>
        <div>
          <div className="hot" width="50" height="50" />
          <p className="card-title">{max}°</p>
        </div>
        <div>
          <div className="humidity" width="50" height="50" />
          <p className="card-title">{humidity}%</p>
        </div>
        <div>
          <div className="wind" width="50" height="50" />
          <p className="card-title">{wind}Km/h</p>
        </div>
      </div>
    </div>
  );
}
