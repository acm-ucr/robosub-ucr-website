/* eslint-disable new-cap */
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--jost-font",
});

export const metadata = {
  title: "UCR RoboSub",
  description: "UCR Underwater Robot Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className="">
        <NavBar />
        <div className="mt-5 w-full flex flex-col min-h-screen overflow-hidden items-center mb-20 font-jost">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
