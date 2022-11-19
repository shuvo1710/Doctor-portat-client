import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader/Loader";
import BookingModal from "../BookingModal/BookingModal";
import OptionCard from "./OptionCard";

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([])
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOption?date=${date}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return (
      <div className="h-full items-center">
        <Loader></Loader>
      </div>
    );
  }

  // useEffect(()=>{
  //     fetch('http://localhost:5000/appointmentOption')
  //     .then(res=>res.json())
  //     .then(data=>setAppointmentOptions(data))
  // },[])
  return (
    <section className="lg:mt-32 pb-4">
      <p className="text-center text-secondary text-xl w-3/5 mx-auto lg:w-full">
        Available Appointments on {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        {
          // treatment &&
          appointmentOptions?.map((option) => (
            <OptionCard
              key={option._id}
              option={option}
              setTreatment={setTreatment}
            ></OptionCard>
          ))
        }
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
