"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import About from "@/components/About";
import Products from "@/components/Products";
import ContactUs from "@/components/ContactUs";
import Clients from "@/components/Clients";
import Home from "@/components/Home";
import Tools from "@/components/Tools";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const page = () => {
  const [scrolling, setScrolling] = useState(window.scrollY > 30);

  const onScroll = () => {
    setScrolling(window.scrollY > 30);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      {scrolling && (
        <Link
          to="hero"
          className="fixed bottom-10 right-5 animate-bounce z-50 cursor-pointer  text-green-400"
          smooth={true}
          duration={500}
        >
          <BsFillArrowUpCircleFill size={30} />
        </Link>
      )}
      <div className="bg-gradient-to-tr from-white via-blue-100  to-white">
        <Navbar />
        <Home />
      </div>
      <div className="px-10  ">
        <About />
        <Products />
        <Tools />
        <Clients />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default page;
