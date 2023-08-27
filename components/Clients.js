"use client";
import React from "react";
import { clients } from "../data/data.js";
import Image from "next/image";

const Clients = () => {
  return (
    <div
      id="clients"
      className="h-[400px] font-acme text-black grid place-items-center"
    >
      <div className="m-auto w-full">
        <h1 className="p-5 text-2xl md:text-5xl font-fugas text-center text-red-500">
          Clients
        </h1>

        <marquee className="">
          <div className="flex justify-around gap-5 ">
            {clients.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={item}
                  alt=""
                  width={100}
                  loading="lazy"
                  className="p-2 sm:p-0 border border-slate-200 rounded shadow-md"
                />
              );
            })}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Clients;
