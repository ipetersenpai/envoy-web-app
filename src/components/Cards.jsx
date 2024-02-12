import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ cardIcon, subtitle, total, NavigateTo }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(NavigateTo);
      }}
      className="h-[140px] w-[300px] bg-white m-4 rounded-xl border-l-[5px] shadow-lg border-black grid grid-cols-2 hover:border-[#0094FF] cursor-pointer"
    >
      <div className="flex h-full flex-col">
        <h2 className="ml-[20px] mt-3 font-bold text-[220%] text-black">
          {total}
        </h2>
        <p className="ml-[20px] mt-[-0.2rem] text-black">{subtitle}</p>
      </div>
      <div className="flex h-full flex-col">
        <div className={cardIcon} />
        <p className="mt-4 mx-auto text-[#0094FF] hover:underline hover:scale-105 duration-300">
          View Records
        </p>
      </div>
    </div>
  );
};

export default Cards;
