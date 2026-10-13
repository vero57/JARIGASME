import { Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "JARIGASME · JRG-01 Linear Switch",
  description:
    "A balanced 45gf linear switch engineered with custom-formulated POM stem tolerances and a custom progressive spring.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth scroll-pt-20`}
    >
      <body className="min-h-full bg-surface-container-low font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-fixed">
        {children}
      </body>
    </html>
  );
}
