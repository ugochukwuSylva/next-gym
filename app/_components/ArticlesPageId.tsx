import Image from "next/image";
import PagesBackgroundContainer from "./PagesBackgroundContainer";
import { useRouter } from "next/navigation";

type Props = {
  selectedArticle: {
    title: string;
    authorName: string;
    image: string;
    writeup: string;
    date: string;
  };
};

export default function ArticlesPageId({ selectedArticle }: Props) {
  const { title, authorName, image, writeup, date } = selectedArticle;
  const router = useRouter();

  return (
    <div className=" md:min-h-screen lg:h-screen w-full">
      <PagesBackgroundContainer
        imageUrl="/articlesPageId-bg.jpg"
        altText="background image"
      />

      <div className="bg-gradient-to-b from-white to-red from-55% to-55% pb-6 lg:pb-[110vh]">
        <div className="bg-white  sm:columns-2 gap-8  p-4 md:p-10 relative">
          <div className="flex flex-col float-none sm:float-left">
            <div className="flex flex-col">
              <div className="relative  h-80 w-full sm:w-80 overflow-hidden rounded-md">
                <Image
                  src={image}
                  alt="article image"
                  fill
                  className="object-cover sm:[clip-path:inset(5%)]"
                />
              </div>
              <p className="uppercase text-xl text-red-500 font-extrabold">
                {title}
              </p>
              <span className="text-sm text-stone-500">
                Author: {authorName} &bull; {date}
              </span>
            </div>
          </div>

          <p className="leading-9 pt-4 sm:pt-0 text-lg text-justify text-stone-700">
            {writeup}
          </p>

          <button
            onClick={() => router.back()}
            className="bg-red-500 hover:bg-stone-800 mt-6 hover:text-white  text-white p-3 ml-autom w-full sm:w-auto rounded-md transition-all duration-300"
          >
            &larr; Back
          </button>
        </div>
      </div>
    </div>
  );
}
