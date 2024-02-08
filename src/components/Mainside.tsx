import './Mainside.css'

const Mainside = () => {
  return (
    <>

    <div className='hidden xl:flex flex-col items-center mt-[180px] gap-6'>
      <h3 className='text-[20px] flex gap-2 text-white'>INTRODUCING<span className='text-[#BFB0FF]'>WEBDOORS</span></h3>
      <h1 className='text-[41.5px] font-bold text-white'>DIGITAL <span className='text-[#BFB0FF]'>EXPERIENCE</span>, RE-IMAGINED</h1>
      <p className='text-[#C1D7EC] text-[18px]'>A full-service digital agency with capabilities across web design and development</p>
      <div className='w-[313px] h-[56px] bg-[#0500FF] flex items-center justify-center gap-9 mt-[25px] rounded-[8px]'>
        <h2 className='text-[18px] font-bold text-white'>NEED A WEBSITE?</h2>
        <img src="/assets/Arrow.svg" alt="Arrow" />
      </div>
    </div>

    <div className='hidden xl:flex justify-center mt-[150px] mb-[150px]'>
      <img src="/assets/Cube.svg" alt="Cube" />
    </div>

    <div className='hidden xl:flex flex-col justify-center items-center mt-[50px]  grid2'>
            <div className='flex items-center'>
                <div className='border3 md:h-[11px] xl:h-[15px]'></div>
                <div className='border2 md:w-[126px] xl:w-[211px]'></div>
                <div className='border1 md:w-[11px] md:h-[11px] xl:w-[15px] xl:h-[15px] '></div>
            </div>
            <div className='flex gap-1 md:gap-[50px] md:mt-[10px] md:mb-[20px] items-center xl:mb-[120px]'>
                <h2 className='font-normal text-[14px] leading-[17px] text-white md:text-[18px] xl:text-[36px] '>Services</h2>
                <img className='md:w-[15px] xl:w-[30px]' src="/assets/Services.svg" alt="ServicesMobile" />
            </div>
        </div>

        <div className='hidden xl:flex flex-col justify-center items-center mr-[20px] absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/8'>
        
              <div className='flex items-center self-center relative left-[10%]'>
                  <img className='absolute right-[80%] min-w-[1000px] ' src="/assets/SkyRectangle.svg" alt="skyleft" />
                  <img className='relative  ' src="/assets/BrainDesktop.svg" alt="brain" />    
              </div>
              <div className='flex flex-col  relative '>
                  <img className='absolute  bottom-[75%] w-[180px] -z-10' src="/assets/DaxriliSky.svg" alt="skyright" />
                  <img className='relative right-[40%]' src="/assets/2Desktop.svg" alt="Wire" />
              </div>
              <div className='flex flex-col relative'>
                <img className='absolute left-[25%] bottom-[70%] w-[180px] -z-10' src="/assets/Purple.svg" alt="skyright" />
                <img className='relative left-[45%] ' src="/assets/3Desktop.svg" alt="Prot" />
              </div>
              <div className='flex flex-col relative'>
                <img className='absolute left-[10%] bottom-[70%] w-[180px] -z-10' src="/assets/PinkYellow.svg" alt="pinkyellowleft" />
                <img className='relative right-[20%] ' src="/assets/DesktopMenu.svg" alt="Yellow" />
              </div>
              <div className='flex flex-col relative'>
                <img className='absolute left-[45%] bottom-[70%]  w-[180px]' src="/assets/DesktopYellow.svg" alt="Yellorright" />
                <img className='relative left-[50%] bottom-[20px]' src="/assets/DesktopAim.svg" alt="Aim" />
              </div>
              
              <div className='relative'>
                <img className='relative left-[15%] bottom-[80px] w-[180px] -z-10' src="/assets/RedRect.svg" alt="leftred" />
               </div>
            <div className='flex items-center self-center relative left-[15%]'>
                <img className='absolute right-[55%] bottom-[-110%]'  src="/assets/DesktopDeploy.svg" alt="Redlogo" />
              <img  className='relative left-[35%] bottom-[40px] w-[1000px] -z-10' src="/assets/MainRed.svg" alt="mainred"/>
            </div>

        </div>

    <div className='ml-[15px] mr-[15px] mt-[120px] text-center mainGrid md:text-[18px]'>


        <div className='flex flex-col items-center grid1'>
          <img className='md:hidden' src="/assets/BrainImg2.svg" alt="MobileBraInimg" />
          <img className='hidden md:flex xl:hidden' src="/assets/BrainImg.svg" alt="BrainTablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px] xl:self-start xl:relative '>
          <span className='text-[#68B4FFBF]'>01.</span>Analysis</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] xl:w-[400px] xl:text-left xl:text-[18px] space'>
            We work with our clients to gather the requirements,
            use cases, process specifications and conduct in-depth
            research on demographics, behavior patterns, and target
            audiences to refine your idea and create a strong app
            foundation
          </p>
        </div>

        <div className='flex flex-col items-center relative top-[20px] xl:hidden  grid2'>
            <div className='flex items-center'>
                <div className='border3 md:h-[11px]'></div>
                <div className='border2 md:w-[126px]'></div>
                <div className='border1 md:w-[11px] md:h-[11px]'></div>
            </div>
            <div className='flex items-center gap-1 md:gap-[50px] md:mt-[10px] md:mb-[20px]'>
                <h2 className='font-normal text-[14px] leading-[17px] text-white md:text-[18px]'>Services</h2>
                <img className='md:w-[15px]' src="/assets/Services.svg" alt="ServicesMobile" />
            </div>
        </div>

        <div className='flex flex-col items-center grid3'>
          <img className='md:hidden' src="/assets/Wirefarming.svg" alt="WireFramingMobile" />
          <img className='hidden md:flex xl:hidden' src="/assets/Tablet22.svg" alt="Tablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px] xl:self-start xl:relative '>
          <span className='text-[#68B4FFBF]'>02.</span>Wireframing</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] xl:w-[400px] xl:text-left xl:text-[18px] space2'>
            Our experienced UI/UX designers will create wireframes to
            visualize the client’s concept and ideas that clearly
            define the user journey
          </p>
        </div>

        <div className='flex flex-col items-center grid4'>
          <img className='md:hidden' src="/assets/Prototyping.svg" alt="PropTypingMobile" />
          <img className='hidden md:flex xl:hidden' src="/assets/Tablet33.svg" alt="PropTypingTablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px] xl:self-start xl:relative '>
          <span className='text-[#68B4FFBF]'>03.</span>Prototyping</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] xl:w-[400px] xl:text-left xl:text-[18px] space'>
            We lead the industry with best in class prototype design 
            techniques that give you an earlier heads up on the
            look and feel, during the development cycle.
          </p>
        </div>


        <div className='flex flex-col items-center grid5'>
          <img className='md:hidden' src="/assets/BrainImg2.svg" alt="Design & code Mobile" />
          <img className='hidden md:flex xl:hidden' src="/assets/Tablet44.svg" alt="Design & code Tablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px] xl:self-start xl:relative '>
          <span className='text-[#68B4FFBF]'>04.</span>Design & code</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] xl:w-[400px] xl:text-left xl:text-[18px]  space'>
            We use Human Interface Guidelines and follow industry best
            practices during our design and coding process. Our
            capabilities deliver sleek and responsive apps to
            give you a competitive edge.
          </p>
        </div>


        <div className='flex flex-col items-center grid6'>
          <img className='md:hidden' src="/assets/Testing & QA.svg" alt="Testing & QA mobile" />
          <img className='hidden md:flex xl:hidden' src="/assets/AIM.svg" alt="Testing & QA mobile" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px] xl:self-start xl:relative '>
          <span className='text-[#68B4FFBF]'>05.</span>Testing & QA</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] xl:w-[400px] xl:text-left xl:text-[18px]  space'>
            We rigorously test the performance app performance to
            Industry standards to evaluate its scalability,
            responsiveness, and stability.
          </p>
        </div>


        <div className='flex flex-col items-center grid7'>
          <img className='md:hidden' src="/assets/Deployment.svg" alt="DeploymentMobile" />
          <img className='hidden md:flex xl:hidden' src="/assets/Tablet66.svg" alt="DeploymentTablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px] xl:self-start xl:relative '>
          <span className='text-[#68B4FFBF]'>06.</span>Deployment</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] xl:w-[400px] xl:text-left xl:text-[18px] space'>
            Once the app fulfills our client’s requirements and expectations,
             we deploy the app according to the launch plan.
          </p>
        </div>


    </div>
    </>
  )
}

export default Mainside