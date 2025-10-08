import WorkoutListItem from "./WorkoutListItem";

// To be replaced with server data later
const workoutList = [
  "Abs workouts",
  "Back workouts",
  "Anywhere workouts",
  "CrossFit workouts",
  "Biceps workouts",
  "Triceps workouts",
  "Kettlebell workouts",
  "Arms workouts",
  "Cardio workouts",
  "Quick workouts",
  "BodyWeight workouts",
  "Chest workouts",
];

export default function WorkoutList() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-7 pb-6">
      {workoutList.map((workouts) => (
        <WorkoutListItem key={workouts} workout={workouts} />
      ))}
    </div>
  );
}
