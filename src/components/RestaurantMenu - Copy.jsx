import React from 'react';
import { useState, useEffect } from "react";
import ShimmerList from "./Shimmer";
import {listImageURl, MenuUrl} from '../data/constant';
import { useParams } from "react-router";

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

  console.log("Cards", cards);
  

  return (
    <div className="restaurantMenuPage">
      <h2>{name}</h2>
      <span>{avgRating ? `Average Rating: ${avgRating}` : ""} -- {cuisines? cuisines.join(', '): ""} </span>
      {cards.map((card) => {
        if(card.card.card.itemCards){
          const {itemCards, title} = card.card.card;
          return (
            <div>
              <h3>{title}</h3>
              <ul>
                {itemCards.map((itemCard)=>{
                  const {name, description, price, imageId} = itemCard.card.info;
                  return (
                    <li className="itemsCardList">
                      <div className="itemsCardContent">
                        <h4>{name}</h4>
                        <p>{price}</p>
                        <p>{description}</p>
                      </div>
                      <div className="itemsCardImage">
                        <img src={listImageURl + imageId} />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        }
      })}
    </div>
  );
};

export default RestaurantMenu;