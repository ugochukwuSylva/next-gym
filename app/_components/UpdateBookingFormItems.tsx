import UpdateCountry from "./UpdateCountry";
import UpdatePhoneContact from "./UpdatePhoneContact";
import UpdateTrainer from "./UpdateTrainer";
import {
  getBookingByBookingId,
  getCountries,
  getTrainers,
} from "../_lib/data-services";

export default async function UpdateBoookingFormItems({ id }: { id: number }) {
  const countries = await getCountries();
  const instructors = await getTrainers();
  const booking = await getBookingByBookingId(id);
  // prettier-ignore
  const { phoneNumber, countryFlag, phoneCountryFlag, instructor, nationality } = booking;

  return (
    <>
      {/* prettier-ignore */}
      <UpdateCountry defaultCountryFlag={countryFlag} defaultNationality={nationality} countries={countries} />
      {/* prettier-ignore */}
      <UpdatePhoneContact defaultPhoneNumber={phoneNumber} defaultCountryFlag={phoneCountryFlag} countries={countries} />
      {/* prettier-ignore */}
      <UpdateTrainer defaultInstructor={instructor} instructors={instructors} />
    </>
  );
}
