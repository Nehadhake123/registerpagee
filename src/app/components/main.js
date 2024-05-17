"use client"

import { useForm, Controller } from 'react-hook-form';
import FrameComponent1 from "./frame-component1";
import FrameComponent2 from "./frame-component2";

const Main = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border gap-[56px] max-w-full text-left text-base text-paragraph-font-color font-manrope lg:pb-[52px] lg:box-border mq750:gap-[28px] mq750:pb-[34px] mq750:box-border">
      <FrameComponent2 />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-taittle-color">
        <div className="w-[500px] shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white box-border flex flex-col items-start justify-start py-[77px] px-[98px] gap-[32px] max-w-full border-[2px] border-solid border-orange-200 lg:pt-[50px] lg:pb-[50px] lg:box-border mq750:gap-[16px] mq750:py-8 mq750:px-[49px] mq750:box-border">
          <img
            className="w-[197px] h-[90px] relative overflow-hidden shrink-0"
            alt=""
            src="/img/logo2.svg"
          />
          <form className="self-stretch flex flex-col items-start justify-start gap-[24px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 text-5xl">
              <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-lgi mq450:leading-[22px]">
                Create your Account
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <FrameComponent1
                firstName="First Name"
                enterFirstNamePlaceholder="Enter First Name"
                control={control}
                name="firstName"
                rules={{ required: 'First Name is required' }}
              />
              <FrameComponent1
                firstName="Last Name"
                enterFirstNamePlaceholder="Enter Last Name"
                propMinWidth="79px"
                propDisplay="inline-block"
                propWidth="122px"
                control={control}
                name="lastName"
                rules={{ required: 'Last Name is required' }}
              />
              <FrameComponent1
                firstName="Email Address"
                enterFirstNamePlaceholder="Enter Your Email"
                propMinWidth="106px"
                propDisplay="inline-block"
                propWidth="118px"
                control={control}
                name="email"
                rules={{ required: 'Email is required' }}
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[73px]">
                  Password
                </div>
                <div className="self-stretch rounded-19xl flex flex-row items-start justify-start py-3.5 px-6 text-paragraph-font-color border-[1px] border-solid border-orange-100">
                  <div className="h-14 w-[300px] relative rounded-19xl box-border hidden border-[1px] border-solid border-orange-100" />
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: 'Password is required' }}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="w-[122px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0 z-[1]"
                        placeholder="Password"
                        type="password"
                      />
                    )}
                  />
                </div>
              </div>
              <FrameComponent1
                firstName="Confirm Password"
                enterFirstNamePlaceholder="Confirm Password"
                propMinWidth="unset"
                propDisplay="unset"
                propWidth="135px"
                control={control}
                name="confirmPassword"
                rules={{ required: 'Confirm Password is required' }}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4px] text-primery-color">
                <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[89px]">
                  <div className="self-stretch h-px relative bg-orange-100" />
                </div>
                <div className="relative leading-[24px] inline-block min-w-[16px] mq450:w-full mq450:h-4">
                  or
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[89px]">
                  <div className="self-stretch h-px relative bg-orange-100" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm">
                <div className="self-stretch rounded-18xl flex flex-col items-center justify-center py-3.5 px-6 border-[1px] border-solid border-orange-100">
                  <div className="flex flex-row items-center justify-start py-0 px-5 gap-[12px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/img/goggle.svg"
                    />
                    <div className="relative leading-[128.5%] font-medium">
                      Continue with Google
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] py-4 px-5 bg-primery-color self-stretch rounded-18xl flex flex-row items-start justify-center hover:bg-chocolate"
                type="submit"
              >
                <div className="relative text-lg leading-[24px] font-semibold font-manrope text-white text-left inline-block min-w-[75px]">
                  Register
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[55px] pl-[55.5px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px]">
                    Already have an account?
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[72px] text-primery-color">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[45px] whitespace-nowrap">
                      Log in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Main;
