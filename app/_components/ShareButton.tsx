type Props = {
  children: React.ReactNode;
  title: string;
  color: string;
};

export default function ShareButton({ children, title, color }: Props) {
  return (
    <div
      className={`relative group hover:${color} p-3 px-4 lg:px-8 flex items-center rounded-md transition-all duration-200`}
    >
      {children}

      {/* <span className="absolute min-w-36 bottom-12 -left-7 bg-red-500 p-1 text-white text-center text-xs md:text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200">
        {title}
      </span> */}
    </div>
  );
}
