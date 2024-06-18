import React from 'react';

const ProductCard = (props) => {

  return (
    <div className='card w-[250px] p-4 rounded-md shadow-2xl' onClick={() => props.onUpdate(props.id)}>
      <img className='w-full' src={props.image} alt={props.title} />
      <p>Product: {props.title}</p>
      <p>Price: ${props.price}</p>
      <p>Rating: {props.rating.rate}</p>
    </div>
  )
}

export default ProductCard;
