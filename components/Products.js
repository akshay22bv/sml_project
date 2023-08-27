"use client";
import React, { useState } from "react";
import { images } from "../data/data.js";
import Image from "next/image";

const Products = () => {
  const imagesPerLoad = 10;
  const [displayedImages, setDisplayedImages] = useState(imagesPerLoad);
  console.log("displayedImages: ", displayedImages, images.length);

  const loadMoreImages = () => {
    setDisplayedImages((prevDisplayed) => prevDisplayed + imagesPerLoad);
  };
  return (
    <div
      id="products"
      className=" font-acme  text-black grid place-items-center"
    >
      <h1 className="p-5 text-2xl md:text-5xl font-fugas text-center text-red-500">
        Products We Provide
      </h1>

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-6 space-y-2 gap-2 text-justify">
        {images.slice(0, displayedImages).map((item, i) => {
          return <Image key={i} src={item} alt="" loading="lazy" />;
        })}
      </div>

      {displayedImages < images.length && (
        <button
          className="btn bg-black capitalize text-white my-2"
          onClick={loadMoreImages}
        >
          Show More...
        </button>
      )}
    </div>
  );
};

export default Products;
