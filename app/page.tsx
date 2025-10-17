import Hero from "./_components/Hero";
import SectionOne from "./_components/SectionOne";
import SectionTwo from "./_components/SectionTwo";
import SectionThree from "./_components/SectionThree";
import SectionFour from "./_components/SectionFour";
import SectionFive from "./_components/SectionFive";
import { emailNotification, getMembers } from "./_lib/data-services";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  const isNewUser = (await getMembers())
    .map((member) => member.email)
    .includes(String(session?.user?.email));

  if (!isNewUser) await emailNotification("Your sign up is successful 😊");
  return (
    <div className="h-full relative overflow-x-hidden">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}
