import type { Metadata } from "next";
import { Noto_Sans_Thai, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.scss";

const thai = Noto_Sans_Thai({ subsets: ["thai", "latin"], variable: "--font-thai", display: "swap" });
const latin = Inter({ subsets: ["latin"], variable: "--font-latin", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Student Portal", template: "%s | Student Portal" },
  description: "ระบบสารสนเทศสำหรับนักศึกษา",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${thai.variable} ${latin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
