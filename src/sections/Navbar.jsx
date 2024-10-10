import React, { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const Navitem = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map((item) => (
          <li className="nav-li" key={item.id}>
            <a className="nav-li_a" href={item.href} onClick={() => {}}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-black/90 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-5  mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors "
          >
            FADIL
          </a>
          <button
            className="text-neutral-400 font-bold text-xl focus:outline-none sm:hidden "
            aria-label="menu"
            onClick={() => setisopen((prev) => !prev)}
          >
            <img
              src={isopen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt=""
            />
          </button>
          <nav className="sm:flex hidden">
            <Navitem />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isopen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <Navitem />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
