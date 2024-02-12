import React from "react";
//WALA NI FUNCTION DI PUD MA CLICK HAHAAH PA CHOY LNG SA NI
const Footer = () => {
  return (
    <div className="flex font-envoyFont h-[10%] w-full top-[90%] flex-col bg-[#F5F5F5]">
      <div className="mt-[-2rem] md:max-w-[700px]  mx-auto flex md:flex-row flex-col">
        <p className="">©2022 Envoy All rights reserved</p>
        <button className="text-[#0094FF] hover:scale-105 duration-300 hover:underline  md:w-40">
          Term & Condition
        </button>
        <p className="mx-auto w-2 font-bold text-[#C6C6C6] md:flex hidden">|</p>
        <button className="text-[#0094FF] hover:scale-105 duration-300 hover:underline  md:w-40">
          Privacy Policy
        </button>
      </div>
    </div>
  );
};

export default Footer;
