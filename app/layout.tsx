import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";



const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PadelUp",
  description: "Reservá tu cancha de pádel en segundos. Elegí tu horario y disfruta del juego sin demoras",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${monaSans.className} antialiased min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            
          >
            {children}
          </ThemeProvider>
      
      </body>
    </html>
  );
}
