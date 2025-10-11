import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const currentMonth = new Date().getMonth() + 1;
  const isDecember = currentMonth === 12;

  return (
    <Link href="/">
      <Image
        width={40}
        height={40}
        src={isDecember ? "/logo-xmas.png" : "/logo.png"}
        alt="logo"
        className="w-20 h-20 object-cover"
      />
    </Link>
  );
}
