type Props = {
  increase: () => void;
  decrease: () => void;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function ShoppingButtons({ increase, decrease }: Props) {
  return (
    <div className="border p-1 w-36 rounded-md flex justify-between items-center">
      <Button onClick={decrease}>-</Button>
      <input
        className="text-stone-700 w-10 text-center text-lg"
        defaultValue={1}
      />
      <Button onClick={increase}>+</Button>
    </div>
  );
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-stone-100 text-lg p-1 px-4 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
    >
      {children}
    </button>
  );
}
