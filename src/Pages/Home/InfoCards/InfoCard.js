import React from "react";

const InfoCard = ({ card }) => {
  const { name, Description, icon, bgClass } = card;
  return (
    <div className={`card md:card-side p-6 text-white shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="">{Description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
