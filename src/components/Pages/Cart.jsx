import React from 'react'
import { useAuth } from '../../utils/auth'

const Cart = () => {
  const { carts, setCarts, wishList, setWishList } = useAuth();
  const removeCart = (id) => {
    let items = [...carts];
    items = items.filter((item) => item.id !== id);
    setCarts(items);
    localStorage.setItem('carts', JSON.stringify(items));
  }
  const addWishlist = (item, event) => {
    event.stopPropagation();
    for (let i of wishList) {
      if (i.id === item.id) {
        return;
      }
    }
    let temp = [...wishList, item];
    setWishList(temp);
    localStorage.setItem('wishList', JSON.stringify(temp));
  }
  return (
    <div className=''>
      <p className=''>Items: {carts.length}</p>
      <ul>
        <div className=''>
          {carts.map((item) => (
            <div className='' key={item.id} >
              <div className=''>
              <img className='w-full' src={item.image} alt={item.title} />
              </div>
              <div className='w-1/3'>
              <p className=''>{item.title}</p>
              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating.rate}</p>
              </div>
              <div className='flex gap-2'>
                <button
                  className='bg-[#106F97] text-white p-2 mt-2'
                  onClick={() => removeCart(item.id)}
                >
                  Remove from cart
                </button>
                <button className='bg-[#106F97] text-white p-2 mt-2'
                  onClick={(e) => addWishlist(item, e)}
                >Add to wishList</button>
              </div>
            </div>

          ))}
        </div>

      </ul>
    </div>
  )
}

export default Cart
