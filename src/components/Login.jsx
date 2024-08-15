import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen rounded-md bg-gray-100">
      <div className="flex align-center bg-white shadow-lg rounded-md overflow-hidden">
       
        <div className="left w-96 bg-white h-96  p-5 flex flex-col ">
          <h1 className="text-center text-xl font-bold mb-4">Create your account</h1>

          <div className="container flex flex-col p-2">
            <label htmlFor="username">Username</label>
            <input
              className="bg-white border-none p-2 focus:outline-none focus:ring-0 focus:border-gray-500 border-b border-gray-300"
              type="text"
              id="username"
            />
          </div>

          <div className="container flex flex-col p-2">
            <label htmlFor="password">Password</label>
            <input
              className="bg-transparent border-none p-2 focus:outline-none focus:ring-0 focus:border-gray-500 border-b border-gray-300"
              type="password"
              id="password"
            />
          </div>

          <div className="flex justify-center my-4">
            <button className="bg-blue-200 px-4 py-2 rounded-md">Login</button>
          </div>

          <div className=" p-2">
            <div className="flex items-center">
            <p>Dont have a account? <a href="">Signup for free!</a></p>
            </div>
            <a href="#" className="text-blue-500">Forgot password?</a>
          </div>
        </div>

        <div className="right w-96">
          <img
            src="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg"
            alt="Delicious food"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
