"use client";
import {
  Home,
  Headphones,
  Heart,
  Trophy,
  BarChart,
  Compass,
  ListMusic,
  Clock,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
const mainRoutes = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Discover", icon: Compass, href: "/discover" },
  { label: "Library", icon: Headphones, href: "/library" },
];

const libraryRoutes = [
  { label: "Playlists", icon: ListMusic, href: "/playlists" },
  { label: "Favorites", icon: Heart, href: "/favorites" },
  { label: "Recent", icon: Clock, href: "/recent" },
];

const userRoutes = [
  { label: "Achievements", icon: Trophy, href: "/achievements" },
  { label: "Stats", icon: BarChart, href: "/stats" },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="bg-background/60 backdrop-blur-xl">
      <SidebarHeader>
        <div className="p-6">
          <Link
            href="/"
            className="flex items-center space-x-3 font-semibold text-xl text-primary"
          >
            <div className="p-2 rounded-xl bg-primary/10 backdrop-blur-sm">
              <Headphones className="h-6 w-6" />
            </div>
            <span>Murmur</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-3">
                {mainRoutes.map((route) => (
                  <SidebarMenuItem key={route.href}>
                    <SidebarMenuButton
                      className={cn(
                        "w-full justify-start h-12",
                        pathname === route.href
                          ? "bg-primary/10 text-primary hover:bg-primary/15"
                          : "hover:bg-primary/5",
                      )}
                      asChild
                    >
                      <Link href={route.href}>
                        <span
                          className={cn(
                            "p-2 rounded-xl mr-3",
                            pathname === route.href
                              ? "bg-primary/15 text-primary"
                              : "bg-muted/80",
                          )}
                        >
                          <route.icon className="h-5 w-5" />
                        </span>
                        <span>{route.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Library</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-3">
                {libraryRoutes.map((route) => (
                  <SidebarMenuItem key={route.href}>
                    <SidebarMenuButton
                      className={cn(
                        "w-full justify-start h-12",
                        pathname === route.href
                          ? "bg-primary/10 text-primary hover:bg-primary/15"
                          : "hover:bg-primary/5",
                      )}
                      asChild
                    >
                      <Link href={route.href}>
                        <span
                          className={cn(
                            "p-2 rounded-xl mr-3",
                            pathname === route.href
                              ? "bg-primary/15 text-primary"
                              : "bg-muted/80",
                          )}
                        >
                          <route.icon className="h-5 w-5" />
                        </span>
                        <span>{route.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>User</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-3">
                {userRoutes.map((route) => (
                  <SidebarMenuItem key={route.href}>
                    <SidebarMenuButton
                      className={cn(
                        "w-full justify-start h-12",
                        pathname === route.href
                          ? "bg-primary/10 text-primary hover:bg-primary/15"
                          : "hover:bg-primary/5",
                      )}
                      asChild
                    >
                      <Link href={route.href}>
                        <span
                          className={cn(
                            "p-2 rounded-xl mr-3",
                            pathname === route.href
                              ? "bg-primary/15 text-primary"
                              : "bg-muted/80",
                          )}
                        >
                          <route.icon className="h-5 w-5" />
                        </span>
                        <span>{route.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
