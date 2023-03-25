import DashboardHeader from "../DashboardHeader";
import SidebarNav from "../SidebarNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-grid w-full h-full ">
      <DashboardHeader />
      <SidebarNav />
      <main className="main-container p-8">{children}</main>
    </div>
  );
}
