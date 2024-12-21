import { Metadata } from "next";
import ArticlesPage from "../_components/ArticlesPage";

export const metadata: Metadata = {
  title: "Articles",
};

export default function Page() {
  return (
    <main>
      <ArticlesPage />
    </main>
  );
}
