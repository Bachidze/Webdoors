
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="flex justify-center mt-[150px] flex-col items-center">
            <div>
                <img src="/assets/Webdoors.svg" alt="WebdDoorMainImg" />
            </div>
            <div className="flex gap-4 pt-5">
                <img src="/assets/BE.svg" alt="BE" />
                <img src="/assets/Instagram.svg" alt="Insta" />
                <img src="/assets/twitter (1).svg" alt="Twitter" />
                <img src="/assets/Llinkd.svg" alt="Linkdein" />
                <img src="/assets/Faceb.svg" alt="Facebook" />
                <img src="/assets/youtube.svg" alt="YT" />
                <img src="/assets/dribble.svg" alt="BasketBall" />
                <img src="/assets/Ggithub.svg" alt="Git" />
            </div>
            <div className="flex items-center mt-2 relative left-[10px]">
                    <div className="first">

                    </div>
                    <div className="second">

                    </div>
                    <div className="third">

                    </div>
            </div>
            <div>

            </div>
        </div>
        <div className='ml-4 flex flex-col items-center'>
            <div className='flex gap-4 mt-4 relative right-[78px]'>
                <img src="/assets/Compliant.svg" alt="CompliantImg" />
                <img src="/assets/EBA.svg" alt="EBAImg" />
            </div>
            <div className='mt-4 mb-4 relative right-[30px]'>
                <h4 className='text-[#98A5B2] text-16px font-normal'>Copyright © 2018-2022 all rights reserved</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer