interface FixedNotificationContentProps {
  text: string;
}

export default function FixedNotificationContent({
  text,
}: FixedNotificationContentProps) {
  return <h5 className="text-sm leading-none">{text}</h5>;
}
