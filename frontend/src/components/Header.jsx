import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { IoMdMenu } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-full bg-white py-2 border-b-2 px-4 lg:mx-0">
        <div className="flex items-center justify-between lg:w-[1240px] md:w-full w-full  mx-auto  ">
          <Link
            to="/"
            className="flex items-center justify-center md:gap-1 gap-2 flex-nowrap"
          >
            <img
              src={logo}
              alt="logo"
              className="md:size-12 size-14 rounded-md"
            />
            <p className="md:text-xl text-2xl font-bold">Vibration</p>
          </Link>

          <div className="hidden md:flex items-center justify-center">
            <Link to="/" className="mr-8 text-gray-500">
              Home
            </Link>
            <Link to="/create">
              <button className="bg-blue-400 hover:bg-blue-500 text-white py-3 w-[150px] text-nowrap rounded-md mr-2">
                Add
              </button>
            </Link>
          </div>
          <div className="md:hidden flex">
            {isOpen ? (
              <IoClose
                className="text-3xl mr-3"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <IoMdMenu
                className="text-3xl mr-3"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="flex items-center justify-start gap-2 flex-nowrap px-5">
          <div className="w-full py-3 px-2 flex items-start justify-between">
            <Link to="/create" onClick={() => setIsOpen(false)}>
              <button className="bg-blue-400 hover:bg-blue-500 text-white w-[60px] py-3 flex-1 text-nowrap rounded-md mr-2 flex items-center justify-center">
                <IoMdAddCircle className="text-2xl" />
              </button>
            </Link>
          </div>
          <Link
            to="/"
            className="ml-8 text-gray-500 "
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
