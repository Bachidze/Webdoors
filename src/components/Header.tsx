
const Header = () => {
  return (
    <>
    <div className="m-[15px] md:m-[32px] xl:hidden">
      <div className="flex justify-between">
        <img src="/assets/User.svg" alt="UserImg" />
        <img src="/assets/MiddleIcon.svg" alt="MiddleImg" />
        <img src="/assets/HeaderRight.svg" alt="LEftImg" />
      </div>
    </div>

    <div className="hidden xl:flex items-center justify-between xl:mt-[77px] xl:ml-[140px] xl:mr-[150px]">
      <div className="flex gap-9 text-[20px] text-white font-bold">
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </div>
      <div>
      <img className="xl:w-[40px] xl:relative right-[40px]" src="/assets/MiddleIcon.svg" alt="MiddleImg" />
      </div>
      <div className="flex gap-[25px]">
        <img className="xl:w-[60px]" src="/assets/ManImg.svg" alt="BlackProfile" />
        <img className="xl:w-[60px]" src="/assets/HeaderRight.svg" alt="LEftImg" />
      </div>
    </div>
    </>
  )
}

export default Header