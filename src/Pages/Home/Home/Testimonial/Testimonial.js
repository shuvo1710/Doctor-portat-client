import React from "react";
import imag1 from "../../../../assets/images/people1.png";
import imag2 from "../../../../assets/images/people2.png";
import imag3 from "../../../../assets/images/people3.png";
import quote from "../../../../assets/icons/quote.svg";
import Review from "./Review";

const Testimonial = () => {
  const allFAQ = [
    {
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Sajib Ahmed",
      image: imag2,
      id: 1,
      location: "Borobollah",
    },
    {
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Marinda",
      image: imag1,
      id: 2,
      location: "chunta",
    },
    {
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Sizuka",
      image: imag3,
      id: 3,
      location: "koratkandi",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-start text-center">
        <div>
          <h1 className="text-primary font-bold text-1xl">Testimonial</h1>
          <h1 className="text-3xl font-semibold">What Our Patients Says</h1>
        </div>

        <img className="w-24 lg:w-48" src={quote} alt="" />
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3   sm:max-w-sm sm:mx-auto lg:max-w-full">
          {allFAQ.map((faq) => (
            <Review key={faq.id} faq={faq}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
