import QuickContactIcons from "./QuickContactIcons";

export default function QuickContact() {
  return (
    <div className="hidden md:block">
      <div className=" flex justify-between absolute top-0 z-50 w-full px-10 py-5 bg-gradient-to-b from-black/70 to-transparent ">
        <span className="  text-sm text-slate-300 cursor-pointer hover:text-red-500 transition-all duration-100">
          <a href="tel:09096859314">
            {" "}
            Have any enquiry? Call us:{" "}
            <span className="font-semibold">+234 909 9685 9314</span>
          </a>
        </span>

        <div className="flex items-center justify-between gap-20  ">
          <p className="italic text-sm text-slate-300 ">Follow Us On</p>

          <QuickContactIcons />
        </div>
      </div>
    </div>
  );
}
