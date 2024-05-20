import { useMemo } from "react";

const ItemLinkBoCoThngN = ({
  whereDoYouNeedService,
  enterASuburbOrPoPlacehold,
  propAlignSelf,
  propWidth,
  propWidth1,
}) => {
  const itemLinkStrongPhtTrStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const enterASuburbStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[48px] max-w-full text-left text-29xl text-taittle-color font-manrope mq750:gap-[24px]">
      <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[34px] mq1050:text-19xl mq1050:leading-[45px]">
        {whereDoYouNeedService}
      </h1>
      <div className="self-stretch rounded-2xl bg-background-color overflow-hidden flex flex-col items-start justify-start py-[76px] pr-[37px] pl-10 text-5xl">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[16px]"
          style={itemLinkStrongPhtTrStyle}
        >
          <h3 className="m-0 relative text-inherit leading-[32px] font-medium font-inherit mq450:text-lgi mq450:leading-[26px]">
            Enter the services location
          </h3>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[18px] px-6 border-[1.5px] border-solid border-orange">
            <input
              className="w-[253px] [border:none] [outline:none] font-medium font-manrope text-xl bg-[transparent] h-8 relative leading-[32px] text-paragraph-font-color text-left inline-block p-0 mq450:text-base mq450:leading-[26px]"
              placeholder={enterASuburbOrPoPlacehold}
              type="text"
              style={enterASuburbStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemLinkBoCoThngN;
