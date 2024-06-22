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
  <h1>Hello</h1>
  <button onClick={clicked} >Edit profile</button>
  </>
)
}

export default Profile
