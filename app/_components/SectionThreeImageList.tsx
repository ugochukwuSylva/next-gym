import SectionThreeImageCard from "./SectionThreeImageCard";

export default function SectionThreeImageList() {
  return (
    <ul className=" mt-8 block md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SectionThreeImageCard
        text1="Personal"
        text2="Basic Workouts"
        text3="Personal"
        image="/sectionThreeImages-1.jpg"
      />
      <SectionThreeImageCard
        text1="Professional"
        text2="Basic Weight"
        text3="Professional"
        image="/sectionThreeImages-2.jpg"
        backupImage="/gallery-image-5.jpg"
      />
      <SectionThreeImageCard
        text1="Professional"
        text2="Abs Workouts"
        text3="Professional"
        image="/sectionThreeImages-3.jpg"
      />
      <SectionThreeImageCard
        text1="Professional"
        text2="Quick Workouts"
        text3="Professional"
        image="/sectionThreeImages-4.jpg"
        backupImage="/gallery-image-7.jpg"
      />
      <SectionThreeImageCard
        text1="HighLevel"
        text2="Arms Weight"
        text3="HighLevel"
        image="/sectionThreeImages-5.jpg"
        backupImage="/gallery-image-8.jpg"
      />
      <SectionThreeImageCard
        text1="Private"
        text2="Every Workouts"
        text3="Private"
        image="/sectionThreeImages-6.jpg"
      />
    </ul>
  );
}
