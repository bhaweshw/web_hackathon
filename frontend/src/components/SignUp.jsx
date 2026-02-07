import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';





const signUp = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = {
            name: name,
            email: email,
            username: username,
            password: password,
            confirmPassword: confirmPassword
          };
        console.log(formData);
    
        // axios.post("http://localhost:5000/api/register", formData)
        //   .then((res) => {
        //     Navigate("/otp");
        //     console.log(res.data);
        //     alert("Registration successful! Please check your email for the OTP.");
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     alert("Registration failed. Please try again.");
        //   });
      }


  return (
     <div className='relative min-h-screen w-full '>
      <img src="https://images.pexels.com/photos/586072/pexels-photo-586072.jpeg" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />

        <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10'></div>
       <div className="relative z-20 flex items-center justify-end p-30 min-h-screen">


    <div className='p-6'>
            
    <form className="border-gray-200 border-2 bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

        <input
        type="name"
        placeholder="Full Name"
        className="w-full mb-3 px-4 py-2 border-gray-900 border-2 rounded"
        onChange={(e)=>setName(e.target.value)}
      />
       <input
        type="email"
        placeholder="Email Address"
        className="w-full mb-3 px-4 py-2 border-gray-900 border-2 rounded"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="Username"
        placeholder="Set Username"
        className="w-full mb-3 px-4 py-2 border-gray-900 border-2 rounded "
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Set Password"
        
        className="w-full mb-4 px-4 py-2 border-gray-900 border-2 rounded "
        onChange={(e)=>setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Confirm Password"
        
        className="w-full px-4 py-2 border-gray-900 border-2 rounded "
        onChange={(e)=>setConfirmPassword(e.target.value)}
      />

      <h1 className="text-sm text-gray-900 px-2 font-medium">*Min. 8 characters, Atleast 1 number, 1 character*</h1>


      <div className="flex items-center justify-between m-4">
        <button
        type="submit"
        className="w-full bg-white text-black border  py-2 rounded-full hover:bg-gray-300 transition duration-300 font-medium text-lg"
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

