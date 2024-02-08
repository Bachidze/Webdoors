import './Mainside.css'

const Mainside = () => {
  return (
    <>
    <div className='ml-[15px] mr-[15px] mt-[120px] text-center mainGrid md:text-[18px]'>


        <div className='flex flex-col items-center grid1'>
          <img className='md:hidden' src="/assets/BrainImg2.svg" alt="MobileBraInimg" />
          <img className='hidden md:flex' src="/assets/BrainImg.svg" alt="BrainTablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px]'>
          <span className='text-[#68B4FFBF]'>01.</span>Analysis</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px]  space'>
            We work with our clients to gather the requirements,
            use cases, process specifications and conduct in-depth
            research on demographics, behavior patterns, and target
            audiences to refine your idea and create a strong app
            foundation
          </p>
        </div>

        <div className='flex flex-col items-center relative top-[20px]  grid2'>
            <div className='flex items-center'>
                <div className='border3 md:h-[11px]'></div>
                <div className='border2 md:w-[126px]'></div>
                <div className='border1 md:w-[11px] md:h-[11px]'></div>
            </div>
            <div className='flex gap-1 md:gap-[50px] md:mt-[10px] md:mb-[20px]'>
                <h2 className='font-normal text-[14px] leading-[17px] text-white md:text-[18px]'>Services</h2>
                <img className='md:w-[15px]' src="/assets/Services.svg" alt="ServicesMobile" />
            </div>
        </div>

        <div className='flex flex-col items-center grid3'>
          <img className='md:hidden' src="/assets/Wirefarming.svg" alt="WireFramingMobile" />
          <img className='hidden md:flex' src="/assets/Tablet22.svg" alt="Tablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px]'>
          <span className='text-[#68B4FFBF]'>02.</span>Wireframing</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] space2'>
            Our experienced UI/UX designers will create wireframes to
            visualize the client’s concept and ideas that clearly
            define the user journey
          </p>
        </div>

        <div className='flex flex-col items-center grid4'>
          <img className='md:hidden' src="/assets/Prototyping.svg" alt="PropTypingMobile" />
          <img className='hidden md:flex' src="/assets/Tablet33.svg" alt="PropTypingTablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px]'>
          <span className='text-[#68B4FFBF]'>03.</span>Prototyping</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] space'>
            We lead the industry with best in class prototype design 
            techniques that give you an earlier heads up on the
            look and feel, during the development cycle.
          </p>
        </div>


        <div className='flex flex-col items-center grid5'>
          <img className='md:hidden' src="/assets/BrainImg2.svg" alt="Design & code Mobile" />
          <img className='hidden md:flex' src="/assets/Tablet44.svg" alt="Design & code Tablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px]'>
          <span className='text-[#68B4FFBF]'>04.</span>Design & code</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] space'>
            We use Human Interface Guidelines and follow industry best
            practices during our design and coding process. Our
            capabilities deliver sleek and responsive apps to
            give you a competitive edge.
          </p>
        </div>


        <div className='flex flex-col items-center grid6'>
          <img className='md:hidden' src="/assets/Testing & QA.svg" alt="Testing & QA mobile" />
          <img className='hidden md:flex' src="/assets/AIM.svg" alt="Testing & QA mobile" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px]'>
          <span className='text-[#68B4FFBF]'>05.</span>Testing & QA</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] space'>
            We rigorously test the performance app performance to
            Industry standards to evaluate its scalability,
            responsiveness, and stability.
          </p>
        </div>


        <div className='flex flex-col items-center grid7'>
          <img className='md:hidden' src="/assets/Deployment.svg" alt="DeploymentMobile" />
          <img className='hidden md:flex' src="/assets/Tablet66.svg" alt="DeploymentTablet" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px] md:mb-[20px]'>
          <span className='text-[#68B4FFBF]'>06.</span>Deployment</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] md:w-[339px] md:text-[16px] md:leading-[22px] space'>
            Once the app fulfills our client’s requirements and expectations,
             we deploy the app according to the launch plan.
          </p>
        </div>


    </div>
    </>
  )
}

export default Mainside