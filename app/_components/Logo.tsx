import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        width={40}
        height={40}
        src="/logo.png"
        alt="logo"
        className="w-20 h-20 object-cover"
      />
    </Link>
  );
}
