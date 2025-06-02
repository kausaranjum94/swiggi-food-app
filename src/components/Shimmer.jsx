import React from 'react';
function Shimmer() {
  return (
    <div className="AppProductCard w-1/5 relative bg-gray-200 p-4 rounded-lg">
        <div className="ShimmerCardImage">
        </div>
        <div className="ShimmerCardHeading">
        </div>
        <div className="ShimmerCardDetails">
        </div>
    </div>
    )
}

const ShimmerList = () => {
    const shimmerCount = 20;
  return (
    <div className="AppProductCardBlock my-5 flex flex-wrap justify-center gap-5">
        {Array.from({length: shimmerCount}).map((_, index) => (
            <Shimmer />
        ))}
    </div>
  )
}

export default ShimmerList

