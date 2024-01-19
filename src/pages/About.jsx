import React from 'react'
import separator from "../image/Svg/separatorBlack 1.svg"

const About = () => {
  return (
    <div className='about'>
      <div className="about_content flex flex-col justify-between mt-[120px] gap-[200px] ">
        <div className="about_top flex flex-col items-center">
          <div className="about_header xl:w-[300px] xl:py-[20px] xl:px-[50px] xl:text-[25px] lg:w-[280px] lg:py-[18px] lg:px-[45px] lg:text-[23px] md:w-[260px] md:py-[16px] md:px-[40px] md:text-[20px]  sm:w-[240px] sm:py-[14px] sm:px-[35px] sm:text-[18px] 2xs:w-[220px] 2xs:py-[12px] 2xs:px-[30px] 2xs:text-[16px] xs:w-[200px] xs:py-[10px] xs:px-[25px] xs:text-[14px]   border-[8px] border-[black]  font-[700] tracking-[5px] text-center">ABOUT ME</div>
          <div className="about_title xl:w-[400px] xl:text-[13px] lg:w-[380px] lg:text-[12px] md:w-[360px] md:text-[11px] sm:w-[330px] sm:text-[10px] 2xs:w-[290px] 2xs:text-[9px] xs:w-[260px] xs:text-[8px]  flex justify-center  font-[500] text-center mt-[30px]">
          Hello, I'm Alisahib Rasulov! With my passion for web development and technical skills, I create user-friendly and stylish websites. 
          </div>
          {/* <div className="about_explore border px-[25px] py-[8px] text-[15px] font-[700] mt-[50px]">
            EXPLORE
          </div> */}
          </div>
        <div className="about_bottom flex flex-col items-center">
            <div className="separator xl:w-[120px] lg:w-[110px] md:w-[100px] sm:w-[90px] 2xs:w-[80px] xs:w-[70px] mb-[100px]">
              <img src={separator} alt="" />
            </div>
            <div className="development flex items-center flex-col">
              <div className="development_header  xl:text-[25px] lg:text-[23px] md:text-[21px] sm:text-[19px] 2xs:text-[17px] xs:text-[15px] first-letter: font-[800] tracking-[5px] ">
                DEVELOPMENT
              </div>
              <div className="development_title  xl:w-[400px] xl:text-[13px] lg:w-[370px] lg:text-[12px] md:w-[340px] md:text-[11px]  sm:w-[310px] sm:text-[10px] 2xs:w-[280px] 2xs:text-[9px] xs:w-[245px] xs:text-[8px] flex justify-center  font-[500] text-center mt-[30px]">
              I combine expertise in HTML, CSS, and JavaScript with modern technologies to enhance my projects.I'm a team player and quick learner. 
              Always keeping up with new trends, I bring innovative solutions to my projects.I look forward to working with you to make a lasting impact in the digital world!
              </div>
            </div>
            <div className="separator xl:w-[120px] lg:w-[110px] md:w-[100px] sm:w-[90px] 2xs:w-[80px] xs:w-[70px] mt-[100px]">
              <img src={separator} alt="" />
            </div>

        </div>
      </div>
    </div>
    
  )
}

export default About
