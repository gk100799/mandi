import React from "react";
import "./dropdown.css";

const NavBar = () => {
  return (
    <nav className="flex justify-between m-2 h-24">
      {/* Brand Logo */}
      <div id="brand" className="text-xl sm:text-2xl xs:text-2xl">
        <span>Mandi</span>
      </div>
      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search Mandi"
          className="border-2 border-black  my-2 px-4 py-1 rounded-md"
        />
      </div>

      {/* Login Button and Signup Button  */}
      {/* Other Settings Menu */}
      <div className="flex justify-evenly ">
        <button className="hover:bg-black hover:text-white transition duration-300 ease-in-out h-10 hidden m-2 px-4 py-1 rounded-md border-2 border-black   xs:block sm:block">
          Login
        </button>
        <button className="hover:bg-black hover:text-white transition duration-300 ease-in-out h-10 hidden m-2 px-4 py-1 rounded-md border-2 border-black   xs:block sm:block ">
          Signup
        </button>
      </div>
      {/* Dropdown button and menu */}
      <div id="avatar-dropdown" className="drop">
        <button
          onClick=""
          id="drop-button"
          className="hover:bg-black hover:text-white transition duration-300 ease-in-out block m-2 px-4 py-2 rounded-full border-2 border-black"
        >
          A
        </button>
        <div
          id=""
          className="menu w-48 text-center bg-white rounded-md border-2 border-black p-4"
        >
          <a
            className="block hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-md"
            href="#settings"
          >
            Settings
          </a>
          <a
            className="block hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-md"
            href="#tnc"
          >
            Terms and Conditions
          </a>
          <a
            className="block hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-md"
            href="#login"
          >
            Login/Signup
          </a>
        </div>
      </div>
      {/* Login Button and Signup Button  */}
      {/* Other Settings Menu */}
    </nav>
  );
};

export default NavBar;
