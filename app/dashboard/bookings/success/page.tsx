import PaymentStatus from "@/app/_components/PaymentStatus";

export default function page() {
  return (
    <div>
      <PaymentStatus
        status="successful"
        pageName="bookings"
        path="/dashboard/bookings"
      />
    </div>
  );
}
