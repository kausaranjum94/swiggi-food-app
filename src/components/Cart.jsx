import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listImageURl } from '../data/constant';
import { clearCart, removeItem } from '../data/cartSlice';

const Cart = () => {
  const {items} = useSelector((state) => state.cart);
  console.log("Cart", items);

  const dispach = useDispatch();

  const handleClearCart = () =>{
    dispach(clearCart())
  }

  if(items.length === 0){
    return(
      <h2 className='text-amber-950 mt-4 font-bold'>Your Cart is Empty</h2>
    )
  }

  const cartTotal = items.reduce((total, item)=> total + item.card.info.price, 0);

  const handleRemoveItem = (removeItemID) =>{
    console.log("Remove Item button clicked");
    dispach(removeItem(removeItemID));
  }

  return (
    <div className='w-3/6 m-auto mt-2 p-3'>
      <div className='flex justify-between bg-amber-500 p-3'>
        <div className=''>
          <span>Items ({items.length})</span>
        </div>
        <div>
          <button onClick={handleClearCart} className='bg-amber-950 text-white p-2'>Clear Cart</button>
        </div>
      </div>
      {items.map((item) => (
        <div className="flex justify-between bg-amber-200 p-3 mb-3.5" key={item.card.info.id}>
          <div className="text-start">
            <h4>{item.card.info.name}</h4>
            <div>₹{item.card.info.price/100}</div>
            <button className="bg-amber-950 text-white p-2" onClick={()=>handleRemoveItem(item.card.info.id)}>Remove Item</button>
          </div>
          <div className="">
            <img className="w-24 h-24" src={listImageURl + item.card.info.imageId} />
          </div>
        </div>
      ))}
      <div className="totalCart bg-amber-950 p-3 w-2/3 text-white font-bold">
        <span>Total: ₹{cartTotal / 100}</span>
      </div>
    </div>
  );
};

export default Cart;