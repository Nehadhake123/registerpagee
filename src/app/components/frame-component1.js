import { useMemo } from "react";
import { Controller } from "react-hook-form";

const FrameComponent1 = ({
  firstName,
  enterFirstNamePlaceholder,
  propMinWidth,
  propDisplay,
  propWidth,
  control,
  name,
  rules,
}) => {
  const firstNameStyle = useMemo(() => ({
    minWidth: propMinWidth,
    display: propDisplay,
  }), [propMinWidth, propDisplay]);

  const enterFirstNameStyle = useMemo(() => ({
    width: propWidth,
  }), [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-base text-taittle-color font-manrope">
      <div
        className="relative leading-[24px] font-medium inline-block min-w-[80px]"
        style={firstNameStyle}
      >
        {firstName}
      </div>
      <div className="self-stretch rounded-19xl flex flex-row items-start justify-start py-3.5 px-6 border-[1px] border-solid border-orange-100">
        <div className="h-14 w-[300px] relative rounded-19xl box-border hidden border-[1px] border-solid border-orange-100" />
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <input
              {...field}
              className="w-[122px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0 z-[1]"
              placeholder={enterFirstNamePlaceholder}
              style={enterFirstNameStyle}
            />
          )}
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
