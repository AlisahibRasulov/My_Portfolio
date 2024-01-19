import React from 'react'
import ProfileImage from "../image/Profile.png"
// import ProfileImage from "../image/rs_alisahib-20231212-0001.jpg"

// ? Social icon
import Mail from "../image/Svg/mail-ru-svgrepo-com.svg"
import Github from "../image/Svg/github-142-svgrepo-com.svg"
import Linkedin from "../image/Svg/linkedin-logo-svgrepo-com.svg"
import Facebook from "../image/Svg/facebook-fill-svgrepo-com.svg"
import Instagram from "../image/Svg/instagram-social-media-svgrepo-com.svg"

const Home = () => {
  return (
    <div className='home flex justify-around items-center  h-[60rem] home-bg md:flex-col-reverse sm:flex-col-reverse 2xs:flex-col-reverse xs:flex-col-reverse '>
      <div className="home-text flex items-center ">
        <div className="text_content flex flex-col md:items-center sm:items-center 2xs:items-center xs:items-center ">
        <div className="text_title xl:text-[40px] lg:text-[30px] md:text-[20px] sm:text-[25px] 2xs:text-[23px] xs:text-[18px] font-[700] mb-[25px]">Hi, I am</div>
        <div className="text_name  xl:text-[55px] lg:text-[45px] md:text-[45px] sm:text-[40px] 2xs:text-[38px] xs:text-[33px] font-[700]">Alisahib Rasulov</div>
        <div className="text_work  xl:text-[35px] lg:text-[25px] md:text-[25px] sm:text-[23px] 2xs:text-[20px] xs:text-[16px] text-[#909090] font-[700]">Front-end Developer</div>
        <div className="text_social ml-[20px] xl:mt-[100px] lg:mt-[90px] md:mt-[80px] sm:mt-[70px] 2xs:mt-[60px] xs:mt-[50px]">
          <button className='bg-[#C4C4C4] xl:p-[16px] lg:p-[15px] md:p-[16px] sm:p-[15px] 2xs:p-[14px] xs:p-[11px] mr-[20px] rounded-[5px] hover-social'>
            <img src={Mail} className='xl:w-[32px] lg:w-[28px] md:w-[26px] sm:w-[24px] 2xs:w-[22px] xs:w-[18px]' alt="" />
          </button>
          <button className='bg-[#C4C4C4] xl:p-[16px] lg:p-[15px] md:p-[16px] sm:p-[15px] 2xs:p-[14px] xs:p-[11px] mr-[20px] rounded-[5px] hover-social'>
            <img src={Github} className='xl:w-[32px] lg:w-[28px] md:w-[26px] sm:w-[24px] 2xs:w-[22px] xs:w-[18px]' alt="" />
          </button>
          <button className='bg-[#C4C4C4] xl:p-[16px] lg:p-[15px] md:p-[16px] sm:p-[15px] 2xs:p-[14px] xs:p-[11px] mr-[20px] rounded-[5px] hover-social'>
            <img src={Linkedin} className='xl:w-[32px] lg:w-[28px] md:w-[26px] sm:w-[24px] 2xs:w-[22px] xs:w-[18px]' alt="" />
          </button>
          <button className='bg-[#C4C4C4] xl:p-[16px] lg:p-[15px] md:p-[16px] sm:p-[15px] 2xs:p-[14px] xs:p-[11px] mr-[20px] rounded-[5px] hover-social'>
            <img src={Facebook} className='xl:w-[32px] lg:w-[28px] md:w-[26px] sm:w-[24px] 2xs:w-[22px] xs:w-[18px]' alt="" />
          </button>
          <button className='bg-[#C4C4C4] xl:p-[16px] lg:p-[15px] md:p-[16px] sm:p-[15px] 2xs:p-[14px] xs:p-[11px] mr-[20px] rounded-[5px] hover-social'>
            <img src={Instagram} className='xl:w-[32px] lg:w-[28px] md:w-[26px] sm:w-[24px] 2xs:w-[22px] xs:w-[18px]' alt="" />
          </button>
        </div>
      </div>
      </div>
      <div className="home-img flex items-end profil-border  xl:w-[650px] lg:w-[580px] md:w-[280px] sm:w-[270px] 2xs:w-[250px]  xs:w-[230px]">
        <img src={ProfileImage} className='profile-image w-full ' alt="" />
      </div>
    </div>
  )
}

export default Home
