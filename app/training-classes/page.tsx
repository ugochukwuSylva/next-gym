import { Metadata } from "next";
import ClassesPage from "../_components/ClassesPage";
import { getTrainingClasses } from "../_lib/data-services";

export const metadata: Metadata = {
  title: "Our Training Classes",
};

export default async function page() {
  const trainingClass = await getTrainingClasses();

  return (
    <main>
      <ClassesPage classes={trainingClass} />
    </main>
  );
}
