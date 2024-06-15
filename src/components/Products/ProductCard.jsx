import React from 'react';

const ProductCard = (props) => {

  return (
    <div className='card' onClick={() => props.onUpdate(props.id)}>
      <img src={props.image} alt={props.title} />
      <p>Product: {props.title}</p>
      <p>Price: ${props.price}</p>
      <p>Rating: {props.rating.rate}</p>
    </div>
  )
}

export default ProductCard;
