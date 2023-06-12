import Link from "next/link";
import data from "./data";

export default function MainNavigation() {
  return (
    <div>
      <ul className="flex gap-3">
        {data.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className="text-zinc-400">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
