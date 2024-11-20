import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Navbar } from "@/components/nav";
import { MusicPlayer } from "@/components/musicplayer";
// import { MusicPlayer } from "@/components/Player";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "murmur",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen scrollbar-hide`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col flex-grow px-2  relative h-screen">
            <section className="grid grid-cols-1 grid-rows-[50px,1fr]  mb-24  overflow-y-auto no-scrollbar">
              <Navbar />
              <ScrollArea className="flex-grow overflow-auto">
                {children}
              </ScrollArea>
            </section>
            <MusicPlayer className="absolute bottom-0 right-0" />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
