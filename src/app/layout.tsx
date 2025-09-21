import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Dental Ethics | Best Prosthodontist & Implantologist in NIBM Road, Pune",
  description: "Dr. Umang Shah - Expert prosthodontist & implantologist with 8+ years experience. Dental implants, prosthodontics, smile designing, Invisalign in NIBM Road, Pune. Book appointment: +91 7030399122",
  keywords: "dentist pune, dental clinic nibm road, the dental ethics, dental implants, prosthodontics, smile designing, invisalign, ethical dentistry, best prosthodontist pune",
  authors: [{ name: "Dr. Umang Shah" }],
  creator: "The Dental Ethics",
  publisher: "The Dental Ethics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thedentalethics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The Dental Ethics | Best Prosthodontist & Implantologist in Pune",
    description: "Expert prosthodontist Dr. Umang Shah with 8+ years experience. Advanced dental implants and ethical dental care in NIBM Road, Pune.",
    url: 'https://thedentalethics.com',
    siteName: "The Dental Ethics",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "The Dental Ethics",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Dental Ethics",
    description: "Ethical dental care with 8+ years experience in prosthodontics and implantology in NIBM Road, Pune",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
