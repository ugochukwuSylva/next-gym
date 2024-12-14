import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="w-16 h-16 rounded-full bg-white/80 ">
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
