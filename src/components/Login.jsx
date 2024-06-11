import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
          <div className='md:w-1/2 px-16'>
            <h2 className='font-bold text-2xl text-[#106F97]'>Login</h2>
            <p className='text-sm mt-4 text-[#106F97]'>Already have an account, Please login</p>
            <form action='' className='flex flex-col gap-4'>
              <input className='p-2 mt-2 rounded-xl border' type='text' name='email' placeholder='Email'></input>
              <div className='relative'>
              <input className='p-2 rounded-xl border w-full' type='password' name='password' placeholder='Password'></input>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>
              </div>
              <button className='bg-[#106F97] rounded-xl text-white py-2 hover:scale-105 duration-300'>Login</button>
            </form>
            <p className='mt-5 text-xs border-b border-gray-400 py-4'>Forgot password?</p>
            <div className='mt-3 text-sm flex justify-between items-center'>
              <p>don't have an account</p>
              <button className='py-2 px-5 bg-[#106F97] text-white
               border rounded-xl hover:scale-110 duration-300'><Link to={'/register'}>Register</Link></button>
            </div>
          </div>
          <div className='md:block hidden w-1/2'>
            <img className="rounded-2xl" src='assets/image.png' alt='image'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
