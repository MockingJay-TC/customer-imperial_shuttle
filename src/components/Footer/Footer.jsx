import React from "react";
import { SiInstagram, SiTwitter, SiLinkedin } from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#f4f8f9]">
      {/* first footer */}
      <div className="py-12 max-w-7xl mx-auto flex justify-between ">
        {/* about us */}
        <div className="w-full">
          <h4 className="text-xl font-semibold tracking-wide my-2">About Us</h4>
          <h1 className="text-3xl font-bold">Imperial Shuttle</h1>
          <p className="text-[#c8c8c8] my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos impedit saepe facilis officia ipsa eius voluptatem
            debitis quod! Praesentium, saepe?
          </p>
          {/* social */}
          <div className="flex item-center gap-4 text-[#ec3323] text-xl my-4">
            {/* facebook */}
            <RiFacebookFill className="cursor-pointer hover:animate-ping " />
            {/* twitter */}
            <SiTwitter className="cursor-pointer hover:animate-ping" />
            {/* instagram */}
            <SiInstagram className="cursor-pointer hover:animate-ping" />
            {/* linkedin */}
            <SiLinkedin className="cursor-pointer hover:animate-ping" />
          </div>
        </div>
        {/* quick links */}
        <div className="w-full">
          <h4 className="text-xl font-semibold tracking-wide my-2">
            Quick Links
          </h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support</li>
            <li>Car Listing</li>
            <li>View Booking</li>
            <li>About Us</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div className="w-full">
          <h4 className="text-xl font-semibold tracking-wide my-2">
            Quick Links
          </h4>
          {/* numbers */}
          <div className="flex items-center gap-5 my-2">
            {/* icon */}
            <GiRotaryPhone className="text-4xl text-[#ec3323]" />
            <div>
              <p>0542698778</p>
              <p>0202828448</p>
            </div>
          </div>
          {/* email */}
          <div className="flex items-center gap-5 my-2">
            {/* icon */}
            <MdEmail className="text-4xl text-[#ec3323]" />
            <div>
              <p>kwesifrimpong234@gmail.com</p>
              <p>ofosukwameama@gmail.com</p>
            </div>
          </div>
          {/* location */}

          <div className="flex items-center gap-5 my-2">
            {/* icon */}
            <MdLocationOn className="text-4xl text-[#ec3323]" />
            <div>
              <p>Hansen road 105, Madina</p>
              <p>P.O.Box 900 GT</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border" />
      {/* second footer */}
      <div className="flex justify-between max-w-7xl items-center py-6 mx-auto">
        <div>
          <h3>Copyright © RentNow 2021. All rights reserved.</h3>
        </div>
        <div className="">
          <h3 className="text-[#ec3323] text-lg">We Accept</h3>
          <span className="text-[#c8c8c8]">Momo Paypal Visa MasterCard</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
