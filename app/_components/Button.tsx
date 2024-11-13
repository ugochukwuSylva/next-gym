import { FaAngleRight } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
  handleOnClick?: () => void;
};

export default function Button({ children, handleOnClick }: Props) {
  return (
    <div>
      <button
        onClick={handleOnClick}
        className="bg-red-500 text-gray-200 px-6 py-3 border-none rounded-md hover:bg-stone-900 transition-all duration-300"
      >
        <span className="flex items-center gap-3">
          {children} <FaAngleRight />
        </span>
      </button>
    </div>
  );
}
