import { BsCheckLg } from "react-icons/bs";

type Props = {
  workout: string;
};

export default function WorkoutListItem({ workout }: Props) {
  return (
    <div className="group flex items-center gap-3">
      <span className="rounded-full transition-all duration-100 text-white p-2 bg-red-500 group-hover:bg-red-100 group-hover:scale-110 group-hover:text-red-500 ">
        <BsCheckLg size={22} className="group-hover:scale-110" />
      </span>
      <span className="font-medium text-lg text-stone-800">{workout}</span>
    </div>
  );
}
