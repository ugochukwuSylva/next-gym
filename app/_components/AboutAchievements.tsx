import AboutAchievementItem from "./AboutAchievementItem";

const list: { header: number; text: string }[] = [
  {
    header: 25,
    text: "Years Experience",
  },
  {
    header: 1300,
    text: "Members",
  },
  {
    header: 92,
    text: "Expert Trainers",
  },
  {
    header: 500,
    text: "Global Awards",
  },
];

function AboutAchievements() {
  return (
    <div className="py-2 px-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-white mt-32 gap-4">
      {list.map((achievement, i) => (
        <AboutAchievementItem
          key={i}
          headerText={achievement.header}
          paragraphText={achievement.text}
          index={i}
        />
      ))}
    </div>
  );
}

export default AboutAchievements;
