export default function Spinner({ status }: { status: string }) {
  return (
    <div className="fixed left-0  top-0 w-full h-screen bg-black/50 backdrop-blur-md z-50 flex justify-center items-center *:text-white">
      {/*  */}
      <div className="absolute top-[40%] left-[42%] flex flex-col justify-center items-center gap-3">
        <span className="loader"></span>
        <p className="uppercase tracking-wide">{status}...</p>
      </div>
    </div>
  );
}
// USEFUL SITES FOR LOADING SPINNERS
// loading.io
// cssloaders.github.io
