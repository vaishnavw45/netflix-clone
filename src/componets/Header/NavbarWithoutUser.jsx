import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarWithoutUser() {
  const [show, handleShow] = useState(false);
<<<<<<< HEAD
=======

>>>>>>> becf846 (msg)
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <header
        className={`fixed z-50 w-full flex items-center py-4 transition duration-500 ease-in-out ${
          show && "bg-black transition duration-500 ease-in-out"
        }`}
      >
        <div className="w-9/12 md:w-11/12">
          <img
            className="h-8 sm:h-10 sm:w-18 ml-8 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="NETFLIX"
          />
        </div>

        <div>
          <Link to="/signin">
            <button className="bg-red-600 px-8 rounded-sm py-2 text-white text-base font-bold mr-4 lg:mr-0">
              Login
            </button>
          </Link>
        </div>
      </header>
    </div>
=======
    <header
      className={`fixed z-50 w-full flex justify-between items-center px-10 py-2 transition duration-500 ease-in-out ${
        show ? "bg-black shadow-lg" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-10 sm:h-10 object-contain cursor-pointer"
          src="/src/images/streamXlogo.png"
          alt="StreamX"
        />
      </div>

      {/* Login Button */}
      <div className="flex items-center">
        <Link to="/signin">
          <button className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 rounded-md py-2 text-white text-sm sm:text-base font-bold transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </header>
>>>>>>> becf846 (msg)
  );
}

export default NavbarWithoutUser;
