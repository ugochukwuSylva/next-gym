import Image from "next/image";

type Props = {
  fullName: string;
  specialty: string;
  image: string;
};

function InstructorCard({ fullName, specialty, image }: Props) {
  return (
    <div className="w-60 md:w-full lg:w-60  px-2 z-50 h-[90%] m-auto">
      <div className="relative  w-full h-[85%] rounded-md overflow-hidden">
        <Image
          src={image}
          alt="instructor image"
          fill
          className="object-cover"
          sizes=""
        />
      </div>

      <div className="relative flex flex-col items-center justify-between">
        <p className="text-2xl font-semibold capitalize mt-8 text-stone-700 z-10">
          {fullName}
        </p>

        <div className="absolute bottom-3 text-4xl capitalize text-red-500/20 font-semibold">
          {specialty}
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;
