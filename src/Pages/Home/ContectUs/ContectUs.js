import React from "react";
import bgimage from "../../../assets/images/appointment.png";

const ContectUs = () => {
  return (
    <div
      className="hero py-16 lg:py-10"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-primary text-center">
            Contact Us
          </h1>
          <p className="py-3 text-4xl text-white">Stay connected with us</p>
        </div>
        <div className="card  w-full  shadow-2xl bg-base-100 ">
          <div className="card-body">
            <div className="form-control ">
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="subject"
                className="input input-bordered"
              />
            </div>

            <textarea
              className="textarea border-gray-300"
              placeholder="Message"
            ></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContectUs;
