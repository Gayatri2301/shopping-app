import React from 'react'

const ProductCard = (props) => {
  console.log(props);
  return (
    <div className='card'>
      <img src={props.image} />
      <p>product : {props.title}</p>
      <p>price : ${props.price}</p>
      <p>rating : {props.rating.rate}</p>
    </div>
  )
}

export default ProductCard
