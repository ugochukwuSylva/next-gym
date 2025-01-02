import PhoneContact from "@/app/_components/PhoneContact";
import SelectCountry from "@/app/_components/SelectCountry";
import SelectTrainer from "@/app/_components/SelectTrainer";
import TrainingClassIdPage from "@/app/_components/TrainingClassIdPage";
import { getCountries, getTrainingClassById } from "@/app/_lib/data-services";

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

  return (
    <TrainingClassIdPage selectedClass={selectedClass}>
      <SelectCountry countries={countries} />
      <PhoneContact countries={countries} />
      <SelectTrainer countries={countries} />
    </TrainingClassIdPage>
  );
}
