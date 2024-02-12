import React from "react";

const ScreenPath = ({ currentPath }) => {
  return (
    <div className="flex-1 bg-white content-between m-[15px] p-[10px] font-envoyFont rounded-lg shadow-md text-black">
      <p>{currentPath}</p>
    </div>
  );
};

export default ScreenPath;
