"use client";

import { AdminSidebar } from "@/components/Asidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageHeader } from "@/components/admin/pageHeader";
import {
  Activity,
  Briefcase,
  Download,
  GraduationCap,
  Plus,
  Users,
} from "lucide-react";
import { useAdminDashboard } from "@/_hooks/admin/useAdminDashboard";
import UsersTable from "@/components/admin/users/userTable";
import { UserRecord } from "@/components/admin/users/types";

// sample user records
const sampleUsers: UserRecord[] = [
  {
    id: "OUSL-ST-001",
    name: "Aisha Rahman",
    email: "aisha@university.edu",
    role: "Staff",
    status: "Active",
    center: "Main Campus",
    createdAt: "2025-08-01",
    avatar: "",
  },
  {
    id: "OUSL-ST-002",
    name: "Daniel Smith",
    email: "daniel@university.edu",
    role: "Staff",
    status: "Inactive",
    center: "North Campus",
    createdAt: "2025-07-15",
    avatar: "",
  },
];

export default function StaffPage() {
  const { stats } = useAdminDashboard();

  // These cards intentionally reflect people-focused admin stats instead of project metrics.
  const summaryCards = [
    {
      label: "Total Staff",
      value: stats.totalStaff,
      icon: Users,
      iconClass: "bg-[#eef2ff] text-[#4f46e5]",
    },
    {
      label: "Centers",
      value: stats.centers,
      icon: GraduationCap,
      iconClass: "bg-[#ecfeff] text-[#0891b2]",
    },
    {
      label: "Active",
      value: stats.activeStaff,
      icon: Activity,
      iconClass: "bg-[#ecfdf5] text-[#10b981]",
    },
    {
      label: "Inactive",
      value: stats.inactiveStaff,
      icon: Briefcase,
      iconClass: "bg-[#fff7ed] text-[#f59e0b]",
    },
  ];

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="px-6 py-4">
            <PageHeader title="Administration Dashboard" />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 bg-gray-100 p-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              {/* Title  layout*/}
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Staff Management
                </h1>
                <p className="mt-1 text-sm text-[#5E6A7A]">
                  Manage university Staff Records, roles and status
                </p>
              </div>
              {/* Buttons*/}
              <div className="ml-auto flex items-center gap-3">
                <button
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundColor: "oklch(50.8% 0.17 264.5)" }}
                >
                  <Download className="h-4 w-4" />
                  Export CSV
                </button>

                <button
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium text-white shadow-sm transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundColor: "oklch(50.8% 0.17 264.5)" }}
                >
                  <Plus className="h-4 w-4" />
                  Add Staff
                </button>
              </div>
            </div>
            {/* Stat card representation*/}
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {summaryCards.map(({ label, value, icon: Icon, iconClass }) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                        {label}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6">
              <UsersTable
                users={sampleUsers}
                isLoading={false}
                fetchError={null}
                page={1}
                totalPages={1}
                totalUsers={sampleUsers.length}
                itemsPerPage={sampleUsers.length}
                onPageChange={() => {}}
                onViewUser={(user) => console.log("view", user)}
                onChangeStatus={(user) => console.log("change", user)}
                onDeleteUser={(id) => console.log("delete", id)}
              />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
