import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <form className="relative flex items-center w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
          <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
            <img src="/Polygon 1.png" alt="Polygon 1" className="polygon-left"/>
            <div className="flex flex-col items-center w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
              <div className="w-full mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              
                </label>
                <input
                  className="username"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            
                </label>
                <input
                  className="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  className="logın-button"
                  type="button"
                >
                  Login
                </button>
              </div>
            </div>
            <img src="/Polygon 2.png" alt="Polygon 2" className="polygon-right"/>
        </div>
          </form>
        </div>
      );
    };
    
  
export default Login;