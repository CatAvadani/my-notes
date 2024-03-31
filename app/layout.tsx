import type { Metadata } from "next";
import Image from "next/image";
import Footer from "./components/Footer";
import NotesProvider from "./contexts/NoteContext";
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
      <body className='h-screen flex flex-col items-center justify-between'>
        <main className=' flex flex-col items-center '>
          <NotesProvider>{children}</NotesProvider>
          <Image
            src='/logo.svg'
            alt='logo'
            width={100}
            height={100}
            className=' absolute left-1 top-2 size-48 md:size-64'
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
