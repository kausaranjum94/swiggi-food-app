import React from 'react';
import ProductCard, { WithDiscountLabel } from "./ProductCard";
import mockDataArray from "../data/mockdata";
import { useState, useEffect } from "react";
import ShimmerList from "./Shimmer";
import { Link, useLocation } from "react-router";

function Content() {
  // When We pass local Json file
  //const [restaurantList, setRestaurantList] = useState(mockDataArray);

  const [restaurantList, setRestaurantList] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setfilteredResList] = useState([]);

  const RestaurantCardDiscount = WithDiscountLabel(ProductCard); 

  const location = useLocation();
  // console.log("Location", location );

  useEffect(()=>{
    if(location.pathname === "/"){
      setfilteredResList(restaurantList)
    }
    
  },[location.pathname, location.key,restaurantList,setfilteredResList])

  useEffect(() => {
    console.log("USE effect is active");
    fetchData();
  },[]);

  const fetchData = async () => {
    const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1870678&lng=79.0560311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const jsonData =  await apiData.json();

    // console.log(jsonData);
    setRestaurantList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setfilteredResList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  // if(restaurantList === ""){
  //   return <Shimmer />;
  // }


  return restaurantList === "" ? <ShimmerList /> : (
    <div className="AppContainer container mx-auto relative my-5">

      {/*----------- Search ----------*/ }
      <div className="searchBlock">
        <input className='bg-gray-100 py-5 px-5 rounded font-bold max-w-4xl' placeholder="Search Item...." value={searchText} onChange={(event)=>{
          // console.log(event);
          setSearchText(event.target.value);
        }}/>
        <button className='bg-amber-600 py-5 px-5 font-bold text-white hover:bg-black hover:text-white cursor-pointer' type="submit" onClick={() =>{
          console.log("Search text=", searchText);
          let filteredRestaurantList = restaurantList.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase().trim());
          });
          setfilteredResList(filteredRestaurantList);

        }}>Search</button>
      </div>

      {/*----------- Top Rated Items ----------*/ }
      <button
        className="topRatedItems mt-5 bg-black text-white py-4 px-5 rounded hover:bg-amber-600 hover:text-white cursor-pointer"
        onClick={() => {
          // console.log("Button Clicked");
          // console.log("Old MockDATa", restaurantList);
          const filteredRestaurantLists = mockDataArray.filter((res) => {
            return res.info.avgRating > 4.5;
          });
          setfilteredResList(filteredRestaurantLists);
          // console.log("Update MockDATa", filteredRestaurantLists);
        }}
      >
        Top Rated Items
      </button>

      {/*----------- Render ProductCard ----------*/ }
      <div className="AppProductCardBlock my-5 flex flex-wrap justify-center gap-5">
        {filteredResList.map((restaurant) => {
          return (
            <div className="AppProductCard w-1/5 relative bg-gray-200 p-4 rounded-lg " key={restaurant.info.id}>
              <Link to={"/restaurant/"+restaurant.info.id}>
                {restaurant.info.aggregatedDiscountInfoV3 ? <RestaurantCardDiscount resdata={restaurant} /> : <ProductCard resdata={restaurant} />}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Content;