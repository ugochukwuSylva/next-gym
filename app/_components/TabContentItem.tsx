import { motion } from "framer-motion";

type Props = {
  content: {
    text: string;
    title: string;
    miniText: string;

    icon: React.ReactNode;
  };
};

export default function TabContentItem({ content }: Props) {
  const { text, title, miniText, icon } = content;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.09, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-10 px-1 md:px-4 transition-all duration-100"
    >
      <p className="text-lg leading-6 md:leading-8">{text}</p>
      <div className="grid grid-cols-[4rem_1fr] gap-2 md:gap-3 mt-4 md:mt-8 justify-center items-center">
        <span className="bg-stone-50 text-red-500 text-3xl h-16 w-16  p-2 rounded-full flex items-center justify-center">
          {icon}
        </span>

        <div className=" flex flex-col gap-1 leading-4">
          <h1 className="text-2xl font-extrabold leading-7 md:font-semibold">
            {title}
          </h1>
          <p className=" capitalize  text-stone-500">{miniText}</p>
        </div>
      </div>
    </motion.div>
  );
}
