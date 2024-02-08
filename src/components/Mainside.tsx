import './Mainside.css'

const Mainside = () => {
  return (
    <>
    <div className='ml-[15px] mr-[15px] mt-[120px] text-center mainGrid'>


        <div className='flex flex-col items-center grid1'>
          <img src="/assets/BrainImg2.svg" alt="MobileBraInimg" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px]'>
          <span className='text-[#68B4FFBF]'>01.</span>Analysis</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC]  space'>
            We work with our clients to gather the requirements,
            use cases, process specifications and conduct in-depth
            research on demographics, behavior patterns, and target
            audiences to refine your idea and create a strong app
            foundation
          </p>
        </div>

        <div className='flex flex-col items-center relative top-[20px]  grid2'>
            <div className='flex items-center'>
                <div className='border3'></div>
                <div className='border2'></div>
                <div className='border1'></div>
            </div>
            <div className='flex gap-1'>
                <h2 className='font-normal text-[14px] leading-[17px] text-white'>Services</h2>
                <img src="/assets/Services.svg" alt="ServicesMobile" />
            </div>
        </div>

        <div className='flex flex-col items-center grid3'>
          <img src="/assets/Wirefarming.svg" alt="WireFramingMobile" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px]'>
          <span className='text-[#68B4FFBF]'>02.</span>Wireframing</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] space2'>
            Our experienced UI/UX designers will create wireframes to
            visualize the client’s concept and ideas that clearly
            define the user journey
          </p>
        </div>

        <div className='flex flex-col items-center grid4'>
          <img src="/assets/Prototyping.svg" alt="PropTypingMobile" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px]'>
          <span className='text-[#68B4FFBF]'>03.</span>Prototyping</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] space'>
            We lead the industry with best in class prototype design 
            techniques that give you an earlier heads up on the
            look and feel, during the development cycle.
          </p>
        </div>


        <div className='flex flex-col items-center grid5'>
          <img src="/assets/BrainImg2.svg" alt="Design & code Mobile" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px]'>
          <span className='text-[#68B4FFBF]'>04.</span>Design & code</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] space'>
            We use Human Interface Guidelines and follow industry best
            practices during our design and coding process. Our
            capabilities deliver sleek and responsive apps to
            give you a competitive edge.
          </p>
        </div>


        <div className='flex flex-col items-center grid6'>
          <img src="/assets/Testing & QA.svg" alt="Testing & QA mobile" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px]'>
          <span className='text-[#68B4FFBF]'>05.</span>Testing & QA</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] space'>
            We rigorously test the performance app performance to
            Industry standards to evaluate its scalability,
            responsiveness, and stability.
          </p>
        </div>


        <div className='flex flex-col items-center grid7'>
          <img src="/assets/Deployment.svg" alt="Deployment" />
          <h3 className='font-bold text-white leading-[17.5px] mb-[10px]'>
          <span className='text-[#68B4FFBF]'>06.</span>Deployment</h3>
          <p className='w-[181px] text-[12px] font-normal leading-[14px] text-[#C1D7EC] space'>
            Once the app fulfills our client’s requirements and expectations,
             we deploy the app according to the launch plan.
          </p>
        </div>


    </div>
    </>
  )
}

export default Mainside