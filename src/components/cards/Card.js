import React from "react";
import './cardStyles.css'


export default function Card({ card }) {
  return (
    <div className="card">
      <div className="card-container">
        <span className="loc-name">{card.location.toUpperCase()}</span>
        <a href={card.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="loc-google">
          View on Google Maps
        </a>
        <h1 className="card-title">{card.title}</h1>
        <p className="card-date">
          <strong>
            {card.startDate} - {card.endDate}
          </strong>
        </p>
        <p className="card-description">{card.description}</p>
      </div>
    </div>
  );
}
