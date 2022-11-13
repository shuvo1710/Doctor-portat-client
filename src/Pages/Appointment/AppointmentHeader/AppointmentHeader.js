import React, { useState } from 'react';
import chire from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bgimage from '../../../assets/images/bg.png'

const AppointmentHeader = ({selectedDate,setSelectedDate}) => {
   
    return (
        <header style={{ backgroundImage: `url(${bgimage})` }}>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse  justify-around">
    <img alt='' src={chire}  className=" rounded-lg lg:w-1/2 shadow-2xl" />
    <div>
      <DayPicker
      mode='single'
      selected={selectedDate}
      onSelect={setSelectedDate}
      
      >
      </DayPicker>
      
    </div>
    
  </div>
  
</div>
        
        </header>
    );
};

export default AppointmentHeader;