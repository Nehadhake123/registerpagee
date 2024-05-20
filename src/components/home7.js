const GroupComponent1 = () => {
    return (
      <div className="self-stretch flex flex-col items-center justify-start pt-[113px] px-5 pb-[155px] box-border relative gap-[32px] max-w-full text-center text-45xl text-white font-manrope mq825:gap-[16px]">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-69@2x.png"
        />
        <div className="w-[986px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[76px] font-bold font-inherit z-[1] mq450:text-19xl mq450:leading-[46px] mq825:text-32xl mq825:leading-[61px]">
            Spend your time on what you love
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl">
            <div className="w-[731px] relative leading-[36px] font-medium inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[29px]">
              Let us do the NDIS Provider search for you, connecting you with
              verified local providers to choose from
            </div>
          </div>
        </div>
        <div className="w-[986px] flex flex-row items-start justify-center max-w-full">
          <button className="cursor-pointer [border:none] py-[15px] px-8 bg-primery-color rounded-23xl flex flex-row items-start justify-start gap-[8px] z-[1]">
            <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[81px]">
              Let’s Talk
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/arrow-up-right-md-1.svg"
              />
            </div>
          </button>
        </div>
      </div>
    );
  };
  
  export default GroupComponent1;
  