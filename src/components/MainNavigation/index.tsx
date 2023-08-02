import Link from "next/link";
import data from "./data";

export default function MainNavigation() {
  return (
    <div>
      <ul className="flex gap-3 px-10">
        {data.map((item, i) => (
          <li key={i}>
            <Link href={item.path} className="text-sm text-zinc-400">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
