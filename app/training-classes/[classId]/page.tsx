import PhoneContact from "@/app/_components/PhoneContact";
import SelectCountry from "@/app/_components/SelectCountry";
import SelectTrainer from "@/app/_components/SelectTrainer";
import TrainingClassIdPage from "@/app/_components/TrainingClassIdPage";
import {
  getBookings,
  getCountries,
  getTrainers,
  getTrainingClassById,
} from "@/app/_lib/data-services";
import { auth } from "@/auth";

type Props = {
  params: { classId: string };
};

export async function generateMetadata({ params }: Props) {
  const { id } = await getTrainingClassById(params.classId);

  return { title: `Training Class ${id}` };
}

export default async function page({ params }: Props) {
  const { classId } = params;
  const selectedClass = await getTrainingClassById(classId);
  const countries = await getCountries();
  const instructors = await getTrainers();

  const session = await auth();
  const user = session?.user?.name as string;
  const memberId = String(session?.user?.memberId);

  const bookings = await getBookings(memberId);
  const bookedClassId = bookings.map((bookings) => bookings.trainingClassId);

  return (
    <TrainingClassIdPage
      selectedClass={selectedClass}
      user={user}
      bookedClassId={bookedClassId}
    >
      <SelectCountry countries={countries} />
      <PhoneContact countries={countries} />
      <SelectTrainer instructors={instructors} />
    </TrainingClassIdPage>
  );
}
