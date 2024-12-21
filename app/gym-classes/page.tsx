import { Metadata } from "next";
import GymClassesPage from "../_components/ClassesPage";

export const metadata: Metadata = {
  title: "Our Gym Classes",
};

export default function page() {
  return (
    <main>
      <GymClassesPage />
    </main>
  );
}
