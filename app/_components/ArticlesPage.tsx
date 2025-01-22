"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import PagesBackgroundContainer from "./PagesBackgroundContainer";
import ArticleButtons from "./ArticleButtons";
import { useState } from "react";
import ArticleMainBox from "./ArticleMainBox";
import ArticleSideBox from "./ArticleSideBox";

type Props = {
  articles: {
    title: string;
    authorName: string;
    authorAvatar: string;
    writeup: string;
    date: string;
    image: string;
  }[];
};

export default function ArticlesPage({ articles }: Props) {
  const { targetRef } = useFixedOnScroll();

  const [currentPage, setCurrentPage] = useState<number>(0);

  const pagesPerView = 2;
  const lastPage = articles.length;
  const totalPages = Math.ceil(lastPage / pagesPerView);
  const articlesPages = articles.slice(
    currentPage * pagesPerView,
    currentPage * pagesPerView + pagesPerView
  );

  let pageNumber;
  if (currentPage === 0) pageNumber = pagesPerView;
  if (currentPage > 0) pageNumber = pagesPerView * currentPage + pagesPerView;
  if (currentPage === totalPages - 1) pageNumber = lastPage;

  function nextPage() {
    setCurrentPage((next) => (next === totalPages ? next : next + 1));
  }

  function prevPage() {
    setCurrentPage((prev) => (prev === 0 ? prev : prev - 1));
  }

  return (
    <div className="md:min-h-screen lg:h-screen" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/articles-bg.jpg"
        altText="background image"
      />

      <div className="bg-gradient-to-b from-white to-red from-55% to-55% pb-6 lg:pb-[110vh]">
        <div className="grid grid-cols-[50rem_1fr] gap-12 py-20 px-10 bg-white">
          <main className="flex flex-col gap-10">
            {articlesPages.map((article) => (
              <ArticleMainBox
                title={article.title}
                authorName={article.authorName}
                authorAvatar={article.authorAvatar}
                writeup={article.writeup}
                date={article.date}
                image={article.image}
              />
            ))}

            {pagesPerView !== lastPage && (
              <ArticleButtons
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
