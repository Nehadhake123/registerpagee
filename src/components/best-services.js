import ServiceRows from "./service-rows";

const BestServices = () => {
  return (
    <section className="self-stretch bg-background-color flex flex-col items-center justify-center py-[100px] px-5 box-border gap-[56px] max-w-full text-left text-29xl text-taittle-color font-manrope mq825:gap-[28px]">
      <div className="w-[667px] flex flex-col items-center justify-start max-w-full text-center mq825:gap-[28px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-bold font-inherit mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
          Our Best Services
        </h1>
      </div>
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[24px] max-w-full text-xl">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
          <ServiceRows emptyContainers="/01.svg" acupuncture="Acupuncture" />
          <ServiceRows emptyContainers="/02.svg" acupuncture="Art Therapy" />
          <ServiceRows emptyContainers="/51.svg" acupuncture="Audiology" />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
          <ServiceRows
            emptyContainers="/52.svg"
            acupuncture="Behavioral Support"
          />
          <ServiceRows
            emptyContainers="/53.svg"
            acupuncture="Car Modifications"
          />
          <ServiceRows emptyContainers="/54.svg" acupuncture="Chiropractor" />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
          <ServiceRows emptyContainers="/55.svg" acupuncture="Cleaning" />
          <ServiceRows emptyContainers="/56.svg" acupuncture="Consumables" />
          <ServiceRows
            emptyContainers="/56-1.svg"
            acupuncture="Creative Arts"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-lg text-white">
        <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-8 gap-[7px] whitespace-nowrap">
          <div className="relative leading-[26px] font-semibold">
            View All Services
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/arrow-up-right-md-1-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default BestServices;
