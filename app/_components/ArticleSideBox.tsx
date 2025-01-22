import ArticleForm from "./ArticleForm";
import ArticleTags from "./ArticleTags";
import ArticleAds from "./ArticleAds";

export default function ArticleSideBox() {
  return (
    <div className="bg-stone-100">
      <ArticleForm />
      <ArticleTags />
      <ArticleAds />
    </div>
  );
}
