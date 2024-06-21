import React from 'react'
import { useAuth } from '../../utils/auth'

const Profile = () => {
  const {data,setData} = useAuth()
  console.log(data);
  if(false){
  return (
    <div className='col-span-9 shadow rounded px-6 pt-5  pb-7'>
      <h1 className='text-2xl font-medium capitalize mb'>
      Profile
      </h1>
      <div className="space-y-4">
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label for="" className='text-gray-600 mb-2 block'>First Name</label>
            <input type='text' placeholder='First Name' className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"></input>
          </div>
          <div>
            <label for="" className='text-gray-600 mb-2 block'>Last Name</label>
            <input type='text' placeholder='Last Name' className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"></input>
          </div>
        </div>
      </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label for="" className='text-gray-600 mb-2 block'>Date of Birth</label>
            <input type='date' className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"></input>
          </div>
          <div>
            <label for="" className='text-gray-600 mb-2 block'>Gender</label>
            <select className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded'>
            <option>Male</option>
            <option>Female</option>
            </select>
          </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
          <div>
            <label for="" className='text-gray-600 mb-2 block'>Email</label>
            <input type='email' placeholder='Email Address' className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"></input>
          </div>
          <div>
            <label for="" className='text-gray-600 mb-2 block'>Mobile</label>
            <input type='mobile' placeholder='Phone Number' className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"></input>
          </div>
          <div className='mt-4'>
            <button className="bg-[#106F97] rounded-xl text-white py-2 hover:scale-105 duration-300 w-full" type="submit">Edit</button>
          </div>
          <div className='mt-4'>
            <button className="bg-[#106F97] rounded-xl text-white py-2 hover:scale-105 duration-300 w-full" type="submit">Save Changes</button>
          </div>
      </div>
    </div>
  )
}


return (
  <h1>Hello</h1>
)
}

export default Profile
