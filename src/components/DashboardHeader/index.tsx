import Logo from "../Logo";

export default function DashboardHeader() {
  return (
    <div className="flex gap-8 items-center justify-between w-full border-b bg-dark-bg border-dark-border p-4 header-dashboard">
      <div className="w-[120px]">
        <Logo />
      </div>

      <div className="flex gap-8 items-center"></div>
    </div>
  );
}
