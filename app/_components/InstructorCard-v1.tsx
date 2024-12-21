import Image from "next/image";

type Props = {
  fullName: string;
  specialty: string;
  image: string;
  index: number;
  translatePosition: number;
};

function InstructorCard({
  fullName,
  specialty,
  image,
  index,
  translatePosition,
}: Props) {
  const isActiveSlide = index === 2;

  return (
    <div
      className={`w-60 absolute px-2 transition-all duration-1000 ${
        !isActiveSlide ? "opacity-30 h-[90%] top-5" : "h-full"
      }`}
      style={{ transform: `translateX(${(index + translatePosition) * 100}%)` }}
    >
      <div className="relative w-full h-[85%] rounded-md overflow-hidden ">
        <Image
          src={image}
          alt="instructor image"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col items-center justify-between">
        <p className="text-3xl font-semibold capitalize mt-8 text-stone-700 z-10">
          {fullName}
        </p>

        <div className="absolute bottom-3 text-5xl capitalize text-red-500/10 font-semibold">
          {specialty}
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
