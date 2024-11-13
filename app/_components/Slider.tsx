import Image from "next/image";
// import { motion } from "framer-motion";

export default function Slider() {
  const logoImage = [
    "/sponsor-image-1.png",
    "/sponsor-image-2.png",
    "/sponsor-image-3.png",
    "/sponsor-image-4.png",
    "/sponsor-image-5.png",
    "/sponsor-image-6.png",
    "/sponsor-image-7.png",
    "/sponsor-image-8.png",
    "/sponsor-image-9.png",
    "/sponsor-image-10.png",
    "/sponsor-image-11.png",
  ];

  //   const motionParameter = {
  //     x: ["0%", "-100%"],
  //     transition: { duration: 30, ease: "linear", repeat: Infinity },
  //   };

  //   animate={motionParameter} <=== to be used inside an html element

  return (
    <div className="group flex -mt-24 md:mt-0 flex-shrink-0 flex-grow-0 basis-auto  overflow-x-hidden bg-slider w-full mb-80 md:mb-96 lg:mb-48 *:grayscale ">
      {/* prettier-ignore */}
      <div className="slider-animation group-hover:slider-animation-hover flex gap-16 flex-shrink-0 flex-grow-0 basis-auto min-w-min pr-5 md:pr-10" >
        {logoImage.map((imageSrc) => {
          return <Image src={imageSrc} alt="sponsorer-image" className="w-full object-contain" width={100} height={100}/>
        })}
      </div>

      {/* prettier-ignore */}
      <div className="slider-animation group-hover:slider-animation-hover flex gap-16 flex-shrink-0 flex-grow-0 basis-auto min-w-min pr-5 md:pr-10">
        {logoImage.map((imageSrc) => {
          return <Image src={imageSrc} alt="sponsorer-image" className="w-full object-contain" width={100} height={100}/>
        })}
      </div>
    </div>
  );
}
