const FrameComponent2 = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start pt-14 px-[120px] pb-0 text-left text-base text-paragraph-font-color font-manrope mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative leading-[24px] inline-block min-w-[44px]">
              Home
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
              loading="lazy"
              alt=""
              src="/img/leftArrow.png"
            />
            <div className="relative leading-[24px] font-medium text-taittle-color inline-block min-w-[64px]">
              Register
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent2;
  