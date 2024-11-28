type Props = {
  icon: React.ReactNode;
  size: string;
  customName?: string;
};

export default function Overlay({ icon, size, customName }: Props) {
  return (
    <div
      className={`group ${customName} opacity-0 absolute flex justify-center items-center top-0 left-0 h-full w-full hover:opacity-100 bg-black/80 z-20 cursor-pointer transition-all duration-300`}
    >
      <span
        className={`${size} group-[.redLink]:group-hover:text-red-500 delay-200 transition-all duration-300 group-[.plus]:opacity-0 group-[.plus]:group-hover:opacity-100 group-[.plus]:translate-y-5 group-[.plus]:group-hover:translate-y-0`}
      >
        {icon}
      </span>
    </div>
  );
}
