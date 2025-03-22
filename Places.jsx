import React from 'react'
import Img1 from "../../assets/places/boat.jpg"
import Img2 from "../../assets/places/tajmahal.jpg"
import Img3 from "../../assets/places/water.jpg"
import Img4 from "../../assets/places/place4.jpg"
import Img5 from "../../assets/places/place5.jpg"
import Img6 from "../../assets/places/place6.jpg"
import PlacesCard from './PlacesCard'

const PlacesData = [
    {
        img:Img1,
        title:"Boat tour",
        location:"USA",
        description:"Experience breathtaking views and serene waters on an unforgettable boat tour adventure.",
        price:1200,
        type:"Cultural Relax"
    },
    {
        img:Img2,
        title:"Taj Mahal",
        location:"India",
        description:"The Taj Mahal is a stunning white marble mausoleum in Agra, India, symbolizing eternal love and one of the Seven Wonders of the World.",
        price:1300,
        type:"Cultural Relax"
    },
    {
        img:Img3,
        title:"Uderwater",
        location:"US",
        description:"Experience the mesmerizing world beneath the waves, where vibrant marine life and tranquility await.",
        price:1700,
        type:"Cultural Relax"
    },
    {
        img:Img4,
        title:"Sydney",
        location:"USA",
        description:"Sydney is a vibrant city known for its iconic Sydney Opera House, stunning harbor, and beautiful beaches.",
        price:6700,
        type:"Cultural Relax"
    },
    {
        img:Img5,
        title:"Los Angsles",
        location:"United States",
        description:"The vibrant City of Angels, renowned for its Hollywood glamour, diverse culture, and sunny beaches.",
        price:6700,
        type:"Cultural Relax"
    },
    {
        img:Img6,
        title:"Los Vegas",
        location:"California",
        description:"The ultimate entertainment capital, renowned for its vibrant nightlife, world-class casinos, and dazzling shows.",
        price:6200,
        type:"Cultural Relax"
    },
]

const Places = ({handleOrderPopup}) => {
    return (
      <div className="bg-gray-50 py-10">
        <div className="md:px-24 px-4">
          <h1 className="text-3xl font-bold my-8 border-l-8  border-cyan-600/50 py-2 pl-2">
            Best Places to Visit
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {PlacesData.map((item, index) => (
              <PlacesCard 
              handleOrderPopup={handleOrderPopup}
              key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Places;
  
