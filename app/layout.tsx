import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApiModeProvider } from '@/store/provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: "Emoji Generator",
  description: "Generate custom emojis using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ApiModeProvider>
          {children}
        </ApiModeProvider>
      </body>
    </html>
  );
}
