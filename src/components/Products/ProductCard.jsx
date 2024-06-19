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
      <button
        className='bg-[#106F97] text-white p-2 mt-2'
        onClick={(event) => addWishlist(props.id, event)}
      >
        Add to Wishlist
      </button>
      <button className='bg-[#106F97] text-white p-2 mt-2'
      onClick={(e)=>addCart(props.id,e)}
      >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
