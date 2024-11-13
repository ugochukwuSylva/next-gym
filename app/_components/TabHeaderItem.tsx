type Props = {
  tab: string;
  isCurrentTabHeader: boolean;
  onTabClick: () => void;
};

export default function TabHeaderItem({
  tab,
  isCurrentTabHeader,
  onTabClick,
}: Props) {
  return (
    <div
      onClick={onTabClick}
      className={`text-xl  whitespace-nowrap cursor-pointer h-[3.2rem] font-semibold border-transparent ${
        isCurrentTabHeader ? "md:border-b-4 md:border-red-500 text-red-500" : ""
      }`}
    >
      {tab}
    </div>
  );
}
