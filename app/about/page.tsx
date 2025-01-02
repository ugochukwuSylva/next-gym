import AboutComponentPage from "@/app/_components/AboutPageComponent";
import { Metadata } from "next";
import AboutOurTeam from "../_components/AboutOurTeam";

export const metadata: Metadata = {
  title: "About",
};

export default async function About() {
  return (
    <main>
      <AboutComponentPage>
        <AboutOurTeam />
      </AboutComponentPage>
    </main>
  );
}
