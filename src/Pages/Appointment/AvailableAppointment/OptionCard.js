import React from 'react';

const OptionCard = ({option, setTreatment}) => {
    const {name,slots,price} = option;
    return (
        <div className="card shadow-xl">
  <div className="card-body text-center">
    <h2 className=" text-xl font-semibold text-secondary">{name}</h2>
    <p>{slots.length > 0 ? slots[0]: 'Try Another Day'}</p>
    <p className='uppercase '>{slots.length} {slots.length > 1 ? 'spaces' : 'space' } AVAILABLE</p>
    <p><small>Price: ${price}</small></p>
    <div className="card-actions justify-center">
      {/* <button className="btn btn-primary text-white">Book Appointment</button> */}
      <label disabled ={slots.length ===0} onClick={()=>setTreatment(option)} htmlFor="Booking-modal" className=" btn btn-primary text-white">Book Appointment</label>

    </div>
  </div>
</div>
    );
};

export default OptionCard;