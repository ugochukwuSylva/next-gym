import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

const time = new Date();
const hours = time.getHours();
const greetings =
  hours <= 11
    ? "Good Morning! ⛅"
    : hours > 11 && hours <= 16
    ? "Good afternoon! 🌞"
    : "Good evening! 🌚";

export default function Greetings({ name, image }: Props) {
  return (
    <div>
      <span>Hello</span>

      <div className="flex justify-between items-center">
        <div className="text-stone-600 font-bold text-2xl">{greetings}</div>

        <div className="flex items-center gap-2 p-2 bg-stone-300 rounded-full">
          <Image
            className="rounded-full"
            src={image}
            alt="userImage"
            width={30}
            height={30}
          />
          <span className="text-stone-800 font-medium">{name}</span>
        </div>
      </div>
    </div>
  );
}
