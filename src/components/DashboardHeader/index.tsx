import Link from "next/link";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function DashboardHeader() {
  return (
    <div className="flex gap-8 items-center justify-between w-full border-b bg-dark-bg border-dark-border p-4 header-dashboard">
      <div className="w-[120px]">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex flex-1 gap-8 items-center">
        <SearchBar />
      </div>
    </div>
  );
}
