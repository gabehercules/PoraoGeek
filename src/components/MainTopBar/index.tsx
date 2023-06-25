import React from "react";
import UserProfileNavbar from "../UserProfileNavbar";

export default function MainTopBar() {
  return (
    <div className="flex items-center justify-center main-topbar bg-darker-bg border-b border-dark-border">
      <UserProfileNavbar />
    </div>
  );
}
