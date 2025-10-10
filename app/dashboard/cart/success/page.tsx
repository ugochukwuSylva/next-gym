type Props = {
  searchParams: {
    session_id: string | null;
  };
};

import PaymentStatus from "@/app/_components/PaymentStatus";

export default function page({ searchParams }: Props) {
  const sessionId = searchParams.session_id ?? null;
  return (
    <div>
      <PaymentStatus
        status="successful"
        pageName="cart"
        path="/dashboard/cart"
        sessionId={sessionId}
      />
    </div>
  );
}
