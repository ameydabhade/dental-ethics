import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Rudagi's Dental Centre of Xcellence | Best Dentist in Ravet, Pimpri",
  description: "Dr. Kavitarani Bhimappa Rudagi - Award-winning endodontist with 15+ years experience. Dental implants, root canal, smile designing, clear aligners in Ravet, Pimpri. Book appointment: +91 9175682823",
  keywords: "dentist ravet, dental clinic pimpri, dr rudagi, dental implants, root canal treatment, smile designing, clear aligners, painless dentistry, best dentist ravet",
  authors: [{ name: "Dr. Kavitarani Bhimappa Rudagi" }],
  creator: "Dr. Rudagi's Dental Centre of Xcellence",
  publisher: "Dr. Rudagi's Dental Centre of Xcellence",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drrudagi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Rudagi's Dental Centre of Xcellence | Best Dentist in Ravet",
    description: "Award-winning endodontist Dr. Kavitarani Bhimappa Rudagi with 15+ years experience. Advanced dental care in Ravet, Pimpri.",
    url: 'https://drrudagi.com',
    siteName: "Dr. Rudagi's Dental Centre of Xcellence",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Dr. Rudagi's Dental Centre of Xcellence",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Rudagi's Dental Centre of Xcellence",
    description: "Award-winning dental care with 15+ years experience in Ravet, Pimpri",
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
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
