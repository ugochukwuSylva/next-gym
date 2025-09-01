import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/shopping"
      className="group  w-full md:w-fit text-stone-700 border border-1 hover:ring-1 hover:ring-black/30 border-stone-300  px-6 py-3  rounded-md  transition-all duration-300"
    >
      &larr; Back
    </Link>
  );
}
