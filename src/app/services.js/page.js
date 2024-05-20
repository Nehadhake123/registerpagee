import React from 'react';
import FrameComponent1 from "../../components/Form2";
import StrongCuChuynVinamilk from "../../components/Form4";
import ItemLinkBoCoThngN from "../../components/Form3";
import FrameComponent from "../../components/Form1";

const Services = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent1 />
      <section className="self-stretch flex flex-col items-center justify-start pt-[105px] pb-[104px] pr-5 pl-[21px] box-border relative gap-[24px] max-w-full text-center text-[56px] text-white font-manrope mq450:pt-[68px] mq450:pb-[68px] mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-70@2x.png"
        />
        <div className="w-[903px] hidden max-w-full z-[1]" />
        <h1 className="m-0 w-[839px] relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-[34px] mq450:leading-[38px] mq1050:text-[45px] mq1050:leading-[51px]">
          Our Services
        </h1>
        <div className="w-[839px] flex flex-row items-start justify-center max-w-full text-xl">
          <div className="w-[637px] relative leading-[36px] font-medium inline-block shrink-0 max-w-full z-[2] mq450:text-base mq450:leading-[29px]">
            Let us do the NDIS Provider search for you, connecting you with
            verified local providers to choose from
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border gap-[56px] max-w-full text-left text-5xl text-forestgreen font-manrope lg:pb-[52px] lg:box-border mq750:gap-[28px] mq750:pb-[34px] mq750:box-border">
        <StrongCuChuynVinamilk />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1199px] flex flex-col items-center justify-start gap-[100px] max-w-full lg:gap-[50px] mq750:gap-[25px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[48px] max-w-full mq750:gap-[24px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
                <ItemLinkBoCoThngN
                  whereDoYouNeedService="Where do you need service?"
                  enterASuburbOrPoPlacehold="Enter a suburb or postcode"
                />
                <ItemLinkBoCoThngN
                  whereDoYouNeedService="Where Should we send the result?"
                  enterASuburbOrPoPlacehold="Enter your email address"
                  propAlignSelf="unset"
                  propWidth="1100px"
                  propWidth1="231px"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[24px] max-w-full">
                <h3 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[26px]">
                  <span className="text-taittle-color">{`I want `}</span>
                  <span>{`Support Coordination `}</span>
                  <span className="text-taittle-color">{`, `}</span>
                  <span>{`My Self `}</span>
                  <span className="text-taittle-color">,</span>
                  <span>{` Early Childhood( 0-7 Years ) `}</span>
                  <span className="text-paragraph-font-color">{`, `}</span>
                  <span>Self managed</span>
                </h3>
                <h3 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit inline-block max-w-full text-taittle-color mq450:text-lgi mq450:leading-[26px]">
                  <span>{`These support are waiting for the `}</span>
                  <span className="text-forestgreen">
                    NDIS funding to be approved
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[40px] max-w-full text-lg text-white mq450:flex-wrap mq450:gap-[20px]">
              <button className="cursor-pointer py-[13px] px-14 bg-white rounded-23xl flex flex-row items-center justify-center border-[1px] border-solid border-primery-color hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-primery-color text-left inline-block min-w-[42px]">
                  Back
                </div>
              </button>
              <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-14">
                <div className="relative leading-[26px] font-semibold inline-block min-w-[43px]">
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Services;
