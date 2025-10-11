import { format } from "date-fns";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return format(date, "dd MMM yyyy, hh:mm a");
}

export function formatDateOnly(dateString: string) {
  const date = new Date(dateString);
  return format(date, "dd MMMM yyyy");
}

export function formatCurrency(number: number) {
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return format(number);
}
