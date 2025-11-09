import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata: Metadata = {
  title: "Positivus",
  description: "Figma to Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   <html lang="en">
  <body className={`${spaceGrotesk.variable} antialiased`}>
    <div className="px-5 md:px-[100px] md:max-w-[1440px] mx-auto">
      <Header />
      {children}
    </div>
  </body>
</html>
    </html>
  );
}
