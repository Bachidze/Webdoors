
const Header = () => {
  return (
    <div>
        <div className="m-[15px] flex justify-between  md:m-[30px] xl:mt-[77px]">
        <div className="hidden xl:flex text-[white] gap-[20px] text-[18px] font-bold xl: relative top-[10px] ml-[180px]">
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
            <img  className="xl:hidden " src="/assets/User.svg" alt="HeaderUserImg" />
            <img className="md:w-[34px] xl:w-[39px] xl:relative right-[50px]" src="/assets/MiddleIcon.svg" alt="MainIconMiddle" />
            <div className="flex gap-5">
            <img className="hidden xl:flex" src="/assets/ManImg.svg" alt="" />
            <img className="xl:mr-[180px]" src="/assets/HeaderRight.svg" alt="HeaderRightIcon" />
            </div>
        </div>
    </div>
  )
}

export default Header