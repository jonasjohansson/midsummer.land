import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, EB_Garamond, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midsummer.land"),
  title: "Midsummerland 2026",
  description: "A dream drawn by fate. Midsummer gathering, 19 to 21 June 2026, Vibäck, Nyköping.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Midsummerland 2026",
    description: "A dream drawn by fate. 19 to 21 June 2026, Vibäck, Nyköping.",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midsummerland 2026",
    description: "A dream drawn by fate. 19 to 21 June 2026, Vibäck, Nyköping.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cinzel.variable} ${ebGaramond.variable} ${bodoniModa.variable}`}>
      <body>{children}</body>
    </html>
  );
}
