import React from 'react';
import { useState, useEffect } from "react";
import ShimmerList from "./Shimmer";
import {listImageURl, MenuUrl} from '../data/constant';
import { useParams } from "react-router";
import RestaurantCategory from './RestaurantCategory';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const [resDetailMenu, setresDetailMenu] = useState(null);

  const {resID} = useParams();
  // console.log("Params", resID);

  useEffect(() => {
    fecthResMenu();
  }, []);

  const fecthResMenu = async () => {
    const data = await fetch(
      MenuUrl+resID
    );

    const json = await data.json();
    setresDetailMenu(json.data);
    
  };
  if(!resDetailMenu?.cards){
    return <ShimmerList />;
  }
  // console.log("Rstaurant Details Menu", resDetailMenu);

  const {name, avgRating, cuisines } = resDetailMenu.cards[2].card.card.info;

  const {cards} = resDetailMenu.cards[4].groupedCard.cardGroupMap.REGULAR;

  // console.log("categories", cards);

  return (
    <div className="restaurantMenuPage m-10 mx-auto ">
      <h2 className='font-bold text-3xl'>{name}</h2>
      <span className='mb-5 block'>{avgRating ? `Average Rating: ${avgRating}` : ""} -- {cuisines? cuisines.join(', '): ""} </span>
      {
        cards.map((card, index)=>{
          if(card.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
            return <RestaurantCategory data={card.card.card }/>
          }
        })
      }
    </div>
  );
};

export default RestaurantMenu;