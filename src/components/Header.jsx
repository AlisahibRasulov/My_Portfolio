// import React from 'react'
// import Logo from "../image/Logo.png"
// import BurgerMenu from "../image/burger-menu.png"

// // import { NavLink, Outlet } from "react-router-dom";

// const Header = () => {
//   return (
//       <div className='header z-[1000] bg-[black] flex items-center justify-between opacity-[0.8] fixed w-full top-0 text-[white] sm:flex-wrap sm:items-start 2xs:flex-wrap 2xs:items-start xs:flex-wrap xs:items-start  '>
       
//             <div className="header_logo w-[90px] ml-[20px]">
//               <img src={Logo} alt="" className='w-full'/>
//             </div>
//             <div className="burger-menu mr-[40px] xl:hidden lg:hidden md:hidden sm:w-[40px] sm:mt-[20px] 2xs:w-[35px] 2xs:mt-[20px] xs:w-[30px] xs:mt-[20px] ">
//               <img src={BurgerMenu} alt="" />
//             </div>
            
//               <ul className="header_navbar flex  sm:w-full  sm:flex-col sm:items-center sm:bg-[black] sm:opacity-[0.8] sm:gap-[15px]  2xs:w-full 2xs:flex-col 2xs:items-center 2xs:bg-[black] 2xs:opacity-[0.8] 2xs:gap-[15px] xs:w-full  xs:flex-col xs:items-center xs:bg-[black] xs:opacity-[0.8] xs:gap-[15px]">
//                 <li className="navbar_item mr-[40px] hover-navbar  xl:text-[15px] lg:text-[14px] md:text-[15px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
//                   <a href="#home">Home</a>
//                 </li>
//                 <li className="navbar_item mr-[40px] hover-navbar xl:text-[15px] lg:text-[14px] md:text-[15px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
//                   <a  href="#about">About</a>
//                 </li>
//                 <li className="navbar_item mr-[40px] hover-navbar  xl:text-[15px] lg:text-[14px] md:text-[15px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
//                   <a  href="#skills">Skills</a>
//                 </li>
//                 <li className="navbar_item mr-[40px] hover-navbar  xl:text-[15px] lg:text-[14px] md:text-[15px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
//                   <a  href="#projects">Projects</a>
//                 </li>
//                 <li className="navbar_item mr-[40px] hover-navbar xl:text-[15px] lg:text-[14px] md:text-[15px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
//                   <a  href="#contact">Contact</a>
//                 </li>
//               </ul>
        
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import Logo from "../image/Logo.png";
import BurgerMenu from "../image/burger-menu.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header z-[1000] bg-[black] flex items-center justify-between opacity-[0.8] fixed w-full max-w-full top-0 text-[white] sm:flex-wrap sm:items-start 2xs:flex-wrap 2xs:items-start xs:flex-wrap xs:items-start'>
      <div className="header_logo xl:w-[90px] lg:w-[80px] md:w-[70px] sm:w-[80px] 2xs:w-[75px] xs:w-[70px] ml-[20px]">
        <img src={Logo} alt="" className='w-full'/>
      </div>
      <div className="burger-menu mr-[40px] xl:hidden lg:hidden md:hidden sm:w-[40px] sm:mt-[20px] 2xs:w-[35px] 2xs:mt-[20px] xs:w-[30px] xs:mt-[20px]" onClick={toggleMenu}>
        <img src={BurgerMenu} alt="" />
      </div>
      <div className={`navbar xl:block lg:block md:block sm:w-full sm:pb-[20px] sm:bg-[black] sm:opacity-[0.8] 2xs:w-full 2xs:pb-[20px] 2xs:bg-[black] 2xs:opacity-[0.8] xs:w-full xs:pb-[20px] xs:bg-[black] xs:opacity-[0.8] ${isMenuOpen ? 'visible' : 'hidden'}`}>
      <ul className="navbar_content flex  sm:flex-col sm:items-center  sm:gap-[15px]  2xs:flex-col 2xs:items-center  2xs:opacity-[0.8] 2xs:gap-[15px]  xs:flex-col xs:items-center xs:opacity-[0.8] xs:gap-[15px]">
        <li className="navbar_item mr-[40px] hover-navbar xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
          <a href="#home" onClick={toggleMenu}>Home</a>
        </li>
        <li className="navbar_item mr-[40px] hover-navbar xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
          <a href="#about" onClick={toggleMenu}>About</a>
        </li>
        <li className="navbar_item mr-[40px] hover-navbar xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
          <a href="#skills" onClick={toggleMenu}>Skills</a>
        </li>
        <li className="navbar_item mr-[40px] hover-navbar xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
          <a href="#projects" onClick={toggleMenu}>Projects</a>
        </li>
        <li className="navbar_item mr-[40px] hover-navbar xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] 2xs:text-[13px] xs:text-[12px]">
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
      </div>
      
    </div>
  );
};

export default Header;
