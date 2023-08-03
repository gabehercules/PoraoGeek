import DashboardHeader from "../DashboardHeader";
import MainTopBar from "../MainTopBar";
import SidePanel from "../SidePanel";
import SidebarNav from "../SidebarNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-grid w-full h-screen ">
      <DashboardHeader />
      <SidebarNav />
      <MainTopBar />
      <main className="main-container flex flex-col items-center overflow-y-auto">
        {children}
      </main>
      <SidePanel />
    </div>
  );
}
