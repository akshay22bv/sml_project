import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import image from "../../assets/footerimages/footer_logo.png";

const Footer = () => {
  return (
    <div className="sm:h-1/3 font-acme bg-slate-800 text-white -z-10 grid place-items-center">
      <div className="grid sm:grid-cols-3 gap-10 text-center h-full py-5">
        <div className="max-w-sm ">
          <p className="flex items-center">
            <span>
              <BiSolidUser className="" />
            </span>
            &nbsp;Mr. Anjibabu
          </p>
          <p className="flex items-center">
            <span>
              <AiFillPhone />
            </span>
            &nbsp; +(91)-9901685450 / 9844081976
          </p>

          <p className="flex items-center">
            <span>
              <MdEmail />
            </span>
            &nbsp;smlelectronics2010@gmail.com
          </p>
        </div>
        <div className="max-w-sm ">
          <p className="flex items-center">
            <span>
              <BiSolidUser className="" />
            </span>
            &nbsp;Mr.Mallikarjuna V
          </p>
          <p className="flex items-center">
            <span>
              <AiFillPhone />
            </span>
            &nbsp; +(91)-9066999232
          </p>

          <p className="flex items-center">
            <span>
              <MdEmail />
            </span>
            &nbsp;smlinterconnection@gmail.com
          </p>
        </div>

        <div className="max-w-sm rounded-lg flex justify-center">
          <Image
            alt=""
            src={image}
            width={130}
            height={130}
            className="rounded "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
