import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!username || !password){
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login", 
        {
          username: username,
          password: password
        }
      );

      console.log(res.data);

      // 🔐 Save JWT token in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful 🚀");

      navigate("/home");

    } catch (error) {
      console.log(error);
      alert(
        error?.response?.data?.message || 
        "Login failed. Check username/password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative min-h-screen w-full'>
      
      <img 
        src="https://cdn.dribbble.com/userupload/44327402/file/9a61e899fbe551fc94152eb6a8fe2232.jpg?resize=1504x752&vertical=center" 
        alt="bg"
        className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' 
      />

      <div className='absolute inset-0 bg-black/50 z-10'></div>

      <div className="relative z-20 flex items-center justify-end p-30 min-h-screen">

        <form 
          onSubmit={handleSubmit}
          className="border-gray-200 border-2 bg-amber-200 p-10 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 px-4 py-2 border-gray-900 border-2 rounded bg-blue-200"
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border-gray-900 border-2 rounded bg-blue-200"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-200 text-black border py-2 rounded-full hover:bg-blue-500 transition duration-300"
          >
            {loading ? "Logging in..." : "Submit"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default SignIn;
