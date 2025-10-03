import Link from "next/link";

type Props = {
  path: string;
  isInCart?: boolean;
};

export default function BackButton({ path, isInCart }: Props) {
  return (
    <Link
      href={path}
      className={`group  w-full md:w-fit text-stone-700 border border-1 hover:ring-1 hover:ring-black/30 border-stone-300  px-6 py-3  rounded-md  transition-all duration-300 ${
        isInCart &&
        "bg-red-500 border-none text-white hover:ring-0 hover:opacity-80"
      }`}
    >
      &larr; Back
    </Link>
  );
}
