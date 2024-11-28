import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Roboto, Viga } from "next/font/google";
import "./globals.css";
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
    template: "Keeping fit is a way of life",
    default: "Welcome to Next-Gym",
  },
  description: "Gymnastic inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen  w-full relative`}
        // lg:h-[120vh]
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuickContact />
        <TopNavigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
