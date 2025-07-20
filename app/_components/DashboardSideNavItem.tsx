"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  text: string;
  link: string;
};

export default function DashboardSideNavItem({ children, text, link }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`dashboardItems ${
        pathname === link && "bg-red-50 *:text-red-600"
      }`}
    >
      <span className="text-xl text-stone-600">{children}</span>
      <span className="">{text}</span>
    </Link>
  );
}
