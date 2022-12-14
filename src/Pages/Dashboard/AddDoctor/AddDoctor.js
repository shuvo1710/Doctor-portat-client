import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {data: doctorSpecialty = [],isLoading } = useQuery({
        queryKey : ['doctorSpecialty'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = res.json()
            return data
        }

    })
    if(isLoading){
        return <div className='h-full flex justify-center items-center'><ColorRing
        visible={true}
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /></div>
    }


    const imgBb= process.env.REACT_APP_imgBBkey
    
    const handleDoctor = data=>{
        // console.log(data)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        
        
        const url=`https://api.imgbb.com/1/upload?key=${imgBb}`
        fetch(url,{
           method:'POST',
           body: formData
        })
        .then(res=> res.json())
        .then(imgData=> {

            if(imgData.success){
                const doctors={
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url,
                }
                fetch('http://localhost:5000/doctors',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify(doctors)
                })
                .then(res=> res.json()
                .then(result =>{
                    if(result.acknowledged){
                        toast.success(`${data.name} added successfully`)
                        navigate('/dashboard/manageDoctor')
                        
                    }
                } ))
            }
            })
        .catch(error=> console.log(error))
    
    }   
    return (
        <div className='w-96 p-7'>
            <h1 className='text-4xl'> add Doctor</h1>

            <form onSubmit={handleSubmit(handleDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Select Specialty Doctor</span></label>
                        <select {...register("specialty",{required: true})} className="select select-bordered w-full max-w-xs">
                            {
                                doctorSpecialty.map(specialty=>
                                <option key={specialty._id} >{specialty.name}</option>
                                )
                            }
                        </select>
                        
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className=" w-full max-w-xs" />
                        
                    </div>
                    <input className='btn btn-accent w-full mt-4 text-white' value="Add Doctor" type="submit" />
                   
                </form>
        </div>
    );
};

export default AddDoctor;