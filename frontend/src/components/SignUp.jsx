import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name: name,
          email: email,
          username: username,
          password: password,
        }
      );

      console.log(res.data);
      alert("OTP sent to your email");

      // store email for otp page
      localStorage.setItem("userEmail", email);

      navigate("/otp");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <img
        src="https://cdn.dribbble.com/userupload/44327402/file/9a61e899fbe551fc94152eb6a8fe2232.jpg?resize=1504x752&vertical=center"
        alt="bg"
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex items-center justify-end min-h-screen p-20">
        <form
          onSubmit={handleSubmit}
          className="bg-amber-200 p-10 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 px-4 py-2 border rounded"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-3 px-4 py-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 px-4 py-2 border rounded"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-4 py-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="text-sm mb-3">
            *Min 8 characters, 1 number, 1 special character*
          </p>

          <div className="flex gap-3">
            <button
              type="submit"
              className="w-full bg-blue-400 py-2 rounded-full hover:bg-blue-600"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => navigate("/signin")}
              className="w-full bg-orange-400 py-2 rounded-full hover:bg-orange-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
