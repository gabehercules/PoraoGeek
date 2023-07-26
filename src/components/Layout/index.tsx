import DashboardHeader from "../DashboardHeader";
import MainTopBar from "../MainTopBar";
import SidebarNav from "../SidebarNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-grid w-full h-screen ">
      <DashboardHeader />
      <SidebarNav />
      <main className="main-container flex flex-col items-center overflow-y-auto">
        <MainTopBar />
        {children}
      </main>
      <div className="sidepanel border-l border-dark-border">sidepanel</div>
    </div>
  );
}
