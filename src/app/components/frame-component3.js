const FrameComponent3 = () => {
    return (
      <header className="self-stretch bg-white flex flex-col items-center justify-center py-6 px-5 box-border top-[0] z-[99] sticky max-w-full">
        <div className="w-[1200px] flex flex-row items-center justify-between gap-[20px] max-w-full mq1050:w-[459px]">
          <img
            className="self-stretch w-[123px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
            loading="lazy"
            alt=""
            src="/img/logo.svg"
          />
          <nav className="m-0 w-[741px] shadow-[0px_0px_42px_2px_rgba(241,_241,_241,_0.56)] rounded-15xl bg-white box-border flex flex-col items-center justify-center py-[15px] px-[31px] max-w-full border-[1px] border-solid border-midnightblue-100 mq1050:hidden">
            <nav className="m-0 self-stretch flex flex-row items-center justify-between gap-[20px] text-left text-base text-paragraph-font-color font-manrope">
              <div className="relative font-semibold text-taittle-color inline-block min-w-[45px]">
                Home
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative font-medium inline-block min-w-[106px] whitespace-nowrap">
                  Find Providers
                </div>
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="relative font-medium inline-block min-w-[100px] whitespace-nowrap">
                  Find Services
                </div>
              </div>
              <div className="relative font-medium inline-block min-w-[65px]">
                Services
              </div>
              <div className="relative font-medium inline-block min-w-[42px]">
                Blogs
              </div>
              <div className="relative font-medium inline-block min-w-[69px] whitespace-nowrap">
                About Us
              </div>
              <div className="relative font-medium inline-block min-w-[85px] whitespace-nowrap">
                Contact Us
              </div>
            </nav>
          </nav>
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[99px] flex flex-row items-center justify-center">
              <div className="flex-1 rounded-23xl flex flex-row items-center justify-center py-[13px] px-[22px] border-[1.5px] border-solid border-midnightblue-200">
                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-taittle-color text-left inline-block min-w-[52px] whitespace-nowrap">
                  Log In
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
              <div className="rounded-23xl bg-taittle-color flex flex-row items-center justify-center py-[15px] px-[23px]">
                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[75px] whitespace-nowrap">
                  Register
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default FrameComponent3;
  