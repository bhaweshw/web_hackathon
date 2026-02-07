import React from 'react'

const OtpPage = () => {
  return (
    <div className='relative min-h-screen w-full'>
      <img src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />

        <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10'></div>
       <div class="relative z-20 flex items-center justify-end p-30 min-h-screen">


        
    <form className="border-gray-900 border-2 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-4  text-center">Otp Verification</h2>

      <input maxlength="1" className="w-12 h-12 text-center text-xl text-white mr-4 border border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" />
    <input maxlength="1" className="w-12 h-12 text-center text-xl text-white m-4 border border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" />
  <input maxlength="1" className="w-12 h-12 text-center text-xl text-white m-4 border border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"  />
  <input maxlength="1" className="w-12 h-12 text-center text-xl text-white m-4 border border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"  />
  <input maxlength="1" className="w-12 h-12 text-center text-xl text-white m-4 border border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"  />
  <input maxlength="1" className="w-12 h-12 text-center text-xl text-white ml-4 border border-black border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" />

      <button
        type="submit"
        className="w-full bg-white text-black border py-2 rounded-full hover:bg-green-500 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>

    </div>
  )
}

export default OtpPage
