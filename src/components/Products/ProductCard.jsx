import React, { useState } from 'react';
import { useAuth } from '../../utils/auth';

const ProductCard = (props) => {
  const {wishList,setWishList,carts,setCarts } = useAuth();
  const addWishlist = (id,event)=>{
    event.stopPropagation();
    for(let i of wishList){
      if(i.id === id){
        return;
      }
    }
    let temp = [...wishList,props]
    setWishList(temp)
    setTimeout(() => {
      localStorage.setItem('wishList',JSON.stringify(temp));
    }, 1000);
  }  
  const addCart = (id,event)=>{
    event.stopPropagation();
    for(let i of carts){
      if(i.id === id){
        return;
      }
    }
    let temp = [...carts,props];
    setCarts(temp);
    setTimeout(() => {
      localStorage.setItem('carts',JSON.stringify(temp));
    }, 2000);
    
  }
  return (
    <div className='flex flex-col justify-between shadow-xl rounded-md p-5 w-[250px]' 
    onClick={() => props.onUpdate(props.id)} >
      <img className='h-52' src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <p>Price: ${props.price}</p>
      <p>Rating: {props.rating.rate}</p>
      
      <div className='flex gap-2'>
        <div>
      <button
        className='bg-white text-white p-2 mt-2 border border-red-500 rounded'
        onClick={(event) => addWishlist(props.id, event)}
      ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 fill-red-500 hover:fill-red-600 absolute">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg><p className='text-black right-0'>Whishlist</p>
      </button></div>
      <button className='bg-[#106F97] text-white p-2 mt-2'
      onClick={(e)=>addCart(props.id,e)}
      >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
