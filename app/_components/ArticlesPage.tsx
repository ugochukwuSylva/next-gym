"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import PagesBackgroundContainer from "./PagesBackgroundContainer";
import ArticleMainBox from "./ArticleMainBox";
import ArticleSideBox from "./ArticleSideBox";
import PaginationButtons from "./PaginationButtons";
import usePagination from "../customHook/usePagination";

type Props = {
  articles: {
    title: string;
    authorName: string;
    authorAvatar: string;
    writeup: string;
    date: string;
    image: string;
    id: string;
  }[];
};

export default function ArticlesPage({ articles }: Props) {
  const { targetRef } = useFixedOnScroll();
  const VIEWS_PER_PAGE = 2;

  const {
    arrContents,
    totalPages,
    currentPage,
    lastPage,
    pageNumber,
    viewsPerPage,
    nextPage,
    prevPage,
  } = usePagination(articles, VIEWS_PER_PAGE, articles.length);

  return (
    <div className="md:min-h-screen lg:h-screen" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/articles-bg.jpg"
        altText="background image"
      />

      <div className="bg-gradient-to-b from-white to-red from-55% to-55% pb-6 lg:pb-[110vh]">
        <div className="flex flex-col lg:grid lg:grid-cols-[3fr_1fr]  gap-10 py-20 px-3 sm:px-10 bg-white">
          <main className="flex flex-col gap-10">
            {arrContents.map((article) => (
              <ArticleMainBox
                key={article.title}
                title={article.title}
                authorName={article.authorName}
                authorAvatar={article.authorAvatar}
                writeup={article.writeup}
                date={article.date}
                image={article.image}
                id={article.id}
              />
            ))}

            {viewsPerPage !== lastPage && (
              <PaginationButtons
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
                lastPage={lastPage}
                totalPages={totalPages}
                pageNumber={Number(pageNumber)}
              />
            )}
          </main>
          <aside className="  rounded-md">
            <ArticleSideBox />
          </aside>
        </div>
      </div>
    </div>
  );
}
