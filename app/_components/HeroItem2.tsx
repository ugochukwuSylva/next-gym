import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  image: string;
  text1: string;
  text2: string;
};

export default function HeroItem2({ image, text1, text2 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      // className="w-full"
    >
      <Image
        src={image}
        alt="hero-image"
        fill
        className=" -z-30 object-cover"
        quality={100}
        // sizes="100vw"
      />
      <div className=" w-auto absolute top-[50%] left-4 md:left-16 lg:left-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-200 rounded-md bg-gradient-to-r from-red-500 to-transparent text-2xl  md:text-3xl lg:text-4xl uppercase p-3 lg:p-6 font-semibold tracking-wider"
        >
          {text1}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-red-500 rounded-md bg-gradient-to-r from-black from-10% to-transparent  text-3xl md:text-5xl lg:text-5xl uppercase p-3 lg:p-6 font-semibold tracking-wider block mt-4 lg:mt-8"
        >
          {text2}
        </motion.span>
      </div>
    </motion.div>
  );
}
