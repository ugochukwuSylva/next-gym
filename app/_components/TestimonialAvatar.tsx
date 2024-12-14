import Image from "next/image";
type Props = {
  avatarImage: string;
};

export default function TestimonialAvatar({ avatarImage }: Props) {
  return (
    <div className="relative h-20 w-20 rounded-full ">
      <Image
        src={avatarImage}
        alt="avatar-image"
        fill
        quality={100}
        className="object-cover rounded-full border-red-500 border-4"
        sizes="100"
      />
    </div>
  );
}
