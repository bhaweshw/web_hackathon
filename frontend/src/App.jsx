import React from 'react'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import OtpPage from './components/OtpPage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  )
}

export default App
