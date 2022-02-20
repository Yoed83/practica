import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-6 bg-white text-black relative
    shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        YOED
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <BiMenu />
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/skills">
          Skills
        </Link>
        <Link className="p-4" to="/work">
          Work
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
