import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      Description: "Open 9.00 am to 5.00 pm everyday",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Our Locations",
      Description: "Mirpur-2, Block-A, Dhaka-1216",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      Description: "Phone-017955500",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 md:grid-cols-2 gap-6">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
