type Props = {
  children: React.ReactNode;
  action: (formData: FormData) => Promise<void>;
};

export default function ActionButton({ children, action }: Props) {
  return (
    <form action={action} className="text-xl">
      <button className="transition-all duration-200 hover:scale-125">
        {children}
      </button>
    </form>
  );
}
