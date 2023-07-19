import { ReactNode } from "react";

interface FixedNotificationActionsProps {
  children: ReactNode;
}

export default function FixedNotificationActions({
  children,
}: FixedNotificationActionsProps) {
  return <div className="flex gap-2">{children}</div>;
}
