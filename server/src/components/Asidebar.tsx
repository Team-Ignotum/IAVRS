"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import crest from "../../src/app/favicon.ico.jpeg";
import {
  BriefcaseBusiness,
  CircleHelp,
  GraduationCap,
  LayoutDashboard,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
} from "lucide-react";
import { useState } from "react";
const mainLinks = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Staff Management",
    href: "/admin/staff",
    icon: BriefcaseBusiness,
  },
  {
    label: "Student Management",
    href: "/admin/students",
    icon: GraduationCap,
  },
];

const bottomLinks = [
  
  {
    label: "Support",
    href: "/admin/support",
    icon: CircleHelp,
  },

  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(href);
  };

  return (
    <aside
      id="admin-sidebar-navigation"
      className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}
    >
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <Image src={crest} alt="IARVS crest" width={30} height={30} />
        </div>

        <div className="sidebar-brand-text">
          <strong>IARVS PORTAL</strong>
        </div>

        <button
          className="sidebar-toggle"
          type="button"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          aria-controls="admin-sidebar-navigation"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed((current) => !current)}
        >
          {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
        </button>
      </div>

      <nav className="sidebar-main-nav" aria-label="Admin navigation">
        {mainLinks.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-link ${active ? "active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <Icon
                className="admin-nav-icon"
                size={19}
                strokeWidth={1.8}
              />

              <span className="admin-nav-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <nav className="sidebar-bottom-nav" aria-label="Settings navigation">
        {bottomLinks.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-link ${active ? "active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <Icon
                className="admin-nav-icon"
                size={19}
                strokeWidth={1.8}
              />

              <span className="admin-nav-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}