import { RxCross2 } from "react-icons/rx";

type Props = {
  close?: (status: boolean) => void;
};

export default function CloseButton({ close }: Props) {
  return (
    <RxCross2
      className="text-stone-200 absolute top-3 right-3 hover:rotate-90 transition-all duration-200 cursor-pointer"
      size={32}
      onClick={() => close && close(false)}
    />
  );
}
