import CategoriesNav from "../CategoriesNav";
import SearchBar from "../SearchBar";

export default function MainTopBar() {
  return (
    <div className="flex w-full px-10 border-b border-dark-border">
      <SearchBar />
      <CategoriesNav />
    </div>
  );
}
