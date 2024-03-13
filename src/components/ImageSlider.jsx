import React, { useEffect, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";

import { imgLinks } from "../constant";

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(()=>{
  const intr =   setInterval(()=>{
      handleSlide("next");
    },3000)
    return ()=>{
      clearInterval(intr);
    }
  },[active])

  const handleSlide = (dir) => {
    
    if (dir == "prev") {
      let temp = active - 1;
      if (active === 0) setActive(imgLinks.length - 1);
      else setActive(temp);
    } else {
      console.log(dir, active);
      let temp = active + 1;
      if (active === imgLinks.length - 1) setActive(0);
      else setActive(temp);
    }
  };

  return (
    <div className="">
      <h2 className=" text-4xl pb-7 text-black text-center">Image Slider</h2>
      <div className="flex items-center flex-wrap justify-center">
        <FcPrevious onClick={() => handleSlide("prev")} className=" text-6xl" />
        {imgLinks?.map((link, i) => (
          <img
            className={`${active == i ? "block" : "hidden"} w-[800px] h-[450px]`}
            key={link}
            src={link}
            alt="img"
          />
        ))}
        <FcNext onClick={() => handleSlide("next")} className=" text-6xl" />
      </div>
    </div>
  );
};

export default ImageSlider;
