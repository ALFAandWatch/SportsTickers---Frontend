import type { Metadata } from 'next';
import './globals.css';
import { SportProvider } from '@/context/SportContext';
import { LinksProvider } from '@/context/LinkContext';

export const metadata: Metadata = {
   title: 'Sports Ticker',
   description: 'The most complete livescore library!',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head></head>
         <body className={`antialiased bg-[#1c2c40] px-8 py-5`}>
            <SportProvider>
               <LinksProvider>{children}</LinksProvider>
            </SportProvider>
         </body>
      </html>
   );
}
