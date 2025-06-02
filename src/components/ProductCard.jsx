import React from 'react';
import {ImageURl} from '../data/constant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
  // console.log("Props", props);
  const {name, cuisines, avgRatingString, cloudinaryImageId, veg } = props.resdata.info;
  const {slaString} = props.resdata.info.sla;
  // const {description} = props.resdata.info.badgesV2.entityBadges.imageBased.badgeObject.attributes;
  return (
     <div className='ProductCard'>
        <div className='relative'>
          {veg ? <span className='isVeg bg-green-800 py-1 px-3 rounded text-sm font-bold absolute bottom-2 right-2 text-white'>Veg</span> : ""}
          <img src={ImageURl + cloudinaryImageId} />
        </div>
        <h4 className='font-bold text-gray-900 py-2'>{name}</h4>
        <p className='text-sm text-gray-600 mb-3'>{cuisines.join(', ')}</p>
        <div className='AppProductCardDetails flex justify-between'>
          <span><FontAwesomeIcon icon={faStar} size='xs' flip color="#ffbf00" />{avgRatingString}</span>
          <span className='text-sm'>{slaString}</span>
        </div>
    </div>
  )
}

export const WithDiscountLabel = (ProductCard) =>{
  return (props)=>{
    // console.log("HOF", props);
    const {header, subHeader} = props.resdata.info.aggregatedDiscountInfoV3
    return(
      <div className="cardWithDiscount">
        <label className='absolute top-5 right-5 z-10 bg-black py-1 px-3 rounded text-white text-xs font-bold'>{header + "-" + subHeader}</label>
        <ProductCard resdata={props.resdata}/>
      </div>
    )
    
  }
}

export default ProductCard;