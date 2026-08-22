import type { Metadata } from "next";
import { Anton, Permanent_Marker, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const brush = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brush",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Chicago Run Club",
  description:
    "A casual student run from Columbia College Chicago to Buckingham Fountain and back. Every Wednesday at 12:00 PM. No experience required — just show up.",
  metadataBase: new URL("https://cccrunclub.org"),
  openGraph: {
    title: "CCC Run Club",
    description:
      "Run. Connect. Soak up the sun. Every Wednesday, 12:00 PM — Columbia College Student Center to Buckingham Fountain.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#F3EEE4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${brush.variable} ${body.variable} bg-paper font-body text-ink antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cobalt focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
