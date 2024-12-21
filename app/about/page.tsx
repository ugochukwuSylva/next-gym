import AboutComponentPage from "@/app/_components/AboutPageComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default async function About() {
  return (
    <main className="">
      <AboutComponentPage />
    </main>
  );
}
