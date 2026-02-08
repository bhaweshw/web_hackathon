import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // handle input change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto focus next
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");
    const email = localStorage.getItem("userEmail");

    if (enteredOtp.length !== 6) {
      alert("Enter complete OTP");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/verify-otp",
        {
          email: email,
          otp: enteredOtp,
        }
      );

      alert("Email verified successfully ");
      console.log(res.data);

      navigate("/home"); 

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.msg || "Invalid OTP");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <img
        src="https://cdn.dribbble.com/userupload/44327402/file/9a61e899fbe551fc94152eb6a8fe2232.jpg"
        alt="bg"
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex items-center justify-end min-h-screen p-20">
        <form
          onSubmit={handleSubmit}
          className="bg-amber-200 p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            OTP Verification
          </h2>

          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center text-xl border-2 border-black rounded-lg"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-300 py-2 rounded-full hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
