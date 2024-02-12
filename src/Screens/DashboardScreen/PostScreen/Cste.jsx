import React from "react";
import ScreenPath from "../../../components/ScreenPath";
import CollapseRow from "../../../components/CollapseRow";
import { UniversityData } from "../../../MockData/PostMockData";

const CstePost = () => {
  return (
    <div className="flex flex-col flex-auto font-envoyFont text-black">
      <div className="flex">
        <ScreenPath currentPath={"Dashboard / Posts / Cste Department"} />
      </div>
      <div className="flex bg-white mx-[20px] h-[80vh] rounded-lg shadow-md flex-col">
        <h1 className="font-envoyFont my-3 mx-5 text-[24px] font-bold">
          Total Post: 82
        </h1>

        <div className="flex flex-wrap overflow-y-auto mx-5 mb-5 ">
          {UniversityData.map((item) => (
            <CollapseRow
              key={item.id}
              postTitle={item.postTitle}
              postedBy={item.postedBy}
              dateCreated={item.dateCreated}
              totalView={item.totalView}
              content={item.content}
              imageDisplay={item.imageDisplay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CstePost;
