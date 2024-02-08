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
    <div className='flex justify-center items-center flex-col mt-[150px]'>
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
  
  );
}

export default Footer;
