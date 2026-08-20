import { AdminSidebar } from "../../components/Asidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PageHeader } from "@/components/admin/pageHeader";

export default function AdminPage() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="px-6 py-4">
            <PageHeader title="Administration Dashboard" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-6">
          {/* Dashboard content */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
