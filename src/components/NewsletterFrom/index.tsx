export default function NewsletterForm() {
  return (
    <>
      <form className="flex gap-2">
        {/* <label htmlFor="email" className="text-white">
          Quero ficar ligado
        </label> */}
        <input
          type="email"
          id="email"
          placeholder="luke.skywalker@theforce.space"
          className="border min-w-[250px] text-white border-zinc-800 rounded py-1 px-2 bg-transparent appearance-none
          placeholder:text-zinc-700 focus:ring focus:ring-[#00FF85]"
        />
        <button type="submit" className="bg-[#00FF85] p-1 rounded text-sm">
          Quero ficar ligado
        </button>
      </form>
    </>
  );
}
