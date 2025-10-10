import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  image: string;
  text1: string;
  text2: string;
};

export default function HeroItem1({ image, text1, text2 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={image}
        alt="hero-image"
        fill
        className=" -z-30 object-cover"
      />
      <div className=" w-auto absolute top-[50%] left-4 md:left-16 lg:left-20  grid grid-rows-[4rem_8rem] gap-6">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 80 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-red-500 rounded-md w-[75%] bg-red-500 text-2xl  md:text-3xl lg:text-4xl uppercase   font-semibold relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ duration: 2, delay: 2, ease: "backInOut" }}
            className="absolute top-0 left-0  bg-black flex justify-center items-center w-full tracking-wider"
          >
            {text1}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 100 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-gray-200 rounded-md  bg-black  text-3xl md:text-5xl lg:text-5xl uppercase  font-semibold relative overflow-hidden"
        >
          <motion.span
            initial={{ opacity: 0, height: 0, padding: 10 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ duration: 2, delay: 2.5, ease: "backInOut" }}
            className="bg-red-500  flex justify-center items-center tracking-wider"
          >
            {text2}
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
