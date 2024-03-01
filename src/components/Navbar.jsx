import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";

import logo from "../images/logo.svg";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-between lg:justify-center items-center lg:gap-32 gap-6 p-4">
      <a href="/">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-16 cursor-pointer" />
          <h1 className="text-white text-4xl font-extrabold">BetCrypt</h1>
        </div>
      </a>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="/bet">Bets</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="#">Wallets</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="#">Transactions</a>
        </li>
        <li className="bg-[#00b386] flex justify-center items-center py-2 px-7 mr-4 rounded-full cursor-pointer hover:bg-[#f9cb6f] lg:ml-20 ml-0">
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            <a href="#" target="_blank">Connect Wallet</a>
          </p>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-white md:hidden cursor-pointer text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="/">Home</a>
            </li>
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="/bet">Bets</a>
            </li>
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="#">Wallets</a>
            </li>
            <li className="mx-4 cursor-pointer my-2 text-lg">
              <a href="#">Transactions</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
