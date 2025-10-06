import { Metadata } from "next";
import ClassesPage from "../_components/ClassesPage";
import { getTrainingClasses } from "../_lib/data-services";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Our Training Classes",
};

export default async function page() {
  const session = await auth();
  const trainingClass = await getTrainingClasses();

  return (
    <main>
      <ClassesPage classes={trainingClass} isSignedIn={!!session} />
    </main>
  );
}
