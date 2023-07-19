import { ButtonHTMLAttributes, ElementType } from "react";

interface FixedNotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  text?: string;
}

export default function FixedNotificationAction({
  icon: Icon,
  text,
  ...rest
}: FixedNotificationActionProps) {
  return (
    <button
      {...rest}
      className="flex gap-1 items-center justify-end text-xs p-1 rounded text-white/50 hover:bg-white/10 hover:text-light-text transition-colors duration-300"
    >
      {text}
      <Icon className="flex items-center justify-center" width={16} />
    </button>
  );
}
