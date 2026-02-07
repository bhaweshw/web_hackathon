import React from 'react'

const signUp = () => {
  return (
    <div className='relative min-h-screen w-full'>
      <img src="https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg" alt="logo" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />

      <div className="bg-gray-900 bg-opacity-10 p-8 rounded-lg shadow-lg relative z-0 w-full h-screen"></div>

       <div class="relative z-0 flex items-center justify-center min-h-screen">


        
    <form class="border-gray-200 border-2 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4 text-blue-50">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 border-gray-200 border-2 rounded text-amber-50"
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>

    </div>
  )
}

export default signUp
