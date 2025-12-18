import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kerith & Co. Events | Luxury Event Planning Rooted in Calm, Clarity & Personalized Elegance",
  description:
    "Luxury event planning built on clarity, organization, and calm execution. We handle the details so you can enjoy the moment. Because peace of mind is the real luxury.",
  authors: [{ name: "Kerith & Co. Events" }],
  keywords: [
    "luxury event planning",
    "calm event coordination",
    "wedding planner",
    "baby shower planning",
    "corporate events",
    "event coordination",
    "stress-free event planning",
    "neuro-inclusive planning",
    "guest experience design",
    "event concierge services",
    "inclusive luxury events",
  ],
  openGraph: {
    title: "Kerith & Co. Events | Luxury Event Planning Rooted in Calm & Clarity",
    description:
      "Luxury event planning built on clarity, organization, and calm execution. We handle the details so you can enjoy the moment.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kerithandco",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  alternates: {
    canonical: "https://kerithandco.com",
  },
  icons: {
    icon: "/assets/kerith-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"     suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfairDisplay.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

