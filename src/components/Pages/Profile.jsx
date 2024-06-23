import React from 'react'
import { useAuth } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const {data} = useAuth();
  const nav = useNavigate();
  console.log(data);
  const clicked = ()=>{
    nav('/editProfile');
  }
  

return (
  <>
  <div>
      <section className=" justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg p-5 items-center">
          <div className="md:w-1/2 px-16"></div>
          <img className='rounded-full' src='assets/profile.jpg' alt='profile'></img>
          <button onClick={clicked} >Edit profile</button>
  </div></section></div>
  </>
)
}

export default Profile
