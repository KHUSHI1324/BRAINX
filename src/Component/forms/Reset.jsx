import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../firebase'
import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reset(mode) {
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const email= e.target.email.value;
    sendPasswordResetEmail(auth,email).then(data=>{
      toast.success('Please check your email',{
        position:'top-center',
      });
      window.location.href='/login';
    }).catch(err=>{
      alert(err.code)
    })
  }
  return (
    <div className={`bg-gray-100 ${mode === 'dark' ? 'bg-gray-800 hover:shadow-4xl shadow-gray-200 text-white' : 'bg-gray-200 hover:shadow-xl shadow-gray-500'} p-6 rounded-lg  w-full max-w-lg font-sans `}>
      
      <h1 className=''>Foget Password</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input   className={`w-full p-3 border ${mode == 'dark' ? 'bg-gray-800 text-gray-200 border-gray-300' : 'bg-gray-100'} rounded-lg  shadow`}
                 name='email'/>
        <br/><br/>
        <button   className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
       >Reset</button>
      </form>
    </div>
  )
}

export default Reset
