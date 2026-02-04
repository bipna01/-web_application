import React from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 w-80">
        <h2 className="text-xl text-center mb-4">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-2"
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
        />

        <button className="bg-blue-500 text-white w-full p-2">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
