import React from "react";

const CollapseRow = ({
  postTitle,
  postedBy,
  dateCreated,
  totalView,
  content,
  imageDisplay,
}) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow  border border-black text-black bg-white rounded-box mb-2 w-full hover:border-[#0094FF] hover:shadow-[#78b6e2] hover:shadow-sm"
    >
      <div className="collapse-title text-xl font-bold">{postTitle}</div>
      <div className="collapse-content">
        <div className="flex justify-between w-[100%] ">
          <div className="flex">
            <p>
              <span className="font-bold">Total View:</span> {totalView}
            </p>
          </div>
          <div className="flex flex-col">
            <p>
              <span className="font-bold">Posted by: </span> {postedBy}
            </p>
            <p>
              <span className="font-bold">Date Created: </span>
              {dateCreated}
            </p>
          </div>
        </div>
        <h2 className="font-bold mb-2">Description:</h2>
        <p>{content}</p>

        <img
          className="bg-[#2d2d2d] bg-cover w-[500px] h-[500px] mx-auto mt-5"
          src={imageDisplay}
          title="source: imgur.com"
        />
      </div>
    </div>
  );
};

export default CollapseRow;
