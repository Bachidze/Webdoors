import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const startYear = 2018;
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const copyrightYearRange = currentYear > startYear ? `${startYear}-${currentYear}` : startYear;

  return (
    <>
    <div className='hidden xl:flex flex-col justify-center items-center mt-[250px]  grid2'>
            <div className='flex gap-1 md:gap-[50px] md:mt-[10px] md:mb-[20px] items-center'>
                <h2 className='font-normal text-[14px] leading-[17px] text-white md:text-[18px] xl:text-[36px] '>Our life’s work</h2>
                <img className='md:w-[15px] xl:w-[30px]' src="/assets/Services.svg" alt="ServicesMobile" />
            </div>
            <div className='flex items-center'>
                <div className='border1 md:w-[11px] md:h-[11px] xl:w-[15px] xl:h-[15px] '></div>
                <div className='border2 md:w-[126px] xl:w-[333px]'></div>
                <div className='border3 md:h-[11px] xl:h-[15px]'></div>
            </div>
            <div className='text-center'>
              <p className='w-[824px] text-[18px] text-white mt-[80px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna 
                  sollicitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus. 
                  Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna
                   sollicitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus. 
                   Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
               </p>
            </div>
        </div>

        <div className='hidden xl:flex flex-col  items-center mt-[170px]'>
          <div className='flex self-center relative right-[36%] text-[24px] text-[#D0E0EF] mb-3'><h4>Projects</h4></div>
            <div className='flex items-center'>
              <div className='border1 w-[10px] h-[10px] border-2 '></div>
              <div className='border2 w-[1170px] h-[2px] bg-white '></div>
            </div>

            <div className='flex gap-[70px] pt-6'>
                <div>
                  <h1 className='text-[32px] text-[white] font-bold mb-4'>WeBsite Name</h1>
                  <p className='text-[26px] w-[531px] mb-[110px] text-white sp'>Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor,</p>
                  <img src="/assets/Arrow.svg" alt="ArrowImg" />
                </div>
                <div>
                  <img  src="/assets/Self.svg" alt="Self" />
                </div>
            </div>

                <div className='border w-[1180px] mt-4'></div>
            <div className='flex gap-[70px] pt-6'>
                <div>
                  <h1 className='text-[32px] text-[white] font-bold mb-4'>WeBsite Name</h1>
                  <p className='text-[26px] w-[531px] mb-[110px] text-white sp'>vulputate risus. Facilisis tristique lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncu</p>
                  <img src="/assets/Arrow.svg" alt="ArrowImg" />
                </div>
                <div>
                  <img  src="/assets/Self.svg" alt="Self" />
                </div>
            </div>

                <div className='border w-[1180px] mt-4'></div>
            <div className='flex gap-[70px] pt-6'>
                <div>
                  <h1 className='text-[32px] text-[white] font-bold mb-4'>WeBsite Name</h1>
                  <p className='text-[26px] w-[531px] mb-[110px] text-white sp'>Fitudin vestibulum. Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus.</p>
                  <img src="/assets/Arrow.svg" alt="ArrowImg" />
                </div>
                <div>
                  <img  src="/assets/Self.svg" alt="Self" />
                </div>
            </div>
                <div className='border w-[1180px] mt-4'></div>
        </div>

    <div className='flex justify-center items-center flex-col mt-[150px] xl:mt-[350px]'>
      <div className='mb-[30px]'>
        <img className='md:w-[252px]' src="/assets/Webdoors.svg" alt="WebDoors" />
      </div>
      <div className='flex gap-[20px] md:gap-[50px] md:mb-[40px]'>
        <img className='md:w-[45px]' src="/assets/BE.svg" alt="BE" />
        <img className='md:w-[45px]' src="/assets/Instagram.svg" alt="Insta" />
        <img className='md:w-[45px]' src="/assets/twitter (1).svg" alt="Twit" />
        <img className='md:w-[45px]' src="/assets/Llinkd.svg" alt="Linkdein" />
        <img className='md:w-[45px]' src="/assets/Faceb.svg" alt="FaceBook" />
        <img className='md:w-[45px]' src="/assets/youtube.svg" alt="YT" />
        <img className='md:w-[45px]' src="/assets/dribble.svg" alt="Basket" />
        <img className='md:w-[45px]' src="/assets/Ggithub.svg" alt="GitHub" />
      </div>
      <div className='flex items-center mt-[10px] ml-[10px] md:ml-[190px]'>
        <div className='border1 w-[10px] h-[10px] border-2 '></div>
        <div className='border2 w-[333px] h-[2px] bg-white md:w-[500px]'></div>
        <div className='border3 w-[3px] h-[10px]'></div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:flex md:gap-[200px] md:mt-[20px] md:mb-[20px]'>
          <div className='order-2 md:order-1'>
            <h4 className='text-[#98A5B2] font-normal text-[16px]'>
              Copyright © {copyrightYearRange} all rights reserved
            </h4>
          </div>
          <div className='order-1 md:order-2 flex gap-4 mt-4 mb-4 justify-start'>
            <img src="/assets/Compliant.svg" alt="Complant" />
            <img src="/assets/EBA.svg" alt="EBA" />
          </div>
        </div>
      </div>
  
    </>
  );
}

export default Footer;
