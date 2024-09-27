import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ToasterProvider from '@/providers/toast-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '800', '700'],
});

export const metadata: Metadata = {
  title: 'Bilgekaan - Webflow & NoCode Development',
  description:
    'Egal ob Profi, Entwickler, Laie oder Neugieriger: No-Code und Low-Code fördern durch ihre Einfachheit und Übersicht eine kollaborative Entwicklung.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body className={poppins.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
