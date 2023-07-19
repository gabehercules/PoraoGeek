import { Search } from "@styled-icons/boxicons-regular/";

export default function SearchBar() {
  return (
    <div>
      <div>
        <form action="#">
          <div className="relative flex items-center">
            <label
              htmlFor="search"
              className="w-8 h-4 absolute flex items-center justify-center"
            >
              <Search width={16} className="text-brand-green" />
            </label>
            <input
              type="search"
              id="search"
              name="search"
              placeholder={"Pesquise qualquer coisa"}
              className="w-[280px] flex border bg-dark-primary text-white border-dark-border rounded py-1 px-8 placeholder:text-dark-text placeholder:text-base placeholder:leading-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
