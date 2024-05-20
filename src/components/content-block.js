import FilterRows from "./filter-rows";

const ContentBlock = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-118px] text-center text-13xl text-taittle-color font-manrope">
      <div className="w-[1200px] rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 px-8 box-border gap-[32px] max-w-full z-[2] mq825:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center">
          <h1 className="m-0 w-[386px] relative text-inherit leading-[36px] capitalize font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[22px] mq825:text-7xl mq825:leading-[29px]">
            NDIS Providers in Sydney
          </h1>
        </div>
        <form className="m-0 self-stretch flex flex-row flex-wrap items-end justify-center py-0 pr-[3px] pl-0 gap-[19px]">
          <FilterRows servicesType="Services Type" />
          <div className="h-[77px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
            <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-darkgray-200" />
          </div>
          <div className="w-[201px] flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[194px] relative text-xl leading-[28px] font-medium font-manrope text-taittle-color text-left inline-block mq450:text-base mq450:leading-[22px]">
              Locations
            </div>
            <div className="self-stretch rounded-4xs bg-background-color flex flex-row items-start justify-start py-[11px] px-3 border-[0.5px] border-solid border-orange">
              <input
                className="w-[120px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0"
                placeholder="Locations"
                type="text"
              />
              <div className="h-6 w-6 relative overflow-hidden shrink-0 hidden" />
            </div>
          </div>
          <div className="h-[77px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
            <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-darkgray-200" />
          </div>
          <FilterRows
            servicesType="Providers Near You"
            propWidth="201px"
            propAlignSelf="unset"
          />
          <div className="h-[77px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
            <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-darkgray-200" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border min-w-[142px]">
            <FilterRows
              servicesType="Disabilities types"
              propWidth="unset"
              propAlignSelf="stretch"
            />
          </div>
          <button className="cursor-pointer [border:none] py-[15px] px-14 bg-primery-color rounded-23xl flex flex-row items-start justify-start hover:bg-chocolate">
            <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[63px]">
              Search
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContentBlock;
