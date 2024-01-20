import React from 'react'
import Email from "../image/Svg/mail-ru-svgrepo-com.svg"
import Phone from "../image/Svg/phone.svg"
import Linkedin from "../image/Svg/linkedin-logo-svgrepo-com.svg"
import Github from "../image/Svg/github-142-svgrepo-com.svg"
import Gmail from "../image/Svg/gmail.svg"

const Contact = () => {
  return (
    <div className='contact all-bg'>
      <div className="contact_content flex flex-col justify-between mt-[120px] gap-[100px] mb-[100px] md:justify-center">
      <div className="contact_top flex flex-col items-center">
        <div className="contact_header xl:w-[300px] xl:py-[20px] xl:px-[50px] xl:text-[25px] lg:w-[280px] lg:py-[18px] lg:px-[45px] lg:text-[23px] md:w-[260px] md:py-[16px] md:px-[40px] md:text-[20px]  sm:w-[240px] sm:py-[14px] sm:px-[35px] sm:text-[18px] 2xs:w-[220px] 2xs:py-[12px] 2xs:px-[30px] 2xs:text-[16px] xs:w-[200px] xs:py-[10px] xs:px-[25px] xs:text-[14px] border-[8px] border-[black] text-[25px] font-[700] tracking-[5px] text-center">CONTACT</div>
      </div>
      <div className="contact_bottom flex justify-center gap-[5rem] max-w-full md:flex-col  sm:flex-col  2xs:flex-col  xs:flex-col">
        <div className="contact_input flex flex-col items-center border-hover xl:min-w-[38rem] xl:max-w-[40rem] lg:min-w-[33rem] lg:max-w-[35rem] md:min-w-[38rem] md:max-w-[40rem] sm:min-w-[35rem] sm:max-w-[37rem] 2xs:min-w-[32rem] 2xs:max-w-[34rem] xs:min-w-[19rem] xs:max-w-[20rem] gap-[2rem] px-[1rem] py-[1rem]">
          <input type='text' className="form-input bg-transparent border2 w-full text-[12px] font-[700]" placeholder='ENTER YOUR NAME*' />
          <input type='email' className="form-input bg-transparent border2 w-full text-[12px] font-[700]" placeholder='ENTER YOUR EMAIL*' />
          <input type='text' className="form-input bg-transparent border2 w-full text-[12px] font-[700]" placeholder='PHONE NUMBER' />
          <input type='text' className="form-input bg-transparent border2 w-full  text-[12px] font-[700]" placeholder='YOUR MESSAGE*' />
          <button className='form-button border bg-transparent w-[150px] px-[25px] py-[8px] text-[13px] font-[800]'>SUBMIT</button>
        </div>
        <div className="contact_info flex flex-col justify-center border-hover xl:min-w-[38rem] xl:max-w-[40rem] lg:min-w-[33rem] lg:max-w-[35rem] md:min-w-[38rem] md:max-w-[40rem] sm:min-w-[35rem] sm:max-w-[37rem] 2xs:min-w-[32rem] 2xs:max-w-[34rem] xs:min-w-[19rem] xs:max-w-[20rem] py-[1rem] gap-[3rem] pt-[2rem] px-[1rem]">
          <div className='info-item flex items-center gap-[5px] xl:text-[25px] lg:text-[23px] md:text-[21px] sm:text-[19px] 2xs:text-[17px] xs:text-[13px]'>
            <img src={Gmail} alt="" className='info-item_icon xl:w-[35px] lg:w-[33px] md:w-[31px] sm:w-[29px] 2xs:w-[27px] xs:w-[25px]'/>
            <strong className='info-item_title'>Email:</strong> 
            <a className='info-item_text' href="http://www.alisahibrasulov@gmail.com" target="_blank" rel="noopener noreferrer">
              alisahibrasulov@gmail.com
            </a>
          </div>
          <div className='info-item flex items-center gap-[5px] xl:text-[25px] lg:text-[23px] md:text-[21px] sm:text-[19px] 2xs:text-[17px] xs:text-[13px]'>
            <img  src={Phone} alt="" className='info-item_icon xl:w-[40px] lg:w-[33px] md:w-[31px] sm:w-[29px] 2xs:w-[27px] xs:w-[25px]'/>
            <strong className='info-item_title'>Phone:</strong> 
            <p className='info-item_text'>(+994)77-598-43-17 </p>
          </div>
          <div className='info-item flex items-center gap-[5px] xl:text-[25px] lg:text-[23px] md:text-[21px] sm:text-[19px] 2xs:text-[17px] xs:text-[13px]'>
            <img src={Linkedin} alt="" className='info-item_icon xl:w-[35px] lg:w-[33px] md:w-[31px] sm:w-[29px] 2xs:w-[27px] xs:w-[25px]'/>
            <strong className='info-item_title'>LinkedIn:</strong>
            <a className='info-item_text' href="https://www.linkedin.com/in/alisahibrasulov/" target="_blank" rel="noopener noreferrer">
              in/alisahib-rasulov
            </a>
          </div>
          <div className='info-item flex items-center gap-[5px] xl:text-[25px] lg:text-[23px] md:text-[21px] sm:text-[19px] 2xs:text-[17px] xs:text-[13px]'>
            <img src={Github} alt="" className='info-item_icon xl:w-[35px] lg:w-[33px] md:w-[31px] sm:w-[29px] 2xs:w-[27px] xs:w-[25px]'/>
            <strong className='info-item_title'>GitHub:</strong>
            <a className='info-item_text' href="https://github.com/AlisahibRasulov" target="_blank" rel="noopener noreferrer">
              /AlisahibRasulov
            </a>
          </div>
          {/* <div className='info-item flex xl:text-[25px] lg:text-[23px] md:text-[21px] sm:text-[19px] 2xs:text-[17px] xs:text-[15px]'>
            <img src={Gmail} alt="" className='info-item_icon xl:w-[35px] lg:w-[33px] md:w-[31px] sm:w-[29px] 2xs:w-[27px] xs:w-[25px]'/>
            <strong className='info-item_title'>Gmail:</strong>
            <a className='info-item_text' href="http://www.alisahibrasulov@gmail.com" target="_blank" rel="noopener noreferrer">
            alisahibrasulov@gmail.com
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
