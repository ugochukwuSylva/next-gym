import Image from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  textHeader: string;
  imageUrl: string;
  price: string;
  id: string;
};

export default function ClassBooking({
  text,
  textHeader,
  imageUrl,
  price,
  id,
}: Props) {
  const [text1, text2] = textHeader.split(" ");

  return (
    <div className=" flex flex-col sm:flex-row sm:[&:nth-child(2n+2)]:flex-row-reverse lg:[&:nth-child(4n+2)]:flex-row lg:[&:nth-child(4n+3)]:flex-row-reverse min-h-[40rem] sm:min-h-[30rem] border rounded-md">
      <div className="relative h-full w-full md:w-1/2">
        <Image
          src={imageUrl}
          fill
          alt=""
          className="object-cover object-center"
        />
      </div>

      <div className="h-full w-full md:w-1/2 flex flex-col gap-6 items-start p-5">
        <h1 className="text-2xl font-semibold">
          <span className="">{text1}</span>{" "}
          <span className="text-red-500">{text2}</span>
        </h1>
        <p className="leading-loose text-stone-700">{text}...</p>

        <Link
          href={`/training-classes/${id}`}
          className="bg-red-500 w-full md:w-fit text-gray-200 px-6 py-3 border-none rounded-md hover:bg-stone-900 transition-all duration-300 mt-auto text-center"
        >
          Start Today{" "}
          <span className="font-semibold tracking-wide"> (${price})</span>
        </Link>
      </div>
    </div>
  );
}
