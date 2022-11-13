import { format } from "date-fns";
import React from "react";

const BookingModal = ({treatment, selectedDate,setTreatment}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = event=>{
        event.preventDefault()
        const form = event.target
        const slot = form.slot.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking= {
            appointmentDate : date,
            treatment :name,
            patient : userName,
            slot,
            email,
            phone

        }

        console.log(booking)
        setTreatment(null)
    }
  return (
    <>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleBooking} className=" grid grid-cols-1 gap-4 mt-10">
          <input type="text" disabled defaultValue={date} className="input input-bordered w-full " />
          <select name="slot" className="select select-bordered w-full ">
            
            {
                slots?.map((slot, i)=> <option key={i} value={slot}>{slot}</option>)
            }
        </select>
          <input name="userName" type="text" placeholder="Your Name" className="input input-bordered w-full " />
          <input name="email" type="email" placeholder="Email Address" className="input input-bordered w-full " />
          <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full " />
          <input type="submit" className="w-full bg-accent p-2 rounded-lg text-white mt-4" value="Submit" />

          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
