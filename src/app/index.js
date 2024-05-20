import React from "react";
import Link from "next/link";
import FrameComponent4 from "../components/home5";
import GroupComponent1 from "../components/home7";
import ContentBlock from "../components/content-block";
import Process from "../components/process";
import BestServices from "../components/best-services";
import GroupComponent from "../components/home6";
import JourneySupport from "../components/journey-support";
import Testimonial from "../components/testimonial";
import Empowerment from "../components/empowerment";
import Resources from "../components/resources";
import CityList from "../components/city-list";
import FrameComponent from "../components/hom1";

const imageSources = [
  "/group-14.svg",
  // Add more image sources if needed
];

const Home = () => {
  return (
    <div className="w-full h-auto relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[684px] px-[388px] pb-[6631.8px] box-border leading-[normal] tracking-[normal] lg:pl-[194px] lg:pr-[194px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="w-[97.3px] h-[97.2px] relative">
        {imageSources.map((src, index) => (
          <img
            key={index}
            className="absolute top-[0px] left-[0px] w-full h-full"
            alt=""
            src={src}
          />
        ))}
      </div>
      <main className="w-full !m-[0] relative flex flex-col items-start justify-start max-w-full z-[2]">
        <FrameComponent4 />
        <div className="w-[1189px] h-[7px] relative [filter:blur(100px)] box-border hidden max-w-full border-t-[7px] border-solid border-darkgray-100" />
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <GroupComponent1 />
          <ContentBlock />
        </section>
        <Process />
        <BestServices />
        <GroupComponent />
        <JourneySupport />
        <Testimonial />
        <Empowerment />
        <Resources />
        <CityList />
        <FrameComponent />
      </main>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 mt-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
        <p className="text-lg mb-6">Please navigate to one of the following pages:</p>
        <div className="flex space-x-4">
          <Link href="/register">
            <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Register
            </a>
          </Link>
          <Link href="/services">
            <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Services
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
