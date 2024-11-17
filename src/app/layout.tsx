import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MusicPlayer } from "@/components/Player";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <SidebarProvider
          style={{
            "--sidebar-width": "16rem",
            "--sidebar-width-mobile": "16rem",
            "--sidebar-width-icon": "5rem",
          }}
        >
          <AppSidebar />

          <main className="flex flex-col flex-grow px-6  relative h-screen">
            <ScrollArea className="grid grid-cols-1 grid-rows-1  mb-24  overflow-y-scroll [&::-webkit-scrollbar]:w-2">
              <nav className="flex justify-between">
                <div className="flex">
                  <div>MurMur</div>
                  <SidebarTrigger />
                </div>
                <div>
                  <Button>Sign up</Button>
                  <Button>Sign in</Button>
                </div>
              </nav>
              <ScrollArea className="flex-grow overflow-auto">
                {children}
              </ScrollArea>
            </ScrollArea>
            <MusicPlayer className="absolute bottom-0 right-0" />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
