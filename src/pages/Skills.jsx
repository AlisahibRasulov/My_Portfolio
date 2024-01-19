import React from 'react'
import Html from "../image/Svg/Html.svg"
import Css from "../image/Svg/Css.svg"
import Sass from "../image/Svg/Sass.svg"
import Tailwind from "../image/Svg/Tailwind_CSS_Logo.svg"
import Bootstarp from "../image/Svg/bootstrap.svg"
import JS from "../image/Svg/JS.svg"
import ReactJS from "../image/Svg/React.svg"
import TS from "../image/Svg/TypeScript.svg"
import Nodejs from "../image/Svg/NodeJS.svg"
import Npm from "../image/Svg/Npm.svg"
import Git from "../image/Svg/git.svg"
import Figma from "../image/Svg/figma.svg"





const Skills = () => {
  return (
    <div className='skills'>
      <div className="skills_content flex flex-col justify-between  mt-[120px] gap-[100px] mb-[100px]">
        <div className="skills_top flex flex-col items-center">
          <div className="skills_header xl:w-[300px] xl:py-[20px] xl:px-[50px] xl:text-[25px] lg:w-[280px] lg:py-[18px] lg:px-[45px] lg:text-[23px] md:w-[260px] md:py-[16px] md:px-[40px] md:text-[20px]  sm:w-[240px] sm:py-[14px] sm:px-[35px] sm:text-[18px] 2xs:w-[220px] 2xs:py-[12px] 2xs:px-[30px] 2xs:text-[16px] xs:w-[200px] xs:py-[10px] xs:px-[25px] xs:text-[14px] border-[8px] border-[black] font-[700] tracking-[5px] text-center">SKILLS</div>
        </div>
        <div className="skills_bottom flex flex-col gap-[50px]">
            <div className="using-now flex flex-col items-center justify-center mx-[20px]  xl:max-w-[50rem] xl:px-[20px] xl:py-[20px] lg:max-w-[46rem] lg:px-[19px] lg:py-[19px] md:max-w-[43rem] md:px-[18px] md:py-[18px] sm:max-w-[40rem] sm:px-[17px] sm:py-[17px] 2xs:max-w-[36rem] 2xs:px-[16px] 2xs:py-[16px] xs:max-w-[30rem] xs:px-[20px] xs:py-[15px] language-bg ">
              <div className="using_header all-bg p-[25px] clip-path xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[18px] 2xs:text-[16px] xs:text-[14px] font-[700] tracking-[5px] mb-[50px] ">
                USING NOW:
              </div>
              <div className="using_language flex flex-wrap justify-center w-full  xl:gap-x-[90px] xl:gap-y-[50px]  lg:gap-x-[85px] lg:gap-y-[45px]   md:gap-x-[80px] md:gap-y-[40px]  sm:gap-x-[75px] sm:gap-y-[35px]  2xs:gap-x-[70px] 2xs:gap-y-[30px] xs:gap-x-[65px] xs:gap-y-[25px] box-shadow ">
                <div className="javascript xl:w-[59px] lg:w-[54px] md:w-[50px] sm:w-[46px] 2xs:w-[42px] xs:w-[38px] flex flex-col items-center">
                  <img src={JS} alt="" />
                  JAVASCRIPT
                </div>
                <div className="react xl:w-[53px] lg:w-[49px] md:w-[45px] sm:w-[41px] 2xs:w-[37px] xs:w-[33px] flex flex-col items-center">
                  <img src={ReactJS} alt="" />
                  <div className="name">
                  REACT
                  </div> 
                </div>
                <div className="sass xl:w-[73px] lg:w-[69px] md:w-[67px] sm:w-[63px] 2xs:w-[59px] xs:w-[55px] flex flex-col items-center">
                  <img src={Sass} alt="" />
                  <div className="name">
                  SASS
                  </div>
                </div>
                <div className="tailwind xl:w-[95px] lg:w-[91px] md:w-[87px] sm:w-[83px] 2xs:w-[79px] xs:w-[75px] flex flex-col items-center">
                  <img src={Tailwind} alt="" />
                  <div className="name">
                  TAILWIND
                  </div>
                </div>
                <div className="figma xl:w-[42px] lg:w-[40px] md:w-[38px] sm:w-[36px] 2xs:w-[33px] xs:w-[30px] flex flex-col items-center">
                  <img src={Figma} alt="" />
                  <div className="name">
                  FIGMA
                  </div>
                </div>
                <div className="npm xl:w-[65px] lg:w-[61px] md:w-[57px] sm:w-[53px] 2xs:w-[50px] xs:w-[46px] flex flex-col items-center">
                  <img src={Npm} alt="" />
                  <div className="name">
                  NPM
                  </div>
                </div>
                <div className="git xl:w-[60px] lg:w-[56px] md:w-[52px] sm:w-[47px] 2xs:w-[43px] xs:w-[41px] flex flex-col items-center">
                  <img src={Git} alt="" />
                  <div className="name">
                  GIT
                  </div>
                </div>
              </div>
            </div>
            <div className="learning flex flex-col items-center justify-center mx-[20px] xl:max-w-[50rem] xl:px-[20px] xl:py-[20px] lg:max-w-[46rem] lg:px-[19px] lg:py-[19px] md:max-w-[43rem] md:px-[18px] md:py-[18px] sm:max-w-[40rem] sm:px-[17px] sm:py-[17px] 2xs:max-w-[36rem] 2xs:px-[16px] 2xs:py-[16px] xs:max-w-[30rem] xs:px-[15px] xs:py-[15px] language-bg">
              <div className="learning_header all-bg p-[25px] clip-path xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[18px] 2xs:text-[16px] xs:text-[14px] font-[700] tracking-[5px] mb-[50px]">
                LEARNING:
              </div>
              <div className="learning_language flex flex-wrap justify-center w-full  xl:gap-x-[90px] xl:gap-y-[50px] lg:gap-x-[85px] lg:gap-y-[45px] md:gap-x-[80px] md:gap-y-[40px] sm:gap-x-[75px] sm:gap-y-[35px]  2xs:gap-x-[70px] 2xs:gap-y-[30px] xs:gap-x-[65px] xs:gap-y-[25pxg box-shadow">
                <div className="nodejs xl:w-[60px] lg:w-[56px] md:w-[52px] sm:w-[48px] 2xs:w-[44px] xs:w-[40px] flex flex-col items-center">
                  <img src={Nodejs} alt="" />
                  <div className="name">
                  NODEJS
                  </div>
                </div>
                <div className="typescript xl:w-[70px] lg:w-[66px] md:w-[62px] sm:w-[58px] 2xs:w-[54px] xs:w-[50px] flex flex-col items-center">
                  <img src={TS} alt="" />
                  <div className="name">
                  TYPESCRIPT
                  </div>
                </div>
              </div>
            </div>
            <div className="other-skills flex flex-col items-center justify-center mx-[20px] xl:max-w-[50rem] xl:px-[20px] xl:py-[20px] lg:max-w-[46rem] lg:px-[19px] lg:py-[19px] md:max-w-[43rem] md:px-[18px] md:py-[18px] sm:max-w-[40rem] sm:px-[17px] sm:py-[17px] 2xs:max-w-[36rem] 2xs:px-[16px] 2xs:py-[16px] xs:max-w-[30rem] xs:px-[15px] xs:py-[15px] language-bg">
              <div className="other-skills_header all-bg p-[25px] clip-path xl:text-[25px] lg:text-[23px] md:text-[20px] sm:text-[18px] 2xs:text-[16px] xs:text-[14px]  font-[700] tracking-[5px] mb-[50px]">
                OTHER SKILLS:
              </div>
              <div className="other-skills_language flex flex-wrap justify-center w-full  xl:gap-x-[90px] xl:gap-y-[50px] lg:gap-x-[85px] lg:gap-y-[45px] md:gap-x-[80px] md:gap-y-[40px] sm:gap-x-[75px] sm:gap-y-[35px]  2xs:gap-x-[70px] 2xs:gap-y-[30px] xs:gap-x-[65px] xs:gap-y-[25px] box-shadow ">
                <div className="html xl:w-[70px] lg:w-[66px] md:w-[62px] sm:w-[58px] 2xs:w-[54px] xs:w-[50px] flex flex-col items-center">
                  <img src={Html} alt="" />
                  <div className="name">
                  HTML
                  </div>
                </div>
                <div className="css xl:w-[70px] lg:w-[66px] md:w-[62px] sm:w-[58px] 2xs:w-[54px] xs:w-[50px] flex flex-col items-center">
                  <img src={Css} alt="" />
                  <div className="name">
                  CSS
                  </div>
                </div>
                <div className="bootstrap xl:w-[80px] lg:w-[76px] md:w-[72px] sm:w-[68px] 2xs:w-[64px] xs:w-[60px] flex flex-col items-center">
                  <img src={Bootstarp} alt="" />
                  <div className="name">
                  BOOTSTRAP
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
