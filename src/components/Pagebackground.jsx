import React from "react";
import Footer from "./Footer";
const Pagebackground = () => {
  return (
    <div className="flex bg-envoy_pattern bg-cover bg-no-repeat w-full h-[100vh] flex-col justify-end">
      <div className="bg-[#F5F5F5] w-full 2xl:h-[32rem] xl:h-[25rem] md:rounded-[120%] h-[25rem] rounded-[10%] flex flex-col justify-end">
        <div className=" bg-[#F5F5F5] w-full 2xl:h-[17rem] xl:h-[13rem] md:rounded-t-[20%] h-[13rem]" />
        <Footer />
      </div>
    </div>
  );
};

export default Pagebackground;
