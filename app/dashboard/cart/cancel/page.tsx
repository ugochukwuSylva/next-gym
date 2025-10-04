import PaymentStatus from "@/app/_components/PaymentStatus";

export default function page() {
  return (
    <div>
      <PaymentStatus status="cancel" pageName="cart" path="/dashboard/cart" />
    </div>
  );
}
