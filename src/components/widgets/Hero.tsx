import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[450px] lg:h-[600px]">
      {/* Main content container */}
      <div className="flex w-full h-full">
        {/* Desktop View */}
        <div className="container hidden lg:flex mt-[100px] relative">
          <div className="text-left w-[70%] flex flex-col gap-6 ml-[70px]">
            <h1 className="text-black lg:text-6xl font-plus-jakarta font-extrabold leading-tight w-[105%]">
            Trusted & Affordable{" "}
              <span className="block">Heathrow Airport Parking</span>
            </h1>
            <p className="text-xs sm:text-lg text-black font-plus-jakarta w-[100%]">
            Experience secure and cost-effective parking at Heathrow Airport with Park Fly Heathrow. Choose from convenient options designed to save you time and money, ensuring a smooth and worry-free start to your journey.
            </p>
          </div>

          {/* Image on the right and slightly higher */}
          <div className="absolute top-[-20%] right-0">
            <img
              src="Ellipse 17.png"
              alt="Decorative"
              className="object-contain h-[670px]"
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="container lg:hidden flex">
          <div className="text-left flex flex-col gap-6 mt-[70px]">
            <h1 className="text-3xl text-white font-plus-jakarta font-extrabold leading-tight">
              Affordable & Secure
              <br />
              Heathrow Airport Parking
            </h1>
            <p className="text-xs sm:text-lg text-white font-plus-jakarta">
              Discover secure, budget-friendly parking at Heathrow Airport.
              Enjoy convenient options that maximize your savings and give you
              peace of mind, all while ensuring a hassle-free travel experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
