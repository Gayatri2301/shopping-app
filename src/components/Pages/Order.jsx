import React from 'react';
import { useLocation } from 'react-router-dom';


const Order = () => {
    const loc = useLocation();
    console.log(loc.state.id)
    const id = loc.state.id
  return (
    <div>
      Order Pages
      <h1>{id}</h1>
    </div>
  )
}

export default Order
