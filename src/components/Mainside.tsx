import './Mainside.css'

const Mainside = () => {
  return (
    <>
        <div className='hidden xl:flex flex-col items-center gap-4 mt-[150px] '>
            <h2 className='text-[white] text-[20px] font-normal'>INTRODUCING <span className='text-[#BFB0FF]'>WEBDOORS</span></h2>
            <h1 className='font-bold text-[38px] text-[white]'>DIGITAL<span className='text-[#BFB0FF]'> EXPERIENCE, </span>RE-IMAGINED</h1>
            <h5 className='text-[18px] font-normal text-[white] mb-[50px]'>A full-service digital agency with capabilities across web design and development</h5>
            <div className='w-[313px] h-[53px] bg-[#0500FFCC] rounded-[8px] flex justify-center items-center'>
                <img src="/assets/Need a web.svg" alt="NEED A WEBSITE IMG" />
            </div>
        </div>
        <div className='hidden xl:flex justify-center mt-[120px]'>
            <img src="/assets/Cube.svg" alt="CubeImg" />
        </div>
        
        
        <div className=' hidden xl:flex relative xl:left-[50px]'>
            <img className='absolute left-[-150px] top-[400px]' src="/assets/SkyRectangle.svg" alt="SkyRectimg" />
            <img className='absolute left-[770px] top-[300px]' src="/assets/BrainDesktop.svg" alt="DesktopBrainimg" />
            <img className='absolute left-[692px] top-[470px]' src="/assets/DaxriliSky.svg" alt="DaxriliSkyRectimg" />
            <img className='absolute left-[510px] top-[500px]' src="/assets/2Desktop.svg" alt="DesktopWireFarmingImg" />
            <img className='absolute left-[657px] top-[670px]' src="/assets/Purple.svg" alt="DesktopPurpleRectImg" />
            <img className='absolute left-[770px] top-[700px]' src="/assets/3Desktop.svg" alt="PurpleCube" />
            <img className='absolute left-[675px] top-[860px]' src="/assets/PinkYellow.svg" alt="DeesktopYellowRectImg" />
            <img className='absolute left-[520px] top-[920px]' src="/assets/DesktopMenu.svg" alt="DesktopCodeImg" />
            <img className='absolute left-[680px] top-[1080px]' src="/assets/DesktopYellow.svg" alt="DesktopYellowRectangleImg2" />
            <img className='absolute left-[770px] top-[1140px]' src="/assets/DesktopAim.svg" alt="DesktopAimImg" />
            <img className='absolute left-[689px] top-[1310px]' src="/assets/RedRect.svg" alt="DesktopRedRectImg" />
            <img className='absolute left-[510px] top-[1350px]' src="/assets/DesktopDeploy.svg" alt="DesktopRedDeploymentImg" />
            <img className='absolute right-0 top-[1460px] -z-10 w-[900px]' src="/assets/MainRed.svg" alt="DesktopLastRedRect" />
        </div>


    <div className="mt-[130px] ml-[15px] grid">


        <div className='flex flex-col justify-center items-center gridd xl:flex-row'>
            <div className='flex flex-col items-center'>
            <img className='md:hidden' src="/assets/BrainImg2.svg" alt="BrainImg" />
            <img className='hidden md:flex xl:hidden' src="/assets/Tablet1.svg" alt="BrainImgTablet" />
            </div>
                    <div className='flex flex-col items-center relative xl:mb-[200px] xl:ml-[50px] xl:bottom-[100px] xl:left-[45px]'>

                        <h2 className='text-white font-bold text-[14px] mb-[12px] md:text-[18px] xl:self-start '><span className='text-[#68B4ff] font-bold '>01.</span> Analysis</h2>
                        <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[240px] text-left md:text-[16px]  xl:max-w-[300px] xl:font-normal'>We work with our clients to gather the requirements,
                            use cases, process specifications and conduct in-depth
                            research on demographics, behavior patterns, and target
                            audiences to refine your idea and create a strong app foundation
                        </p>
                    </div>
        </div>
        <div className='flex flex-col justify-between items-center mt-[10px] grid2 max-h-[10px]  xl:absolute xl:top-[1450px] xl:left-1/2 xl:transform xl:-translate-x-1/3 -translate-y-1/2'>
            <div className='flex items-center'>
                 <div className='border-t-[15px] w-[1px]'>

                </div>
                <div className='border-t-[1px] w-[67px] md:w-[95px] xl:w-[200px]'>

                </div>
                <div className='bord'>

                </div>
            </div>
            <div className='flex gap-[12px]'>
            <h3 className='text-[14px] text-[white] md:text-[18px] xl:text-[36px]'>Services</h3>
            <img className='relative top-[1px] md:w-[15px] xl:w-[25px]' src="/assets/Services.svg" alt="LinkImg" />
            </div>
        </div>

        <div className='flex flex-col justify-center items-center grid3'>
            <div className='flex flex-col items-center'>
            <img className='md:hidden' src="/assets/Wirefarming.svg" alt="WireImg" />
            <img className='hidden md:flex xl:hidden' src="/assets/Tablet22.svg" alt="WireImgTablet" />
            </div>
                <div className='flex flex-col items-center relative xl:mr-[200px] xl:top-[50px] xl:right-[40px]'>

                    <h2 className='
                    text-white font-bold 
                    text-[14px] mb-[12px] md:text-[18px] xl:self-start xl:mt-[350px]'>
                        <span className='text-[#68B4ff] font-bold'>02.</span>
                        Wireframing
                        </h2>
                    <p className='
                    text-[12px] text-[#C1D7EC] font-medium 
                    max-w-[210px] text-left md:text-[16px]  xl:font-normal xl:max-w-[300px]'>
                    Our experienced UI/UX designers will 
                    create wireframes to visualize the client’s concept 
                    and ideas that clearly define the user journey
                    </p>
                </div>
        </div>

        <div className='flex flex-col justify-center items-center grid4'>
            <div className='flex flex-col items-center'>
            <img className='md:hidden' src="/assets/Prototyping.svg" alt="ProtImg" />
            <img className='hidden md:flex xl:hidden' src="/assets/Tablet33.svg" alt="ProtImgTablet" />
            </div>
                    <div className='flex flex-col items-center relative xl:mb-[200px] xl:ml-[50px] xl:bottom-[200px] xl:left-[40px]'>
                        <h2 className=
                        'text-white font-bold text-[14px] mb-[12px] md:text-[18px] xl:self-start'>
                            <span className='text-[#68B4ff] font-bold'>03.</span> 
                            Prototyping

                            </h2>
                        <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[270px] text-left md:text-[16px]  xl:font-normal xl:max-w-[300px]'>
                            We work with our clients to gather the requirements,
                            We lead the industry with best in class prototype 
                            design techniques that give you an earlier heads 
                            up on the look and feel, during the development cycle.
                        </p>
                    </div>
        </div>

        
        <div className='flex flex-col justify-center items-center grid5'>
            <div className='flex flex-col items-center'>
            <img className='md:hidden' src="/assets/Design & code.svg" alt="TestingImg" />
            <img className='hidden md:flex xl:hidden' src="/assets/Tablet44.svg" alt="TestingImgTablet" />
            </div>
                <div className='flex flex-col items-center relative xl:mr-[200px] xl:top-[180px] xl:right-[40px]'>
                        <h2 className='text-white font-bold text-[14px] mb-[12px] md:text-[18px] xl:self-start'>
                            <span className='text-[#68B4ff] font-bold'>04.</span>
                            Design & code
                            </h2>
                        <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[260px] text-left md:text-[16px]  xl:font-normal xl:max-w-[300px]'>
                            We work with our clients to gather the requirements,
                            We use Human Interface Guidelines and follow industry 
                            best practices during our design and coding process.
                            Our capabilities deliver sleek and responsive apps 
                            to give you a competitive edge.
                        </p>
                 </div>
        </div>

        <div className='flex flex-col justify-center items-center grid6'>
            <div className='flex flex-col items-center'>
            <img className='md:hidden' src="/assets/Testing & QA.svg" alt="DesignImg" />
            <img className='hidden md:flex xl:hidden' src="/assets/AIM.svg" alt="DesignImgTablet" />
            </div>
                    <div className='flex flex-col items-center relative xl:ml-[50px] xl:mb-[200px] xl:left-[40px] xl:bottom-[230px]'>

                        <h2 className='text-white font-bold text-[14px] mb-[12px] md:text-[18px] xl:self-start'>
                            <span className='text-[#68B4ff] font-bold'>05.</span>
                            Testing & QA
                            </h2>
                        <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[270px] text-left md:text-[16px]  xl:font-noraml xl:max-w-[300px]'>
                        We work with our clients to gather the requirements,
                        We rigorously test the performance app
                        performance to Industry standards to evaluate
                        its scalability, responsiveness, and stability.
                        </p>
                    </div>
        </div>
        <div className='flex flex-col justify-center items-center grid7'>
            <div className='flex flex-col items-center'>
            <img className='md:hidden'  src="/assets/Deployment.svg" alt="DeplyImg" />
            <img className='hidden md:flex xl:hidden' src="/assets/Tablet66.svg" alt="DeplyImgTablet" />
            </div>
                    <div className='flex flex-col items-center relative xl:mr-[200px] xl:top-[30px] xl:right-[40px]'>
                        <h2 className='text-white font-bold text-[14px] mb-[12px] md:text-[18px] xl:self-start'>
                            <span className='text-[#68B4ff] font-bold'>06.</span>
                            Deployment
                            </h2>
                        <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[264px] text-left md:text-[16px]  xl:font-noraml xl:max-w-[300px]'>
                        We work with our clients to gather the requirements,
                        Once the app fulfills our client’s requirements and 
                        expectations, we deploy the app according to the launch plan.
                        </p>
                    </div>
        </div>
    </div>
    </>
  )
}

export default Mainside