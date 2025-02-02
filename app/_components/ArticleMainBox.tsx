import Image from "next/image";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

type Props = {
  title: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  image: string;
  writeup: string;
  id: string;
};

export default function ArticleMainBox({
  title,
  authorName,
  authorAvatar,
  date,
  image,
  writeup,
  id,
}: Props) {
  return (
    <div className="p-6 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] gap-8 bg-stone-100 rounded-md border-b-4 border-red-100 hover:border-red-500 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <h1 className="font-black  text-2xl text-stone-600 hover:text-red-500 transition-all duration-300 cursor-pointer">
          {title}
        </h1>

        <div className="grid grid-cols-[3rem_1fr] gap-3">
          <div className="relative">
            <Image
              src={authorAvatar}
              alt="avatar-image"
              fill
              className="object-cover bg-center"
            />
          </div>

          <div className="flex flex-col *:text-sm">
            <span className="text-stone-700 font-bold">{authorName}</span>
            <span className="text-stone-400">{date}</span>
          </div>
        </div>

        <p className="text-stone-600 text-lg leading-9">
          {writeup.slice(0, 170)}...
        </p>

        <Link
          href={`articles/${id}`}
          className="flex justify-center items-center w-32 *:text-white  bg-red-500 mt-5 p-1 rounded-md transition-colors duration-300 hover:bg-stone-800 *:hover:text-white"
        >
          <MdArrowRight size={30} />

          <span className="text-sm">Read More</span>
        </Link>
      </div>
      {/*  */}
      <div className="relative rounded-md overflow-hidden h-64 md:h-auto min-w-40">
        <Image
          src={image}
          alt="workout image"
          fill
          className="object-cover bg-center"
        />
      </div>
    </div>
  );
}
