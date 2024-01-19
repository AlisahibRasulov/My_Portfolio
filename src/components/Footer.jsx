import React from 'react';
import TopArrow from '../image/top-arrow.png'
// import Gmail from "../image/Svg/gmail.svg"
// // import Github from "../image/Svg/github-142-svgrepo-com.svg"
// import Linkedin from "../image/Svg/linkedin-logo-svgrepo-com.svg"
// import Facebook from "../image/Svg/facebook-fill-svgrepo-com.svg"
// import Instagram from "../image/Svg/instagram-social-media-svgrepo-com.svg"

const Footer = () => {
  return (
    <div className='footer bg-black xl:w-full lg:max-w-full md:max-w-full sm:max-w-full 2xs:max-w-full xs:max-w-full'>
        <div className="footer-content flex flex-col gap-[10px] justify-center items-center">
            <div className="footer-top">
                <a href="#home" className='text-[#fff] text-[14px] font-[700] flex flex-col items-center'>
                    <img src={TopArrow} alt="" />
                    BACK TO TOP
                </a>
            </div>
            {/* <div className="footer-center">
                <img src={Facebook} alt=""  className='gi-[#fff]'/>
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
                <img src={Gmail} alt="" />
            </div> */}
            <div className="footer-bottom">
                <div className="footer-text flex gap-[5px] text-[13px] mb-[30px]">
                    <div className="text1 text-[#fff] font-bold">@ 2023 Alisahib Rasulov</div>
                    <div className="text2 text-[#fff]">All Right Reserved</div>
                </div>
            </div>
        </div>
   </div>
  );
}

export default Footer;
