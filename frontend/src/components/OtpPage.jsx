import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const OtpPage = () => {

  const Navigate = useNavigate();
  let [otp, setOtp] = useState(["", "", "", "", "", ""]);

  oninput = function(e) {
    setOtp((otp) => {
      otp[e.target.index] = e.target.value;
      return otp;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   Navigate("/home");
    };
  

  return (
    <div className='relative min-h-screen w-full'>
      <img src="https://cdn.dribbble.com/userupload/44327402/file/9a61e899fbe551fc94152eb6a8fe2232.jpg?resize=1504x752&vertical=center" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />

        <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10'></div>
       <div className="relative z-20 flex items-center justify-end p-30 min-h-screen">


        
    <form className="border-gray-900 border-2 bg-amber-200 p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-4  text-center">Otp Verification</h2>

      <input maxLength="1" className="w-12 h-12 text-center text-xl  mr-4  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" onChange={oninput}  />
      <input maxLength="1" className="w-12 h-12 text-center text-xl  m-4  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"  onChange={oninput}/>
      <input maxLength="1" className="w-12 h-12 text-center text-xl  m-4  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" onChange={oninput} />
      <input maxLength="1" className="w-12 h-12 text-center text-xl  m-4  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" onChange={oninput} />
      <input maxLength="1" className="w-12 h-12 text-center text-xl  m-4  border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"  onChange={oninput}/>
      <input maxLength="1" className="w-12 h-12 text-center text-xl  ml-4 border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" onChange={oninput}/>

      <button
        type="submit"
        className="w-full bg-blue-200 text-black border py-2 rounded-full hover:bg-blue-500 transition duration-300"
        onClick={handleSubmit}>
        Submit
      </button>
    </form>
  </div>

    </div>
  )
}

export default OtpPage
