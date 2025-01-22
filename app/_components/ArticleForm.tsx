export default function ArticleForm() {
  return (
    <div className="p-10 flex gap-4 items-center border-b border-b-stone-200">
      <input
        type="text"
        placeholder="Search ..."
        className="py-2 px-6 border-2 border-transparent focus:outline-none focus:border-stone-300 text-lg  pl-3 placeholder:text-stone-400 text-stone-600"
      />
      <button className="py-3 px-6 text-white rounded-md bg-red-500 hover:bg-stone-800 transition-all duration-300">
        Search
      </button>
    </div>
  );
}
