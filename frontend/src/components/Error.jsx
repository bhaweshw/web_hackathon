import React from 'react'

const Error = () => {
  return (
    <div className='relative w-full h-screen '>

        <img src="https://cdn.dribbble.com/userupload/21887326/file/original-a17cba4dee0be6ddaca7807a64206c35.gif" alt="" className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen object-cover z-0' />
        <div className='absolute inset-0 bg-black/50 bg-opacity-10 z-10'></div>
        <div className='relative z-20 flex items-center justify-center min-h-screen'>
            <h1 className='text-4xl font-bold text-white'>404 - Page Not Found</h1>
        </div>
    </div>
  )
}

export default Error
