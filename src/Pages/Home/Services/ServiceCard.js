import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={icon} alt="Shoes" className="rounded-xl w-1/2" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
