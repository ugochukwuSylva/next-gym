import ArticlesPageId from "@/app/_components/ArticlesPageId";
import { getArticleById } from "@/app/_lib/data-services";

type Props = {
  params: { articlesId: string };
};

export async function generateMetadata({ params }: Props) {
  const { id } = await getArticleById(params.articlesId);

  return { title: `Article ${id}` };
}

export default async function page({ params }: Props) {
  const { articlesId } = params;

  const selectedArticle = await getArticleById(articlesId);

  return (
    <div className="">
      <ArticlesPageId selectedArticle={selectedArticle} />
    </div>
  );
}
