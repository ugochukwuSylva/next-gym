import Hero from "./_components/Hero";
import SectionOne from "./_components/SectionOne";
import SectionTwo from "./_components/SectionTwo";
import SectionThree from "./_components/SectionThree";
import SectionFour from "./_components/SectionFour";
import SectionFive from "./_components/SectionFive";

export default function Page() {
  return (
    <div className="h-full relative overflow-x-hidden">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}
