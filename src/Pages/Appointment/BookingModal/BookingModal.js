import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import {AuthContext} from '../../../Context/AuthProvider'
const BookingModal = ({treatment, selectedDate,setTreatment, refetch}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP')
    const {user}= useContext(AuthContext)
    

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
        fetch('http://localhost:5000/bookings',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged){
            console.log(data)
            setTreatment(null)
            toast.success('Booking Confirmed')
            refetch()
          } 
          else{
            toast.error(data.message)
          }
          
        })
        
        
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
          <input defaultValue={user?.patient} name="userName" type="text" placeholder="Your Name" className="input input-bordered w-full " />
          <input disabled defaultValue={user?.email} name="email" type="email" placeholder="Email Address" className="input input-bordered w-full " />
          <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full " />
          <input type="submit" className="w-full bg-accent p-2 rounded-lg text-white mt-4" value="Submit" />

          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
