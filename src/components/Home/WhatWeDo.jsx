import "../../css/hero.css";
import pic1 from "../../assets/Home/target.svg"

export default function WhatWeDo() {
  return (
    <div className="flex flex-col gap-6 sm:ml-24 ml-0 2xl:w-[80rem] xl:w-[72.5rem] lg:w-[50rem] md:w-[41rem] sm:w-[28rem] w-full sm:pr-0 pr-8">
      <h1 className="mt-12 lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:ml-0 ml-24 sm:w-full w-[17rem]">
        What we do?
      </h1>
      <p className="ml-10 text-xl font-medium text-white sm:w-full w-[20rem]">
        <span className="text-[#00b386]">BetCrypt</span> is a fun opinion trading platform that allows users to bet on the outcome of events. Users can bet on the outcome of events such as sports, politics, and more. Users can also create their own events and invite others to bet on them.
      </p>
      <div className="ml-10 relative  rounded-2xl drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <img className="rounded-2xl md:w-[48rem] sm:w-[28rem] w-full" src={pic1} alt="" />
      </div>
    </div>
  );
}
