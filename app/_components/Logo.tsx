import Image from "next/image";
import Link from "next/link";

type Props = {
  setIsActive: (i: number) => void;
};

export default function Logo({ setIsActive }: Props) {
  return (
    <Link href="/">
      <div
        className="w-16 h-16 rounded-full bg-white/80 "
        onClick={() => setIsActive(0)}
      >
        <Image
          width={40}
          height={40}
          src="/logo.png"
          alt="logo"
          className="w-20 h-20 object-cover"
        />
      </div>
    </Link>
  );
}
