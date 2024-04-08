import { ArrowRight } from "@phosphor-icons/react";

const Button = ({ btn_show, btn_label }) => {
  if (btn_show) {
    return (
      <>
        <button className="flex gap-2 items-center justify-start w-fit underline underline-offset-4 text-sm text-zinc-400 transition-all duration-300 ease-in-out">
          {btn_label}
          <ArrowRight />
        </button>
        {/* <button className=" flex gap-2 px-3 py-2 bg-text-primary text-white text-sm font-medium items-center hover:bg-opacity-80 rounded-md hover:cursor-pointer md:w-fit w-full transition-all duration-300 ease-in-out justify-center">
          {btn_label}
          <ArrowRight />
        </button> */}
      </>
    );
  } else {
    return null;
  }
};

export default Button;
