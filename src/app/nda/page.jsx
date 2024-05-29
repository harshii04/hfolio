"use client";
import { ArrowRight, Lock } from "@phosphor-icons/react";

const NDA = () => {
  return (
    <>
      <div className="container h-full items-center justify-center pt-40">
        <div className=" flex flex-col items-center justify-center gap-4">
          <div className="">
            <Lock size={32} color="#A1A1AA" weight="fill" />
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-text-primary font-medium text-2xl">
              This content is proctected
            </span>
            <span className="text-text-secondary text-sm ">
              To view, please enter the password
            </span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="password"
              className="bg-[#F9FAFB] placeholder:text-sm placeholder:text-left pl-2 pr-6 py-3 rounded-lg text-text-secondary"
              placeholder="Enter password"
            />
            <button className="p-2 bg-custom-gradient border border-[#0065F4] rounded-lg hover:bg-custom-hover-gradient transition-all duration-300 ease-in-out hover:shadow-main-cta">
              <ArrowRight size={24} color="#ffffff" weight="regular" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NDA;
