import React from 'react';
import ItemList from './ItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const RestaurantCategory = ({data}) => {

  const [showList, setshowList] = useState(false);
  const handleClick = ()=>{
    setshowList(!showList);
  }
  return (
    <div className="accordionPanel text-left">
        <div onClick={handleClick} className="accordionHeader flex justify-between bg-amber-600 p-4 mb-2 rounded">
            <h4 className="text-white font-bold">{data.title}<span className='ms-1'>({data.itemCards.length})</span></h4>
            <span>{showList ? <FontAwesomeIcon icon={faChevronUp} className="text-white"/> : <FontAwesomeIcon icon={faChevronDown} className="text-white"/>}</span>
        </div>
        {
        showList ? 
          <div className="accordionBody">
              <ItemList items={data.itemCards}/>
          </div> 
        :
        ""
        }
        
    </div>
  )
}

export default RestaurantCategory