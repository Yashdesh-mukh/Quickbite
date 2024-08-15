import React from 'react';

function Signin() {
  return (
    <div className="flex justify-center items-center min-h-screen rounded-md bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-md overflow-hidden">
       
        <div className="container w-96 bg-orange-200 h-96  p-5 flex flex-col justify-center">
          <h1 className="text-center text-xl font-bold mb-4">Create your account</h1>

          <div className="container flex flex-col p-2">
            <label htmlFor="username">Username</label>
            <input
              className="bg-inherit rounded-sm focus:outline-none border-none p-2"
              type="text"
              id="username"
              placeholder="Enter username..."
            />
          </div>

          <div className="container flex flex-col p-2">
            <label htmlFor="password">Password</label>
            <input
              className="bg-inherit rounded-sm focus:outline-none border-none p-2"
              type="password"
              id="password"
              placeholder="Enter password..."
            />
          </div>

          <div className="flex justify-center my-4">
            <button className="bg-blue-200 px-4 py-2 rounded-md">Login</button>
          </div>

          <div className="flex justify-between items-center p-2">
            <div className="flex items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2">Remember me</label>
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
  );
}

export default Signin;

