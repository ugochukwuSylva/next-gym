import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

type Props = {
  currentPage: number;
  lastPage: number;
  totalPages: number;
  pageNumber: number;
  nextPage: () => void;
  prevPage: () => void;
};

export default function ArticleButtons({
  currentPage,
  lastPage,
  totalPages,
  pageNumber,
  nextPage,
  prevPage,
}: Props) {
  return (
    <div className="flex justify-center md:justify-between items-center">
      <p className="hidden md:block text-stone-700 text-lg">
        {pageNumber} of {lastPage}
      </p>

      <div className="flex items-center gap-4">
        <Button handleClick={prevPage} isDisabled={currentPage === 0}>
          <MdKeyboardDoubleArrowLeft />
        </Button>

        <p className="block md:hidden text-stone-700 text-lg">
          {pageNumber} of {lastPage}
        </p>
        <Button
          handleClick={nextPage}
          isDisabled={currentPage === totalPages - 1}
        >
          <MdKeyboardDoubleArrowRight />
        </Button>
      </div>
    </div>
  );
}

function Button({
  children,
  isDisabled,
  handleClick,
}: {
  children: React.ReactNode;
  isDisabled: boolean;
  handleClick: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className="text-2xl text-white bg-red-500  disabled:opacity-40 disabled:cursor-not-allowed p-3 rounded-md transition-all duration-300 hover:bg-stone-800"
    >
      {children}
    </button>
  );
}
