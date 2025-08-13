"use client";

import { useState } from "react";
import UpdateBookingForm from "./UpdateBookingForm";
import UpdateBoookingFormItems from "./UpdateBookingFormItems";

type Props = {
  children: React.ReactNode;
  id: number;
  action?: (id: number) => Promise<void>;
  user?: string;
  comment?: string;
  actionType: string;
  isPending?: boolean;
};

export default function ActionButton({
  children,
  action,
  actionType,
  user,
  comment,
  id,
  isPending,
}: Props) {
  const [isClickedBooking, setIsClickedBooking] = useState(false);

  async function handleMutation() {
    if (
      actionType === "delete" &&
      window.confirm("Are you sure you want to delete this booking ?")
    ) {
      action !== undefined ? action(id) : null;
    }

    if (actionType === "update") {
      setIsClickedBooking(true);
    }
  }

  const isBlured = actionType === "update";

  if (isClickedBooking) {
    return (
      <UpdateBookingForm
        id={id}
        isBlured={isBlured}
        user={user!}
        setIsClickedBooking={setIsClickedBooking}
        comment={comment!}
      >
        <UpdateBoookingFormItems id={id} />
      </UpdateBookingForm>
    );
  }

  return (
    <button
      onClick={handleMutation}
      disabled={isPending}
      className="transition-all duration-200 hover:scale-125 text-xl disabled:text-stone-400 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      {children}
    </button>
  );
}
