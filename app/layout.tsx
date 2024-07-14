import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "../components/RootLayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Forest Hill Dashboard",
  description: "blank",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} cz-shortcut-listen="true">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
