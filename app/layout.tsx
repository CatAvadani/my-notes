import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MY NOTES",
  description: "A simple note app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className=' h-screen flex flex-col justify-top items-center'>
        {children}
      </body>
    </html>
  );
}
