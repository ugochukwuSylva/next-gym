// import { viga } from "../layout";

type Props = {
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
  children?: React.ReactNode;
};

export default function SectionHeaders({
  text1,
  text2,
  text3,
  text4,
  children,
}: Props) {
  return (
    <div className=" flex flex-col justify-start md:items-start items-center gap-6 text-center md:text-start *:group-[.whiteText]:text-stone-100">
      <p className="text-stone-400 text-xl font-light group-[.toCenter]:m-auto group-[.whiteText]:translate-y-2">
        {text1}
      </p>

      <h1
        className={`after:content-[""] after:h-1 after:block after:bg-red-500 after:mt-6 after:m-auto md:after:ml-0  after:w-16  text-stone-700 text-[2.5rem] block leading-tight group-[.toCenter]:after:ml-auto `}
      >
        {text2} <span className="text-red-500 text-5xl font-bold">{text3}</span>{" "}
        {text4}
      </h1>
      <p className="text-slate-600 text-xl leading-10 ">{children}</p>
    </div>
  );
}
