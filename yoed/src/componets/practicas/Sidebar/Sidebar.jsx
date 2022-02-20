import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {!isOpen ? (
        <p>No open</p>
      ) : (
        <div className="top-0 right-0 fixed bg-blue-500 w-[35vw] h-full p-10">
          <h1 className=" text-2x1 text-white"> Hello people!</h1>
        </div>
      )}
    </>
  );
}
