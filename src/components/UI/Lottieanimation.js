import { useEffect, useRef } from "react";

import Lottie from "lottie-web";

const LottieAnimation = () => {
  const container_new = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container_new.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../lottie/GreenSign.json"),
    });
  });

  return (
    <>
      <div className="container" ref={container_new}></div>
    </>
  );
};

export default LottieAnimation;
