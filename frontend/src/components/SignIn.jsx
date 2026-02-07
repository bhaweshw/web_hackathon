import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

        const Navigate = useNavigate();
    const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
          username: username,
          password: password
        };

        console.log(formData);

        Navigate("/home");

        // axios.post('http://localhost:5000/api/login', formData)
        // .then((res) => {
        //     navigate("/home");
        // })
        // .catch((error) => {
        //     console.log(error);
        //     alert("Login failed. Please check your credentials and try again.");
        // });
      }




  return (
    <div className='relative min-h-screen w-full'>
      <img src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />

        <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10'></div>
       <div className="relative z-20 flex items-center justify-end p-30 min-h-screen">


        
    <form className="border-gray-200 border-2 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-50 text-center">Login</h2>



      <input
        type="Username"
        placeholder="Username"
        className="w-full mb-3 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-300 transition duration-300"
        onClick={handleSubmit}

      >
        Submit
      </button>
    </form>
  </div>

    </div>
  )
}

export default SignIn;