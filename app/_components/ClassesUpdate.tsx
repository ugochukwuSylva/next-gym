import ClassUpdateContent from "./ClassUpdateContent";
import SectionHeaders from "./SectionHeaders";

export default function ClassesUpdate() {
  return (
    <div className=" md:pb-16 bg-white">
      <div className="py-10">
        <div className="flex justify-center group toCenter">
          <SectionHeaders
            text1="In the news"
            text2="Latest"
            text3="Classes"
            text4="& Updates"
          />
        </div>
      </div>

      <div className="bg-white grid grid-cols-1 sm:grid-cols-3  gap-3 lg:gap-6">
        {/* prettier-ignore */}
        <ClassUpdateContent title="Looking Good" imagePath="/classUpdate-image-1.jpg"/>
        {/* prettier-ignore */}
        <ClassUpdateContent title="One Mission" imagePath="/classUpdate-image-2.jpg"/>
        {/* prettier-ignore */}
        <ClassUpdateContent title="The Life Style" imagePath="/classUpdate-image-3.jpg"/>
      </div>
    </div>
  );
}
