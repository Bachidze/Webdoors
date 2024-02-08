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
            <div className='flex flex-col'>
                <div className='flex it text-[24px] text-[#D0E0EF] mb-3'>
                 <h4>Projects</h4>
               </div>
                <div className='flex items-center'>
                  <div className='border1 w-[10px] h-[10px] border-2 '></div>
                  <div className='border2 w-[1170px] h-[2px] bg-white '></div>
               </div>
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

        <div className='hidden xl:flex  justify-center items-center mt-[170px] gap-9 '>
              <div className='flex items-center'>
                  <div className='border3 md:h-[11px] xl:h-[15px]'></div>
                  <div className='border2 md:w-[126px] xl:w-[90px]'></div>
                  <div className='border1 md:w-[11px] md:h-[11px] xl:w-[15px] xl:h-[15px] '></div>
              </div>
          <div className='hidden xl:flex gap-1 md:gap-[50px] md:mt-[10px] md:mb-[20px] items-center'>
                  <h2 className='font-normal text-[14px] leading-[17px] text-white md:text-[18px] xl:text-[36px] '>Read News about web</h2>
                  <img className='md:w-[15px] xl:w-[30px]' src="/assets/Services.svg" alt="ServicesMobile" />
              </div>
        </div>
        

        <div className='hidden xl:flex justify-center items-center mt-[50px]'>
          <div className='relative left-[100px]'>
            <img  src="/assets/NY.svg" alt="NY" />
          </div>
          <div className='mr-[50px] relative right-[100px]'>
            <h1 className='text-[26px] text-white font-bold mb-[20px] text-right'>Lorem ipsum dolor amet</h1>
            <h4 className='text-[18px] font-bold text-white mb-[20px] text-right'>11 November 2021</h4>
            <p className=' w-[688px] mb-[20px] text-right text-[18px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna sollicitudin vestibulum.
               Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus. Facilisis tristique 
               lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
              </p>
              <div className='flex items-end justify-end  mt-[80px]'>
                <div className='flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5'> 
                  <div className='border4'></div>
                  <h2 className='font-bold text-white'>READ ME</h2>
                </div>
              </div>
          </div>
        </div>
        <div className='hidden xl:flex justify-center items-center mt-[50px]'>
          <div className='mr-[50px] relative left-[130px]'>
            <h1 className='text-[26px] text-white font-bold mb-[20px] text-left'>Test name of News</h1>
            <h4 className='text-[18px] font-bold text-white mb-[20px] text-left'>11 November 2021</h4>
            <p className=' w-[688px] mb-[20px] text-left text-[18px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, condimentum scelerisque viverra magna sollicitudin vestibulum.
               Augue augue elementum massa vestibulum, vitae cras tempor, vulputate risus. Facilisis tristique 
               lorem cras porttitor ultrices cursus tristique. Ipsum lectus pretium rhoncus id.
              </p>
              <div className='flex items-end justify-start mt-[80px]'>
                <div className='flex items-center justify-center w-[277px] h-[65px] bg-[#272431] rounded-[15px] gap-5'> 
                  <div className='border4'></div>
                  <h2 className='font-bold text-white'>READ ME</h2>
                </div>
              </div>
          </div>
          <div className='relative right-[100px]'>
            <img className='relative -z-20' src="/assets/Architect.svg" alt="NY" />
          </div>
        </div>


        <div className='hidden xl:flex flex-col items-center mt-[80px]'>
          <div className='flex gap-[80px]'>
            <img src="/assets/Rectangle 46.svg" alt="pirveliSponsor" />
            <img src="/assets/Rectangle 9.svg" alt="Sharm" />
            <img src="/assets/Rectangle 14.svg" alt="Saqartvelo" />
            <img src="/assets/Rectangle 16.svg" alt="Tbilisi" />
            <img src="/assets/image 3.svg" alt="Create" />
            <img src="/assets/Rectangle 19.svg" alt="Kikala" />
          </div>
          <div className='flex gap-[90px] mt-[50px]'>
            <img src="/assets/image 6.svg" alt="NBR" />
            <img src="/assets/Rectangle 8.svg" alt="Pistol" />
            <img src="/assets/image 4.svg" alt="Qartuli" />
            <img src="/assets/Rectangle 11.svg" alt="Pro" />
            <img src="/assets/image 5.svg" alt="Sufta" />
          </div>
        </div>


        <div className='hidden xl:flex justify-between ml-[240px] mt-[150px]'>
          <div className='flex flex-col gap-[40px]'>
            <img className='md:w-[252px]' src="/assets/Webdoors.svg" alt="WebDoors" />
            <div className='flex'>
              <img src="/assets/Compliant.svg" alt="Complant" />
              <img src="/assets/EBA.svg" alt="EBA" />
            </div>
              <h4 className='text-[#98A5B2] font-normal text-[16px]'>
                Copyright © {copyrightYearRange} all rights reserved
              </h4>
          </div>

          <div>
              <div className='flex mr-[240px] gap-[35px]'>
          
                  <img className='md:w-[45px]' src="/assets/BE.svg" alt="BE" />
                  <img className='md:w-[45px]' src="/assets/Instagram.svg" alt="Insta" />
                  <img className='md:w-[45px]' src="/assets/twitter (1).svg" alt="Twit" />
                  <img className='md:w-[45px]' src="/assets/Llinkd.svg" alt="Linkdein" />
                  <img className='md:w-[45px]' src="/assets/Faceb.svg" alt="FaceBook" />
                  <img className='md:w-[45px]' src="/assets/youtube.svg" alt="YT" />
                  <img className='md:w-[45px]' src="/assets/dribble.svg" alt="Basket" />
                  <img className='md:w-[45px]' src="/assets/Ggithub.svg" alt="GitHub" />

              </div>
              <div className='flex gap-[40px] mt-[65px]'>
                  <div>
                    <h2 className='text-[18px] font-normal text-white'><span className='text-[18px] font-bold text-white'>Name: </span>JSC Webdoors</h2>
                    <h2 className='text-[18px] font-normal text-white'><span className='text-[18px] font-bold text-white'>Gov.Id: </span>405281216</h2>
                  </div>
                  <div>
                    <h2 className='text-[18px] font-normal text-white'><span className='text-[18px] font-bold text-white'>Telephone: </span>+995 571507979</h2>
                    <h2 className='text-[18px] font-normal text-white'><span className='text-[18px] font-bold text-white'>Telephone2: </span>+995 599339099</h2>
                    <h2 className='text-[18px] font-normal text-white'><span className='text-[18px] font-bold text-white'>Email: </span>Info@Webdoors.Ge</h2>
                    <h2 className='text-[18px] font-normal text-white'><span className='text-[18px] font-bold text-white'>Addres: </span>97 Akaki Tsereteli Ave,</h2>
                    <h2 className='text-[18px] font-normal text-white'><span className='text-[18px] font-bold text-white'>Zip: </span>0179</h2>
                  <div className='flex items-center mt-[30px] mb-[40px]'>
                    <div className='border1 w-[10px] h-[10px]'></div>
                    <div className='border2 w-[250px]'></div>
                    <div className='border3 h-[10px]'></div>
                  </div>
                  </div>
              </div>
          </div>
            

          
        </div>

    <div className='flex justify-center items-center flex-col mt-[150px] xl:mt-[350px] xl:hidden'>
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
