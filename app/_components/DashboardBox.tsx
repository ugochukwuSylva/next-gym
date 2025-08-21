type Props = {
  heading: string;
  number: number;
  icon: React.ReactNode;
};

export default function DashboardBox({ heading, number, icon }: Props) {
  return (
    <div className="h-28 p-2 bg-red-50 rounded-md border border-red-500">
      <div className="text-red-500">{heading}</div>

      <div className="flex justify-between items-center">
        <div className="text-6xl font-semibold text-red-500">{number}</div>
        <span className="text-3xl text-red-500 opacity-70">{icon}</span>
      </div>
    </div>
  );
}
