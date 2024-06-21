import React from "react";
import { useAuth } from "../../utils/auth";

const WishList = () => {
  const { wishList, setWishList, carts, setCarts } = useAuth();

  const removeWishList = (id) => {
    let items = [...wishList];
    items = items.filter((item) => item.id !== id);
    setWishList(items);
    localStorage.setItem("wishList", JSON.stringify(items));
  };
  const addCart = async (item, event) => {
    event.stopPropagation();
    for (let i of carts) {
      if (i.id === item.id) {
        return;
      }
    }
    let temp = [...carts, item];
    await setCarts(temp);
    localStorage.setItem("carts", JSON.stringify(temp));
  };

  return (
    <div>
      <p>Items: {wishList.length}</p>
      <ul>
        <div className="flex gap-2 flex-row">
          {wishList.map((item) => (
            <div
              className="flex flex-col justify-between shadow-xl rounded-md p-5 w-[250px]"
              key={item.id}
            >
              <img className="h-52" src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating.rate}</p>

              <div className="flex gap-2">
                <button
                  className="bg-[#106F97] text-white p-2 mt-2"
                  onClick={() => removeWishList(item.id)}
                >
                  Remove
                </button>
                <button
                  className="bg-[#106F97] text-white p-2 mt-2"
                  onClick={(e) => addCart(item, e)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default WishList;
