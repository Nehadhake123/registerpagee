import { useMemo } from "react";

const FilterRows = ({
  servicesType,
  servicesType1,
  propWidth,
  propAlignSelf,
}) => {
  const filterRowsStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className="w-[201px] flex flex-col items-start justify-center gap-[12px] text-left text-xl text-taittle-color font-manrope"
      style={filterRowsStyle}
    >
      <div className="w-[194px] relative leading-[28px] font-medium inline-block mq450:text-base mq450:leading-[22px]">
        {servicesType}
      </div>
      <select className="self-stretch rounded-4xs bg-background-color flex flex-col items-start justify-center p-[11px] font-manrope text-base text-paragraph-font-color border-[0.5px] border-solid border-orange" />
    </div>
  );
};

export default FilterRows;
