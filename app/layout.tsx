import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Roboto, Viga } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { Toaster } from "react-hot-toast";

import QuickContact from "./_components/QuickContact";
import TopNavigation from "./_components/TopNavigation";
import Footer from "./_components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const viga = Viga({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    template: "%s: Keeping fit is a way of life",
    default: "Welcome to Next-Gym",
  },
  description: "Gymnastic inspiration",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  const avatar = session?.user?.image;

  return (
    <html lang="en">
      <body
        className={`${roboto?.className}  min-h-screen overflow-x-hidden  w-full relative`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuickContact />
        <TopNavigation avatar={avatar} />
        {children}
        <Footer />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 4000,
            },

            error: { duration: 6000 },

            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "bg-white",
              color: "text-stone-700",
            },
          }}
        />
      </body>
    </html>
  );
}
