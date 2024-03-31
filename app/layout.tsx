import type { Metadata } from "next";
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
        </main>
        <Footer />
      </body>
    </html>
  );
}
