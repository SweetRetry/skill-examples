"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@workspace/ui/components/button";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Releases",
      href: "/dashboard/releases",
      icon: "disc",
    },
    {
      title: "Finance",
      href: "/dashboard/finance",
      icon: "activity",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r border-white/5 bg-zinc-950 md:flex">
        <div className="flex h-16 items-center px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold tracking-tighter text-white">
              VOID<span className="text-primary">.</span>ARTIST
            </span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarItems.map((item, index) => {
              const Icon = Icons[item.icon as keyof typeof Icons];
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-white",
                    pathname === item.href && "bg-white/5 text-primary",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="border-t border-white/5 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-white gap-2"
          >
            <Icons.logout className="h-4 w-4" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-white/5 bg-zinc-950 px-6">
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-white">
              {sidebarItems.find((i) => i.href === pathname)?.title ||
                "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Icons.user className="h-4 w-4 text-primary" />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
