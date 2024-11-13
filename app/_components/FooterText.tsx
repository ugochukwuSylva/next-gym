export default function FooterText() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full italic text-white md:text-stone-400 text-xs md:text-sm  mb-3 ">
      All rights reserved by Nwaba Ugochukwu &reg; {year}
    </div>
  );
}
