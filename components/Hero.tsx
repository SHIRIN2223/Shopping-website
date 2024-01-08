"use client";

import React from 'react'
import Slide from "./Slide";
import Slider from "react-slick";

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideDate = [
        {
            id: 0,
            img: '/limon3.jpg',
            title: 'Trending Item',
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$30",
        },
        {
            id: 1,
            img: "/aynek.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$20",
        },
        {
            id: 2,
            img: "/limon1.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$14",
        },
    ];
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
          {slideDate.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
             ))}

          </Slider>
      </div>
    </div>
  )
}

export default Hero
