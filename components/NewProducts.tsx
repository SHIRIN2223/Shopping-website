import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/1.1jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket/ L",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/3.1jpg",
    title: "Skirt",
    desc: "Black Floral Wrap Midi Skirt/ M",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/8.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes/ 37",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/6.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt/ S",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black/ 40",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/2.jpg",
    title: "Coats",
    desc: "Fushya Fur Woman Coat/ L",
    rating: 4,
    price: "120.00",
  }, 
  {
    img: "/8.1jpg",
    title: "Coats",
    desc: "Fushya Fur Woman Coat/ M",
    rating: 4,
    price: "230.00",
  },

];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16  ">
        <h2 className="font-medium text-2xl pb-4 ">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 ">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;










































































