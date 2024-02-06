import './Mainside.css'

const Mainside = () => {
  return (
    <div className="mt-[130px] ml-[15px] grid">
        <div className='flex flex-col justify-center items-center gridd'>
            <div className='flex flex-col items-center'>
            <img src="/assets/BrainImg2.svg" alt="BrainImg" />
            <h2 className='text-white font-bold text-[14px] mb-[12px]'><span className='text-[#68B4ff] font-bold'>01.</span> Analysis</h2>
            </div>
            <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[240px] text-left'>We work with our clients to gather the requirements,
                 use cases, process specifications and conduct in-depth
                  research on demographics, behavior patterns, and target
                   audiences to refine your idea and create a strong app foundation
            </p>
        </div>
        <div className='flex flex-col justify-between items-center mt-[10px] grid2 max-h-[10px]'>
            <div className='flex items-center'>
                 <div className='border-t-[15px] w-[1px]'>

                </div>
                <div className='border-t-[1px] w-[67px]'>

                </div>
                <div className='bord'>

                </div>
            </div>
            <div className='flex gap-[12px]'>
            <h3 className='text-[14px] text-[white]'>Services</h3>
            <img className='relative top-[1px]' src="/assets/Services.svg" alt="" />
            </div>
        </div>

        <div className='flex flex-col justify-center items-center grid3'>
            <div className='flex flex-col items-center'>
            <img src="/assets/Wirefarming.svg" alt="BrainImg" />
            <h2 className='
            text-white font-bold 
            text-[14px] mb-[12px]'>
                <span className='text-[#68B4ff] font-bold'>02.</span>
                Wireframing
                 </h2>
            </div>
            <p className='
            text-[12px] text-[#C1D7EC] font-medium 
            max-w-[210px] text-left '>
            Our experienced UI/UX designers will 
            create wireframes to visualize the client’s concept 
            and ideas that clearly define the user journey
            </p>
        </div>

        <div className='flex flex-col justify-center items-center grid4'>
            <div className='flex flex-col items-center'>
            <img src="/assets/Prototyping.svg" alt="BrainImg" />
            <h2 className=
            'text-white font-bold text-[14px] mb-[12px]'>
                <span className='text-[#68B4ff] font-bold'>03.</span> 
                 Prototyping

                </h2>
            </div>
            <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[270px] text-left'>
                We work with our clients to gather the requirements,
                We lead the industry with best in class prototype 
                design techniques that give you an earlier heads 
                up on the look and feel, during the development cycle.
            </p>
        </div>

        <div className='flex flex-col justify-center items-center grid5'>
            <div className='flex flex-col items-center'>
            <img src="/assets/Design & code.svg" alt="BrainImg" />
            <h2 className='text-white font-bold text-[14px] mb-[12px]'>
                <span className='text-[#68B4ff] font-bold'>04.</span>
                 Design & code
                 </h2>
            </div>
            <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[260px] text-left'>
                We work with our clients to gather the requirements,
                We use Human Interface Guidelines and follow industry 
                best practices during our design and coding process.
                 Our capabilities deliver sleek and responsive apps 
                 to give you a competitive edge.
            </p>
        </div>

        <div className='flex flex-col justify-center items-center grid6'>
            <div className='flex flex-col items-center'>
            <img src="/assets/Testing & QA.svg" alt="BrainImg" />
            <h2 className='text-white font-bold text-[14px] mb-[12px]'>
                <span className='text-[#68B4ff] font-bold'>05.</span>
                Testing & QA
                 </h2>
            </div>
            <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[270px] text-left'>We work with our clients to gather the requirements,
            We rigorously test the performance app
             performance to Industry standards to evaluate
             its scalability, responsiveness, and stability.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center grid7'>
            <div className='flex flex-col items-center'>
            <img  src="/assets/Deployment.svg" alt="BrainImg" />
            <h2 className='text-white font-bold text-[14px] mb-[12px]'>
                <span className='text-[#68B4ff] font-bold'>06.</span>
                 Deployment
                 </h2>
            </div>
            <p className='text-[12px] text-[#C1D7EC] font-medium  max-w-[264px] text-left'>
            We work with our clients to gather the requirements,
            Once the app fulfills our client’s requirements and 
            expectations, we deploy the app according to the launch plan.
            </p>
        </div>
    </div>
  )
}

export default Mainside