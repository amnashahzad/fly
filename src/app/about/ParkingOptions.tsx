"use client"; // Add this line

import React, { useState } from "react";

const ParkingOptions = () => {
  const [hoveredBox, setHoveredBox] = useState("Diverse Parking Options");

  const handleMouseEnter = (box: string) => setHoveredBox(box);
  const handleMouseLeave = () => setHoveredBox("Diverse Parking Options");

  const boxStyles = (box: string) => ({
    borderRadius: "0px 50px 0px 50px",
    backgroundColor: hoveredBox === box ? "#F26922" : "white",
    color: hoveredBox === box ? "white" : "black",
  });

  return (
    <div className="relative">
      <section className="py-12 relative">
      <div className="absolute top-0 left-[-10%] z-0">
          <img
            src="/Ellipse 18.png"
            alt="Decorative"
            className="object-contain h-[850px] w-[650px]"
          />
        </div>
        {/* <div className="absolute top-0 left-[-10%]">
          <img
            src="/Ellipse 18.png"
            alt="Decorative"
            className="object-contain h-[850px] w-[650px]"
          />
        </div> */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-11">
            <div>
              {/* Updated "What We Offer" Heading */}
              <h2 className="text-[25px] font-semibold mb-4 mt-[70px] ml-[-120px]">What We Offer</h2>

              {/* Updated "Comprehensive Parking Solutions" Heading */}
              <h3 className="text-[35px] font-bold mb-4 w-[200%] ml-[-120px]" style={{ letterSpacing: "1px", lineHeight: "1.2" }}>
                Comprehensive Parking Solutions Tailored For You
              </h3>

              {/* Updated Description */}
              <p className="text-gray-700 mb-6 ml-[-120px] w-[145%]">
                At Budget Parking Heathrow, We Offer A Variety Of Parking Options To Suit Your Needs, From Park And Ride To Meet And Greet Services. Enjoy Easy Online Booking With The Best Rates Guaranteed, 24/7 Customer Support, And Reliable Shuttle Transfers That Ensure A Seamless Experience To And From Heathrow Terminals.
              </p>
            </div>

            {/* Content Boxes */}
            <div
              className="absolute text-sm left-[50%] mt-[75px] p-11 text-start w-[19%] h-[30%] justify-center items-center transition-all duration-300"
              style={boxStyles("Diverse Parking Options")}
              onMouseEnter={() => handleMouseEnter("Diverse Parking Options")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-lg text-center w-[150%] h-[30%] font-bold mt-[-23px] ml-[-40px]">
                Diverse Parking Options
              </h3>
              <p className="mt-2 w-[150%] text-center ml-[-40px] mt-[20px]">
                Including Park And Ride, Meet And Greet, Long-Stay, And Short-Stay Services.
              </p>
            </div>

            {/* Adjusted 24/7 Support Section */}
            <div
              className="absolute left-[50%] text-center mt-[20%] p-11 text-start w-[19%] h-[30%] justify-center items-center transition-all duration-300"
              style={boxStyles("24/7 Support")}
              onMouseEnter={() => handleMouseEnter("24/7 Support")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-lg text-center w-[150%] h-[30%] font-bold mt-[-23px] ml-[-40px]">
                24/7 Support
              </h3>
              <p className="mt-2 w-[150%] text-center ml-[-40px] mt-[20px]">
                Round-the-clock assistance for a smooth, worry-free experience.
              </p>
            </div>

            {/* Easy Booking Section */}
            <div
              className="absolute left-[75%] text-center mt-[6%] p-11 text-start w-[19%] h-[30%] justify-center items-center transition-all duration-300"
              style={boxStyles("Easy Booking")}
              onMouseEnter={() => handleMouseEnter("Easy Booking")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-lg text-center w-[150%] h-[30%] font-bold mt-[-23px] ml-[-40px]">
                Easy Booking
              </h3>
              <p className="mt-2 w-[150%] text-center ml-[-40px] mt-[20px]">
                User-Friendly Online Reservations With Guaranteed Best Rates.
              </p>
            </div>

            {/* Reliable Transfers Section */}
            <div
              className="absolute left-[75%] text-center mt-[20%] p-11 text-start w-[19%] h-[30%] justify-center items-center transition-all duration-300"
              style={boxStyles("Reliable Transfers")}
              onMouseEnter={() => handleMouseEnter("Reliable Transfers")}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-lg text-center w-[150%] h-[30%] font-bold mt-[-23px] ml-[-40px]">
                Reliable Transfers
              </h3>
              <p className="mt-2 w-[150%] text-center ml-[-40px] mt-[20px]">
                Quick And Efficient Shuttle Services To And From Heathrow Terminals.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ParkingOptions;
