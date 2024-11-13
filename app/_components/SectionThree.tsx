import SectionHeaders from "./SectionHeaders";
import SectionThreeImageList from "./SectionThreeImageList";

export default function SectionThree() {
  return (
    <div className="bg-white py-32 px-4 md:px-16 w-full ">
      <div className="flex justify-center group toCenter">
        <SectionHeaders
          text1="Workout Classes"
          text2="Some of the"
          text3="Classes"
          text4="at any Level"
        />
      </div>

      <SectionThreeImageList />
    </div>
  );
}
