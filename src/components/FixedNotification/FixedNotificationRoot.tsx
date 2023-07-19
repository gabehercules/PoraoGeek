import { ReactNode } from "react";

interface FixedNotificationRootProps {
  children: ReactNode;
}

export default function FixedNotificationRoo({
  children,
}: FixedNotificationRootProps) {
  return (
    <div className="flex max-w-[991px] w-full h-full items-center justify-between">
      {children}
    </div>
  );
}
