import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // Used to build absolute URLs for OG/Twitter images
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),

  title: 'Sarah Gwynn - Frontend Developer',
  description:
    'Portfolio of Sarah Gwynn: frontend dev focused on clean UX and modern React/Next.js.',
  keywords: [
    'Frontend Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'UI/UX',
    'Responsive Design',
    'Web Animation',
    'Modern Web Development',
    'CSS',
    'Performance Optimization',
    'Web Accessibility',
    'Component Design',
    'Sarah Gwynn',
  ],
  authors: [{ name: 'Sarah Gwynn' }],
  creator: 'Sarah Gwynn',

  openGraph: {
    title: 'Sarah Gwynn - Frontend Developer Portfolio',
    description:
      'Passionate frontend developer crafting beautiful and interactive web experiences. Explore projects and skills.',
    url: '/', // resolved against metadataBase
    siteName: 'Sarah Gwynn - Portfolio',
    images: [
      {
        url: '/og-image.jpg', // put this file in /public
        width: 1200,
        height: 630,
        alt: 'Sarah Gwynn Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Gwynn - Frontend Developer',
    description:
      'Frontend developer crafting beautiful and interactive web experiences.',
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
