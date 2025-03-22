import type { Metadata } from 'next';
import './globals.css';
import { SportProvider } from '@/context/SportContext';
import { LinksProvider } from '@/context/LinkContext';
import { CountryProvider } from '@/context/CountryContext';

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
         <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="anonymous"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
               rel="stylesheet"
            />
         </head>
         <body className={`antialiased bg-[#1c2c40] px-8 pt-1`}>
            <SportProvider>
               <LinksProvider>
                  <CountryProvider>{children}</CountryProvider>
               </LinksProvider>
            </SportProvider>
         </body>
      </html>
   );
}
