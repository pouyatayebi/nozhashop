import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider"
import "./globals.css";
import { words } from "@/lib/content";


export const metadata: Metadata = {
  title: words.homeSeoTitle,
  description:words.homeSeoDescription,
};

const iransans = localFont({
  src: [
    {
      path: "../../public/fonts/iransans/iransans.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/iransans/iransans-bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body
       className={iransans.className}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
