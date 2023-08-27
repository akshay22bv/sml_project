import { tool } from "@/data/data";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <div id="tool" className=" font-acme  text-black grid place-items-center">
      <h1 className="p-5 text-2xl md:text-5xl font-fugas text-center text-red-500">
        Tools We Use
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-justify">
        {tool.map((item, i) => {
          return (
            <div
              key={i}
              className="overflow-hidden h-36  flex items-center justify-center px-3 border rounded-md"
            >
              <Image
                key={i}
                src={item}
                alt=""
                width={100}
                className="hover:scale-110 duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
