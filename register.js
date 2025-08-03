import React, { useState } from 'react';
import logo from './assest/logo.png';
import home from './assest/home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGoogle , FaFacebook} from "react-icons/fa";

function Register() {
  const [userName , setUserName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')

  const handleName = (e) => {
    setUserName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleconPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div className="flex h-full">
      <div className="  w-9/12">
        <img
        className='h-16 ml-16 '
        src={logo}></img>
        <p className='text-green-800 text-4xl font-bold ml-20 '>Sign Up</p>
        <div className='ml-0'>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md   max-w-sm mt-2 ml-44">
      <h2 className="text-xl font-bold mb-2">Just some details to get you in!</h2>

      <div className="mb-4">
        <input
          type="text"
          id="username" 
          value={userName}
          onChange={handleName}
          className="shadow appearance-none border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  

          placeholder="Username"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          id="email"
          className="shadow appearance-none border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"   

          placeholder="Email / Phone"
        />
      </div>

      <div className="mb-4">
        <input
          type="password"   
          value={password}
          onChange={handlePassword}
          id="password"
          className="shadow appearance-none border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
          placeholder="Password"
        />
      </div>

            <div className="mb-6  ">

        <input
          type="password" 
          onChange={handlec}
          id="password"
          className="shadow appearance-none border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
          placeholder="Confirm Password"
        />
      </div>

      <div className="mb-4"> 

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  
 w-full"
          type="button"
        >
          Signup   

        </button>
      </div>

      

      <p className="text-center text-gray-500 text-xs">
        Already Registered? <a href="#" className="text-blue-500 hover:underline">Login</a>
      </p>
      <div>        <div className="text-center text-gray-700  ">Or</div>
      <div className="flex justify-center mb-4">
   <button > 
    <FaGoogle style={{ color: 'black', fontSize: '30px' }}/>

  </button>
  <button className='ml-5'>
  <FaFacebook style={{ color: 'blue', fontSize: '33px' }}/>
  </button>
</div>
</div>
      <div className="text-center text-gray-500 text-xs mt-4">
        <a href="#" className="mr-2 hover:underline">Terms & Conditions</a>
        <a href="#" className="mr-2 hover:underline">Support</a>
        <a href="#" className="hover:underline">Customer Care</a>
      </div>
    </div>
        </div>
        
      </div>
      <div>
        <img className='z-50 h-96 w-auto absolute top-40 left-2/4 border rounded-lg' src={home}></img>
      </div>
      <div className="h-screen bg-green-800 w-1/4"></div>
    </div>
  );
}

export default Register;

