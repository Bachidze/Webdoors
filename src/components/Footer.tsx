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
        <img src="/assets/Webdoors.svg" alt="WebDoors" />
      </div>
      <div className='flex gap-[20px]'>
        <img src="/assets/BE.svg" alt="BE" />
        <img src="/assets/Instagram.svg" alt="Insta" />
        <img src="/assets/twitter (1).svg" alt="Twit" />
        <img src="/assets/Llinkd.svg" alt="Linkdein" />
        <img src="/assets/Faceb.svg" alt="FaceBook" />
        <img src="/assets/youtube.svg" alt="YT" />
        <img src="/assets/dribble.svg" alt="Basket" />
        <img src="/assets/Ggithub.svg" alt="GitHub" />
      </div>
      <div className='flex items-center mt-[10px] ml-[10px]'>
        <div className='border1 w-[10px] h-[10px] border-2'></div>
        <div className='border2 w-[333px] h-[2px] bg-white'></div>
        <div className='border3 w-[3px] h-[10px]'></div>
      </div>
      <div className='flex flex-col mr-[55px]'>
        <div className='flex gap-4 mt-4 mb-4 justify-start'>
          <img src="/assets/Compliant.svg" alt="Complant" />
          <img src="/assets/EBA.svg" alt="EBA" />
        </div>
        <div>
          <h4 className='text-[#98A5B2] font-normal text-[16px]'>
            Copyright © {copyrightYearRange} all rights reserved
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
