import React from 'react';
import { useAuth } from '../../utils/auth';

const WishList = () => {
  const { wishList } = useAuth();

  return (
    <div>
      <p>WishList Count: {wishList.length}</p>
      <ul>
        {wishList.map((item) => (
          <li key={item.id} className="mb-4">
            <img src={item.image} alt={item.title} className="h-24 w-24 object-contain" />
            <p>Title: {item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Rating: {item.rating.rate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
