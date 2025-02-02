import Spinner from "./_components/Spinner";

export default function LoadingSpinner() {
  return (
    <div className="fixed left-0  top-0 w-full h-screen bg-black/50 backdrop-blur-md z-50 flex justify-center items-center *:text-white">
      <Spinner />
    </div>
  );
}
