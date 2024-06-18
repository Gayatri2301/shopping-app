import React, { useState } from 'react';

const ProductCard = (props) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (id, event) => {
    event.stopPropagation(); 
    setWishList([...wishList, id]);
    
  };

  return (
    <div className='card shadow-2xl rounded-md p-5 w-[250px]' onClick={() => props.onUpdate(props.id)}>
      <img className='h-52' src={props.image} alt={props.title} />
      <p>Product: {props.title}</p>
      <p>Price: ${props.price}</p>
      <p>Rating: {props.rating.rate}</p>
      <button
        className='bg-[#106F97] text-white p-2 mt-2'
        onClick={(event) => addToWishList(props.id, event)}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductCard;
