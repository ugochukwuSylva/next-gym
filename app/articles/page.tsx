import { Metadata } from "next";
import ArticlesPage from "../_components/ArticlesPage";
import { getArticles } from "../_lib/data-services";

export const metadata: Metadata = {
  title: "Articles",
};

export default async function Page() {
  const articles = await getArticles();

  return (
    <main>
      <ArticlesPage articles={articles} />
    </main>
  );
}
