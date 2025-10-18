import Link from "next/link";
import { BsCheck2Circle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { emailNotification, getPaymentDetails } from "../_lib/data-services";
import { auth } from "@/auth";
import { formatCurrency } from "../_utils/formatDate";

type Props = {
  status: "successful" | "cancel";
  pageName: string;
  path: string;
  sessionId: string | null;
};

export default async function PaymentStatus({
  status,
  pageName,
  path,
  sessionId,
}: Props) {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const fullName = session?.user?.name as string;
  const firstName = fullName?.split(" ")[0];
  const paymentDetails = await getPaymentDetails(
    String(sessionId),
    String(userEmail)
  );

  const { amount_total, card_brand, last4_digits } = paymentDetails[0] || [];
  if (amount_total)
    await emailNotification(
      `Your payment (${formatCurrency(amount_total / 100)}) was successful 😊`,
      firstName,
      userEmail
    );

  return (
    <div className=" w-full h-screen backdrop-blur-sm bg-black/80 flex justify-center items-center fixed left-0 top-0 z-50">
      {/*  */}
      <div
        className={`min-w-96 p-4 min-h-96 shadow-lg bg-stone-100 rounded-md ${
          status !== "successful" && "flex flex-col justify-center"
        }`}
      >
        <div className="flex flex-col  gap-4 px-4 pb-8">
          <div className="flex flex-col gap-2 justify-center items-center pb-4 border-b-2">
            <span
              className={`${
                status === "successful" ? "text-green-500" : "text-red-500"
              } text-7xl font-bold`}
            >
              {status === "successful" ? (
                <BsCheck2Circle />
              ) : (
                <ImCancelCircle />
              )}
            </span>
            <p className="text-stone-800 text-3xl">
              {status === "successful"
                ? "Payment Successful"
                : "Payment Cancelled"}
            </p>
            <p className="text-stone-600">
              {status === "successful"
                ? "Thank you for your payment! 🙏"
                : "Payment have been aborted 😞"}
            </p>
          </div>

          {status === "successful" && (
            <div className="mt-1 flex flex-col gap-2 ">
              <div className="flex justify-between">
                <p className="text-stone-700">Amount paid:</p>
                <p>${(amount_total / 100).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-stone-700">Payment Method:</p>
                <p>Card</p>
              </div>
              <div className="flex justify-between">
                <p className="text-stone-700">Card used:</p>
                <p>{`${card_brand} ending in ***${last4_digits}`}</p>
              </div>
            </div>
          )}
          <Link
            href={path}
            className="bg-blue-600 text-center p-2 rounded-md mt-3
             text-stone-200 hover:opacity-70 transition-all duration-200"
          >
            &larr; Back to {pageName} page
          </Link>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
