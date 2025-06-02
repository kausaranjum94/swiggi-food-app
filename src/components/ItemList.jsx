import React, { useState } from "react";
import { listImageURl } from "../data/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from 'react-redux';
import {addItem} from "../data/cartSlice";

const ItemList = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(null); 

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log("Item ID", item);
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => {
        const { name, description, imageId, id, price } = item.card?.info || {};
        const { rating, ratingCount } = item.card?.info?.ratings?.aggregatedRating || {};
        const shortDescription = description?.length > 100 ? description.slice(0, 100) : description;
        // console.log("expandedItem",expandedItem);
        return (
          <div key={id} className="p-3 bg-amber-50 mb-3`">
            <div className="itemsCardList flex justify-between align-middle">
              <div className="itemsCardContent">
                <h4 className="font-bold">{name}</h4>
                <div>₹{price/100}</div>
                <p className="text-sm">
                  <span className="font-bold text-green-700">
                    <FontAwesomeIcon icon={faStar} size="xs" color="#ffbf00" /> {rating}
                  </span>
                  {ratingCount ? <span className="font-bold text-gray-500"> ({ratingCount})</span> : ""}
                  
                </p>
                <p className="text-gray-600 mt-2">
                  {expandedItem === id ? description : shortDescription}
                  <span
                    className="moreTag"
                    onClick={() =>
                      setExpandedItem(expandedItem === id ? null : id)
                    }
                  >
                    {expandedItem === id ? " Less..." : " More..."}
                  </span>
                </p>
              </div>
              <div className="itemsCardImage relative">
                <img src={listImageURl + imageId} alt={`Image of ${name}`} />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <button className='bg-green-700 py-1 px-3 font-bold font-sm rounded text-white hover:bg-black hover:text-white cursor-pointer ' onClick={(()=> handleAddToCart(item))}>ADD+</button>
                  </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
