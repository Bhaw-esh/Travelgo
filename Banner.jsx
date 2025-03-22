import React from "react";
import TravelImg from "../../assets/travelbox.png"
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100">
      <div className="min-h-[550px flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container md:px-24 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* image section */}
                <div > 
                    <img src={TravelImg} alt="" 
                    data-aos="flip-up"
                    className="max-w-[450px] h-[350px] w-full mx-auto
                    drop-shadow-[5xp_5px_12px_rgba(0,0,0,0,7)] object-cover"
                    />
                </div>
                {/* text-content section */}
                <div>
                    <h1
                    data-aos="fade-up"
                    className="text-3xl font-bold sm:text-4xl"
                    >Explore all corners of the world with us</h1>
                    <p
                    data-aos='fade-up'
                    className="text-sm text-gray-500 tracking-wide"
                    >Lorem ipsum dolor sit amet consectetur, adipisicing 
                       elit. 
                       Consectetur, ratione iusto laboriosam fuga eum 
                       repellendus neque 
                       inventore sit {" "}
                    </p>
                    <div 
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="grid grid-cols-2 gap-6">
                        <div className="space-y-6 mt-4">
                            <div className="flex justify-start items-center gap-2">
                                <MdFlight className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-violet-200"/>
                                <p>Flight</p>
                            </div>
                        </div>
                        <div className="space-y-6 mt-4">
                            <div className="flex justify-start items-center gap-2">
                                <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-orange-300"/>
                                <p>Hotel</p>
                            </div>
                        </div>
                        <div className="space-y-6 mt-4">
                            <div className="flex justify-start items-center gap-2">
                                <IoIosWifi className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-green-200"/>
                                <p>Wi-Fi</p>
                            </div>
                        </div>
                        <div className="space-y-6 mt-4">
                            <div className="flex justify-start items-center gap-2">
                                <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm rounded-full p-4 bg-yellow-200"/>
                                <p>Foods</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

