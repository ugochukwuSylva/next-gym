type Props = {
  children: React.ReactNode;
};

export default function HeadingOne({ children }: Props) {
  return (
    <h1 className="uppercase text-gray-200 text-3xl font-bold mb-6">
      {children}
    </h1>
  );
}
