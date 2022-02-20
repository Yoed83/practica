import React from "react";

const Content = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center
     bg-white h-screen font-mono py-40"
      >
        <img
          src="reactApp\yoed\src\images\Img1.jpg"
          alt="img1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">some-text</h2>
          <p className="mb-2">text, text and text</p>
          <span>$250</span>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center
   bg-white h-screen font-mono py-40"
      >
        <img
          src="reactApp\yoed\src\images\Img1.jpg"
          alt="img1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">some-text</h2>
          <p className="mb-2">text, text and text</p>
          <span>$250</span>
        </div>
      </div>
    </>
  );
};

export default Content;
