
import React from 'react'
import Background from '../components/Background'

const SignIn = () => {
  return (
    <>
    <Background />
    <div className='relative z-10 min-h-screen flex items-center justify-center px-4'>
     <div className=" flex items-center justify-center ">
      <div className="w-full bg-black p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-300 mb-2">Sign In</h2>
        <p className="text-m text-gray-300 mb-6">Enter your details below</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-m font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-120 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-m font-medium text-gray-300">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="email@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-m font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
           Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <button  className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition flex gap-7 ">
            Sign up with Google
          </button>
          <p className="mt-4 text-m text-gray-600">
            Already have an account?{' '}
            <a href="/page" className="text-purple-500 hover:underline cursor-pointer ">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
    </>

  );


};
export default SignIn