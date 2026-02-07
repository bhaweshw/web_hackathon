import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';





const signUp = () => {

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target);
        console.log(formData);
    
        // axios.post("http://localhost:5000/api/register", formData)
        //   .then((res) => {
        //     console.log(res.data);
        //     alert("Registration successful! Please check your email for the OTP.");
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     alert("Registration failed. Please try again.");
        //   });
      }


  return (
     <div className='relative min-h-screen w-full'>
      <img src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />

        <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10'></div>
       <div className="relative z-20 flex items-center justify-end p-30 min-h-screen">


    <div className='p-6'>
            
    <form className="border-gray-200 border-2 px-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-50 text-center">Sign Up</h2>

        <input
        type="name"
        placeholder="Full Name"
        className="w-full mb-3 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
      />
       <input
        type="email"
        placeholder="Email Address"
        className="w-full mb-3 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
      />
      <input
        type="Username"
        placeholder="Set Username"
        className="w-full mb-3 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
      />

      <input
        type="password"
        placeholder="Set Password"
        
        className="w-full mb-4 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
      />
      <input
        type="text"
        placeholder="Confirm Password"
        
        className="w-full mb-4 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
      />

      <h1 className="text-sm text-gray-300 text-start">Min. 8 characters, Atleast 1 number, 1 character</h1>


      <div className="flex items-center justify-between m-4">
        <button
        type="submit"
        className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-300 transition duration-300"
        onClick={handleSubmit}
      >
        Submit
      </button>
      </div>
    </form>
        </div>
  </div>

    </div>
  )
}

export default signUp;

