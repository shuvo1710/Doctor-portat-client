import React from "react";
import apoinment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";

const MakeAppointment = () => {
  return (
    <section>
      <div
        className="hero my-16"
        style={{ backgroundImage: `url(${apoinment})` }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-40 hidden md:block rounded-lg  lg:w-1/2"
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold text-primary">Appointment</h1>
            <h1 className="text-3xl font-bold text-white">
              Make an appointment Today
            </h1>

            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn bg-gradient-to-r from-secondary to-primary border-0">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
