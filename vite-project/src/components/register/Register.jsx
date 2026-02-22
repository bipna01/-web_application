import React from "react";
import Input from "../input/input"

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 w-80">
        <h2 className="text-xl text-center mb-4">Register</h2>

        <div>
        <Input lableName="Name" type = "text" placeholder="Enter the name"/>
        </div>

        <div>
            <Input lableName="Email:" type="email" placeholder="Enter your email:"/>
           </div>

            <div>
            <Input lableName="Password:" type="pwd" placeholder="Enter password"/>
           </div>

        
        <button className="bg-blue-500 text-white w-full p-2">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
