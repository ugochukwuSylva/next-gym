import AboutAchievementItem from "./AboutAchievementItem";

const list: { header: number; text: string }[] = [
  {
    header: 75,
    text: "Years Experience",
  },
  {
    header: 1400,
    text: "Members",
  },
  {
    header: 92,
    text: "Expert Trainers",
  },
  {
    header: 800,
    text: "Global Winners",
  },
];

function AboutAchievements() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-white mt-36 gap-4">
      {list.map((achievement, i) => (
        <AboutAchievementItem
          headerText={achievement.header}
          paragraphText={achievement.text}
          index={i}
        />
      ))}
    </div>
  );
}

export default AboutAchievements;
