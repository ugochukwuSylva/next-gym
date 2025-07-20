"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  option: string;
};

export default function BookingsFilter({ option }: Props) {
  const searchParam = useSearchParams();
  const param = searchParam.get("status") ?? "all";
  const pathname = usePathname();
  const router = useRouter();

  function handleFilter() {
    const newSearchParams = new URLSearchParams(searchParam);
    newSearchParams.set("status", option);
    router.replace(`${pathname}?status=${option.toString()}`, {
      scroll: false,
    });
  }

  return (
    <button
      onClick={handleFilter}
      className={` p-2 px-4 capitalize cursor-pointer border border-1 border-stone-400  hover:bg-blue-700 hover:text-stone-100 hover:border-transparent text-sm rounded-md ${
        option === param ? "bg-blue-700 text-stone-100 border-transparent" : ""
      }`}
    >
      {option}
    </button>
  );
}
