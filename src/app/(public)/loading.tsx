import { BiLoaderAlt } from "react-icons/bi";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <BiLoaderAlt className="text-white animate-spin" />
    </div>
  );
}
