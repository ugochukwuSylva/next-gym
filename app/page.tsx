import Hero from "./_components/Hero";
import SectionOne from "./_components/SectionOne";
import SectionTwo from "./_components/SectionTwo";
import SectionThree from "./_components/SectionThree";
import SectionFour from "./_components/SectionFour";
import SectionFive from "./_components/SectionFive";
import Footer from "./_components/Footer";
import Slider from "./_components/Slider";
import EmptyLayout from "./_components/EmptyLayout";

export default async function Page() {
  return (
    <div className="h-full relative ">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}
