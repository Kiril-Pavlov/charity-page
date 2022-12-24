import React from "react";

import heroImg1 from "../assets/home-hero-img-1.png";
import heroImg2 from "../assets/home-hero-img-2.png";

const HomeHero = () => {
  return (
    <div>
      <div className="max-w-5xl my-5 mx-auto p-4 flex flex-col gap-10 md:flex-row justify-between">
        <img
          src={heroImg1}
          alt="Hearts in a bowl"
          className="max-w-lg m-auto"
        />
        <div className="flex flex-col justify-between py-10">
          <div>
            <h2 className="font-primaryFont text-2xl font-bold mb-3 w-1/2">
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              consequatur ipsam ducimus voluptatem! Repellendus ratione minima
              minus dolor enim ipsam quis deserunt incidunt molestiae. Aut rerum
              blanditiis nostrum magnam ut?
            </p>
          </div>
          <div>
            <div className="flex gap-3 mt-8">
              <div className="h-1 w-10 bg-primaryColor"></div>
              <div className="h-1 w-10 bg-primaryColor"></div>
              <div className="h-1 w-10 bg-primaryColor"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl my-5 mx-auto p-4 flex flex-col gap-10 md:flex-row justify-between">
        <div className="flex flex-col md:w-1/2 justify-center">
          <h2 className="font-primaryFont text-2xl font-bold mb-3 w-1/2">
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consequatur ipsam ducimus voluptatem! Repellendus ratione minima
            minus dolor enim ipsam quis deserunt incidunt molestiae. Aut rerum
            blanditiis nostrum magnam ut?
          </p>
        </div>
        <img src={heroImg2} alt="Day of charity"  className="w-2xl m-auto"/>
      </div>
    </div>
  );
};

export default HomeHero;
