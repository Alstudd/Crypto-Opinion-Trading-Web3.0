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
        {["Bets", "Transactions", "Wallets", "Forum"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#00b386] flex justify-center items-center py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f9cb6f]">
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
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
            {["Bets", "Transactions", "Wallets", "Forum"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
