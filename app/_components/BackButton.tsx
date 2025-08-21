import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group  w-full md:w-fit text-stone-700 border border-1 hover:ring-1 hover:ring-black/30 border-stone-300  px-6 py-3  rounded-md  transition-all duration-300"
    >
      &larr; Back
    </button>
  );
}
