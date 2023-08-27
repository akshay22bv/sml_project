"use client";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="h-screen font-acme  text-black grid place-items-center"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="p-5 text-2xl md:text-5xl font-fugas text-center text-red-500">
          GET IN TOUCH
        </h1>
        <p className="flex items-center">
          <span>
            <AiFillPhone />
          </span>
          &nbsp; +(91)-9901685450 / 9844081976
        </p>
        <div className="py-2"></div>
        <p className="flex items-center">
          <span>
            <MdLocationPin />
          </span>
          &nbsp; 9/22. 2nd Floor 4th Main road 7th Cross Industrial Town
          Rajajinagar Bangalore-560044
        </p>
      </div>

      <form
        action="https://getform.io/f/f56ab7cb-cd81-4374-a75e-c0c9e6c07c62"
        method="POST"
        className="flex flex-col gap-3 w-full max-w-xl"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          required
          className="border-black border  p-2 rounded"
        ></input>

        <input
          type="email"
          name="user_emmail"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          placeholder="Email"
          required
          className="border-black border p-2 rounded"
        ></input>

        <textarea
          placeholder="Message"
          name="message"
          required
          className="border border-black  p-2 rounded "
        ></textarea>
        <button className="btn bg-black text-white capitalize">
          {/* <button className="border-black border rounded py-1 text-xl font-semibold font-Passion bg-white md:bg-orange-400 text-black"> */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
