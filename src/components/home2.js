import { useMemo } from "react";

const FrameComponent1 = ({
  nsw,
  albury,
  bathurst,
  centralCoast,
  coffsHarbour,
  dubbo,
  lismore,
  maitland,
  newcastle,
  richmond,
  portMacquarie,
  sydney,
  tamworth,
  waggaWagga,
  propWidth,
  propMinWidth,
  propTextTransform,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
  propAlignSelf,
  propDisplay,
  propMinWidth5,
  propFlex,
  propMinWidth6,
  propMinWidth7,
  propMinWidth8,
  propMinWidth9,
  propMinWidth10,
  propMinWidth11,
  propMinWidth12,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const alburyStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bathurstStyle = useMemo(() => {
    return {
      textTransform: propTextTransform,
      minWidth: propMinWidth1,
    };
  }, [propTextTransform, propMinWidth1]);

  const centralCoastStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const coffsHarbourStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const dubboStyle = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const cityRowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const lismoreStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth5,
      flex: propFlex,
    };
  }, [propDisplay, propMinWidth5, propFlex]);

  const maitlandStyle = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  const newcastleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth7,
    };
  }, [propMinWidth7]);

  const richmondStyle = useMemo(() => {
    return {
      minWidth: propMinWidth8,
    };
  }, [propMinWidth8]);

  const portMacquarieStyle = useMemo(() => {
    return {
      minWidth: propMinWidth9,
    };
  }, [propMinWidth9]);

  const sydneyStyle = useMemo(() => {
    return {
      minWidth: propMinWidth10,
    };
  }, [propMinWidth10]);

  const tamworthStyle = useMemo(() => {
    return {
      minWidth: propMinWidth11,
    };
  }, [propMinWidth11]);

  const waggaWaggaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth12,
    };
  }, [propMinWidth12]);

  return (
    <div className="w-[150px] shrink-0 flex flex-col items-start justify-start gap-[32px] text-left text-5xl text-taittle-color font-manrope">
      <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-medium font-inherit mq450:text-lgi mq450:leading-[22px]">
        {nsw}
      </h3>
      <div
        className="flex flex-col items-start justify-start gap-[24px] text-base"
        style={frameDivStyle}
      >
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] inline-block min-w-[48px]"
            style={alburyStyle}
          >
            {albury}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] inline-block min-w-[65px]"
            style={bathurstStyle}
          >
            {bathurst}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[103px]"
            style={centralCoastStyle}
          >
            {centralCoast}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[104px]"
            style={coffsHarbourStyle}
          >
            {coffsHarbour}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[49px]"
            style={dubboStyle}
          >
            {dubbo}
          </div>
        </div>
        <div
          className="flex flex-row items-center justify-start gap-[8px]"
          style={cityRowStyle}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[59px]"
            style={lismoreStyle}
          >
            {lismore}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[65px]"
            style={maitlandStyle}
          >
            {maitland}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[79px]"
            style={newcastleStyle}
          >
            {newcastle}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[76px]"
            style={richmondStyle}
          >
            {richmond}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[113px]"
            style={portMacquarieStyle}
          >
            {portMacquarie}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[56px]"
            style={sydneyStyle}
          >
            {sydney}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[74px]"
            style={tamworthStyle}
          >
            {tamworth}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/location-1.svg"
          />
          <div
            className="relative leading-[20px] capitalize inline-block min-w-[106px]"
            style={waggaWaggaStyle}
          >
            {waggaWagga}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
