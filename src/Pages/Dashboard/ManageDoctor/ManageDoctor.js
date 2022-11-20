import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import ActionModal from "../../Shared/ActionModal/ActionModal";

const ManageDoctor = () => {
    const [actionDoctor, setActionDoctor] = useState(null)
  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <ColorRing
          visible={true}
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  const deleteDoctor = doctor=>{
    console.log(doctor)
    fetch(`http://localhost:5000/doctors/${doctor._id}`,{
        method:'DELETE',
        headers:{
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            
            refetch()
            toast.success(`doctor ${doctor.name} deleted successfully`)
            console.log(data)
        }
        
    })
    .catch(error=>console.log(error))
  }
  return (
    <div>
      <h2 className="text-2xl mb-10">Mange Doctor: {doctors?.length} </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td><label onClick={()=>setActionDoctor(doctor)} htmlFor="action-modal" className="btn btn-sm btn-error">Delete</label></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        actionDoctor &&
        <>
         <ActionModal
         title={'Are You Sure to Want To Delete'}
         message={`If You Delete ${actionDoctor.name}. It Can Not Be Undone`}
         successAction={deleteDoctor}
         modalData={actionDoctor}
         ></ActionModal>
        </>
      }
    </div>
  );
};

export default ManageDoctor;
