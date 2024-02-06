
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="flex justify-center mt-[150px] flex-col items-center">
            <div>
                <img className='md:w-[252px] md:mb-[35px]' src="/assets/Webdoors.svg" alt="WebdDoorMainImg" />
            </div>
            <div className="flex gap-4 pt-5 md:gap-[25px]">
                <img className='md:w-[70px]' src="/assets/BE.svg" alt="BE" />
                <img className='md:w-[70px]' src="/assets/Instagram.svg" alt="Insta" />
                <img className='md:w-[70px]' src="/assets/twitter (1).svg" alt="Twitter" />
                <img className='md:w-[70px]' src="/assets/Llinkd.svg" alt="Linkdein" />
                <img className='md:w-[70px]' src="/assets/Faceb.svg" alt="Facebook" />
                <img className='md:w-[70px]' src="/assets/youtube.svg" alt="YT" />
                <img className='md:w-[70px]' src="/assets/dribble.svg" alt="BasketBall" />
                <img className='md:w-[70px]' src="/assets/Ggithub.svg" alt="Git" />
            </div>
            <div className="flex items-center mt-2 relative left-[10px] md:left-[92px] md:mt-[30px]">
                    <div className="first">

                    </div>
                    <div className="second md:w-[520px]">

                    </div>
                    <div className="third">

                    </div>
            </div>
            <div>

            </div>
        </div>
        <div className='ml-4 flex flex-col items-center md:flex-row justify-center md:mt-[30px]'>
            <div className='flex gap-4 mt-4 relative right-[78px] md:left-[405px]'>
                <img src="/assets/Compliant.svg" alt="CompliantImg" />
                <img src="/assets/EBA.svg" alt="EBAImg" />
            </div>
            <div className='mt-4 mb-4 relative right-[30px] md:right-[330px] top-[10px]'>
                <h4 className='text-[#98A5B2] text-[16px] font-normal'>Copyright © 2018-2022 all rights reserved</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer