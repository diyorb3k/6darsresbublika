"use client";
import Image from "next/image";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import headerlogo from "../../../public/Where in the world_ (1).svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-[#fff]]">
      <header>
        <div className="container mx-auto shadow-custom py-[23px] flex justify-between items-center">
          {/* <Image src={headerlogo} alt="Header logo" /> */}
          <h4 className="text-[24px] font-[
800px]">Where in the world?</h4>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 p-2 rounded flex items-center"
          >
            {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />} 
            <p className="ml-2 tex  custom-paragraph">Dark Mode</p>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
