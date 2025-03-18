export default function ShoppingButtons() {
  return (
    <div className="border p-1 w-36 rounded-md flex justify-between items-center">
      <Button>-</Button>
      <input
        className="text-stone-700 w-10 text-center text-lg"
        defaultValue={1}
      />
      <Button>+</Button>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};

function Button({ children }: Props) {
  return (
    <button className="bg-stone-100 text-lg p-1 px-4 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300">
      {children}
    </button>
  );
}
