import React, { useEffect } from "react";

const WIP = () => {
  useEffect(() => {
    document.title = "Envoy | Under Development";
  }, []);
  return (
    <div className="flex flex-auto justify-center items-center flex-col font-envoyFont">
      <div className="bg-wip bg-no-repeat bg-contain h-[250px] w-[250px] md:h-[500px] md:w-[500px] mt-[-50px]" />
      <div className="absolute">
        <h1 className=" mt-[90px] md:mt-[170px] font-bold self-center text-[17px] md:text-[30px] text-red-400">
          PAGE UNDER DEVELOPMENT
        </h1>
      </div>
    </div>
  );
};

export default WIP;