export default function ArticleTags() {
  const tags = [
    "article",
    "computer",
    "developer",
    "famous",
    "interview",
    "it",
    "learn",
    "money",
    "photography",
    "post",
    "seo",
    "technology",
    "tutorial",
    "website",
  ];

  return (
    <div className="p-3 sm:p-10 flex flex-col lg:items-start items-center gap-10 border-b border-b-stone-200">
      <h1 className="pb-4 w-fit border-b-2 border-b-red-500 text-2xl font-black text-stone-700">
        Tags Cloud
      </h1>

      <div className="flex lg:justify-start justify-center flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="cursor-pointer hover:bg-red-500 transition-all duration-300 hover:text-white p-3 border border-1 text-sm rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
