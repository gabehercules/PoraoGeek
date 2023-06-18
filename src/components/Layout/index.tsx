import DashboardHeader from "../DashboardHeader";
import MainTopBar from "../MainTopBar";
import SidebarNav from "../SidebarNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-grid w-full h-full ">
      <DashboardHeader />
      <SidebarNav />
      <MainTopBar />
      <main className="main-container flex flex-col overflow-y-auto">
        {children}
      </main>
      <div className="sidepanel bg-zinc-500">sidepanel</div>
    </div>
  );
}
