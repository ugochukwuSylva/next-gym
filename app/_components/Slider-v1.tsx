import Image from "next/image";
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <div className="w-full p-5  overflow-hidden bg-slider ">
      <div className=" w-full gap-2 slider-animation">
        {/* prettier-ignore */}
        <div className="w-full flex gap-16 pb-16 *:grayscale justify-start items-center">
            <Image src='/sponsor-image-1.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-2.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-3.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-4.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-5.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-6.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-7.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-8.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-9.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-10.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-11.png' alt="sponsor-logo" className='' width={100} height={100}/>
        
        {/*  */}
            <Image src='/sponsor-image-1.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-2.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-3.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-4.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-5.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-6.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-7.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-8.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-9.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-10.png' alt="sponsor-logo" className='' width={100} height={100}/>
            <Image src='/sponsor-image-11.png' alt="sponsor-logo" className='' width={100} height={100}/>
        </div>
      </div>
    </div>
  );
}
