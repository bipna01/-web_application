import React from "react";
import Input from "../input/Input";

function Login(){
    return(
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 w-80 rounded shadow-md">
               <h2 className="text-xl text-center mb-4 font-bold">Login</h2>

        
        <Input labelName="Email" type="email" placeholder="Enter your email" />
        
        
        <Input labelName="Password" type="password" placeholder="Enter your password" />

        <button className="bg-blue-500 text-white w-full p-2 rounded mt-3 hover:bg-blue-600">
          Login
        </button>

    
        <p className="text-center text-sm mt-3">
          <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
        </p>
        </div>
      </div>
     
 

    );
}
export default Login;