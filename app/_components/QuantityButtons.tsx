type Props = {
  increase: () => void;
  decrease: () => void;
  pending: boolean;
  children: React.ReactNode;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  pending: boolean;
};

export default function QuantityButtons({
  increase,
  decrease,
  pending,
  children,
}: Props) {
  return (
    <div className="border p-1 w-36 rounded-md flex justify-between items-center">
      <Button pending={pending} onClick={decrease}>
        -
      </Button>
      {children}
      <Button pending={pending} onClick={increase}>
        +
      </Button>
    </div>
  );
}

function Button({ children, onClick, pending }: ButtonProps) {
  return (
    <button
      disabled={pending}
      type="button"
      onClick={onClick}
      className="hover:opacity-60 disabled:opacity-60 text-stone-100 text-lg p-1 px-4 rounded-md bg-red-500  transition-all duration-300 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
