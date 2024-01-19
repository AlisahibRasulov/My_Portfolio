import React from 'react'
import Facebook from "../image/Facebook.png"
import Clothing from "../image/Clothing.png"
import Message from "../image/Message.png"

// ? Svg img 
import Eye from "../image/Svg/eye.svg"
import Github from "../image/Svg/github-142-svgrepo-com.svg"

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projects_content flex flex-col mt-[120px] xl:gap-[300px] lg:gap-[300px] md:gap-[150px] sm:gap-[100px] 2xs:gap-[100px] xs:gap-[100px] mb-[100px]">
      <div className="projects_top flex flex-col items-center">
        <div className="projects_header xl:w-[300px] xl:py-[20px] xl:px-[50px] xl:text-[25px] lg:w-[280px] lg:py-[18px] lg:px-[45px] lg:text-[23px] md:w-[260px] md:py-[16px] md:px-[40px] md:text-[20px]  sm:w-[240px] sm:py-[14px] sm:px-[35px] sm:text-[18px] 2xs:w-[220px] 2xs:py-[12px] 2xs:px-[30px] 2xs:text-[16px] xs:w-[200px] xs:py-[10px] xs:px-[25px] xs:text-[14px] border-[8px]  border-[black] font-[700] tracking-[5px] text-center">PROJECTS</div>
      </div>
      <div className="projects_bottom bg-[#d0cdcd] px-[30px] py-[30px]">
        <div className="projects_images bg-slate-300 flex  xl:max-w-[80rem] xl:gap-[15px] xl:p-[20px] lg:max-w-[60rem] lg:gap-[15px] lg:p-[15px] md:max-w-[46rem] md:gap-[10px] md:py-[15px] md:px-[10px] md:flex-wrap md:justify-center sm:max-w-[25rem] sm:gap-[10px] sm:py-[15px] sm:px-[15px]  sm:flex-col sm:items-center 2xs:max-w-[20rem] 2xs:gap-[7px] 2xs:py-[15px] 2xs:px-[15px] 2xs:flex-wrap 2xs:justify-center xs:max-w-[15rem] xs:gap-[6px] xs:py-[15px] xs:px-[15px] xs:flex-wrap xs:justify-center ">
          <div className='xl:w-[400px] lg:w-[380px] md:w-[350px] sm:w-[380px] 2xs:w-[320px] xs:w-[300px] h-auto image-content border4'>
            <img src={Facebook} alt="" className='image w-full h-full'/>
            <div className="transition-link flex gap-[30px]">
              <a href="https://github.com/AlisahibRasulov/Facebook_Register" className=''>
                <button className='link-btn bg-[#d0cdcd] p-[10px] rounded-[50%]'>
                <img src={Github} alt="" className='w-[40px]'/>
                </button>
              </a>
                <a href="https://facebook-register-five.vercel.app/"  className=''>
                  <button className='link-btn bg-[#d0cdcd] p-[10px] rounded-[50%]'>
                  <img src={Eye} alt="" className='w-[40px]'/>
                  </button>   
                </a>
            </div>
          </div>
          <div className=' xl:w-[400px] lg:w-[380px] md:w-[350px] sm:w-[380px] 2xs:w-[320px] xs:w-[300px] h-auto image-content border4'>
            <img src={Clothing} alt="" className='image w-full h-full'/>
            <div className="transition-link flex gap-[30px]">
              <a href="https://github.com/AlisahibRasulov/Clothing_Store" className=''>
                <button className='link-btn bg-[#d0cdcd] p-[10px] rounded-[50%]'>
                <img src={Github} alt="" className='w-[40px]'/>
                </button>
              </a>
                <a href="https://clothing-store-rosy.vercel.app/"  className=''>
                  <button className='link-btn bg-[#d0cdcd] p-[10px] rounded-[50%]'>
                  <img src={Eye} alt="" className='w-[40px]'/>
                  </button>   
                </a>
            </div>
          </div>
          <div className='xl:w-[400px] lg:w-[380px] md:w-[350px] sm:w-[380px] 2xs:w-[320px] xs:w-[300px] h-auto image-content border4'>
            <img src={Message} alt="" className='image w-full h-full'/>
            <div className="transition-link flex gap-[30px]">
              <a href="https://github.com/AlisahibRasulov/Message" className=''>
                <button className='link-btn bg-[#d0cdcd] p-[10px] rounded-[50%]'>
                <img src={Github} alt="" className='w-[40px]'/>
                </button>
              </a>
                <a href="https://message-five-mu.vercel.app/"  className=''>
                  <button className='link-btn bg-[#d0cdcd] p-[10px] rounded-[50%]'>
                  <img src={Eye} alt="" className='w-[40px]'/>
                  </button>   
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
