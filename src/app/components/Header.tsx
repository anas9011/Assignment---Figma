
import React from "react";

const Header = () => {
  return (
           <div><h1 className="w-[65px] h-[30px] top-[20px] left-[687px] text-[#22202E] p-2 ">Avion</h1>
    <header className=" p-6 bg-white ">
      
      <nav>
        <ul className="w-[675px] h-[22px] top-[90px] left-[382px] gap-[44px] items-center justify-center hidden md:flex  text-[#726E8D]">
          {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Cutlery"].map((item) => (
            <li key={item} className="hover:text-black cursor-pointer">{item}</li>
          ))}
        </ul>
      </nav>
      <button className="md:hidden text-gray-700">☰</button>
    </header>
    </div>
  );
};

export default Header;
