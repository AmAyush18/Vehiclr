"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, Calendar, Cog, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    label: "Cars",
    icon: Car,
    href: "/admin/cars",
  },
  {
    label: "Test Drives",
    icon: Calendar,
    href: "/admin/test-drives",
  },
  {
    label: "Settings",
    icon: Cog,
    href: "/admin/settings",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full flex-col overflow-y-auto secondary shadow-sm border-r">
        <div className="p-6">
          <Link href="/admin">
            <h1 className="text-2xl font-bold">Vehiclr Admin</h1>
          </Link>
        </div>
        <div className="flex flex-col w-full">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-x-2 text-sm font-medium pl-6 transition-all hover:bg-orange-50/50",
                pathname === route.href
                  ? "txt-secondary txt0 light-outline hover:bg-blue-100 hover:text-blue-700"
                  : "",
                "h-12"
              )}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Link>
          ))}
        </div>
        <div className="mt-2 px-6">
          <SignOutButton>
            <button className="flex items-center cursor-pointer gap-x-2 text-sm font-medium transition-all">
              <LogOut className="h-5 w-5" />
              Log out
            </button>
          </SignOutButton>
        </div>
      </div>

      {/* Mobile Bottom Tabs */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 secondary border-t flex justify-around items-center h-16">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex flex-col items-center justify-center txt-secondary text-xs font-medium transition-all",
              pathname === route.href ? "txt-secondary" : "",
              "py-1 flex-1"
            )}
          >
            <route.icon
              className={cn(
                "h-6 w-6 mb-1",
                pathname === route.href ? "txt-secondary" : "text-slate-500"
              )}
            />
            {route.label}
          </Link>
        ))}
      </div>
    </>
  );
};
