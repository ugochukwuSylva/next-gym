"use client";

import PagesBackgroundContainer from "./PagesBackgroundContainer";
import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import Product from "./Product";
import PaginationButtons from "./PaginationButtons";
import usePagination from "../customHook/usePagination";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  products: {
    productName: string;
    productPrice: number;
    oldPrice: number;
    productImage: string;
    isDiscounted: boolean;
    isPopular: boolean;
    id: string;
  }[];
};

export default function ShoppingPage({ products }: Props) {
  const { targetRef } = useFixedOnScroll();
  const [numProduct, setNumProduct] = useState<number>(8);
  const [sortOption, setSortOption] = useState<string>("all");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sorted = searchParams.get("sort") ?? "all";

  const VIEWS_PER_PAGE = numProduct;

  const {
    arrContents,
    totalPages,
    pageNumber,
    currentPage,
    lastPage,
    viewsPerPage,
    nextPage,
    prevPage,
    setCurrentPage,
  } = usePagination(products, VIEWS_PER_PAGE, products.length);

  let sortedView;
  if (sorted === "all") sortedView = arrContents.filter((product) => product);
  if (sorted === "popular")
    sortedView = arrContents.filter((product: any) => product.isPopular);
  if (sorted === "discounted")
    sortedView = arrContents.filter((product: any) => product.isDiscounted);
  if (sorted === "alphabetical")
    sortedView = arrContents?.slice().sort((a: any, b: any) => {
      const nameA = a.productName ? String(a.productName) : "";
      const nameB = b.productName ? String(b.productName) : "";
      return nameA.localeCompare(nameB);
    });

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const updatedValue = e.target.value;
    setSortOption(updatedValue);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sort", updatedValue);
    router.replace(`${pathname}?sort=${updatedValue.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="md:min-h-screen lg:h-screen" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/shopping-bg.jpg"
        altText="background image"
      />

      <div className="bg-gradient-to-b from-white to-red from-55% to-55% pb-6 lg:pb-[110vh]">
        <div className="bg-white px-8 py-24">
          <div className="flex flex-col gap-6 md:flex-row justify-between items-center mb-8">
            <span className="text-lg">
              {VIEWS_PER_PAGE === products.length
                ? `Showing all ${lastPage} results`
                : `Showing ${pageNumber} of ${products.length} results`}{" "}
            </span>

            <div className="flex gap-3">
              <select
                onChange={(e) => {
                  setNumProduct(Number(e.target.value));
                  setCurrentPage(0);
                }}
                className="p-3 text-stone-700 rounded-md border-2 border-stone-500"
              >
                <option value={8}>8 products</option>
                <option value={4}>4 products</option>
                <option value={products.length}>All</option>
              </select>

              <select
                onChange={handleChange}
                className="p-3  text-stone-700 rounded-md border-2 border-stone-500"
              >
                <option value="all">All</option>
                <option value="popular">Popular</option>
                <option value="discounted">Discounted</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>
          {/*  */}

          <div className="flex flex-wrap gap-6 mb-6">
            {sortedView?.map((product: any) => (
              <Product
                key={product.productImage}
                productImage={product.productImage}
                productName={product.productName}
                productPrice={product.productPrice}
                oldPrice={product.oldPrice}
                id={product.id}
                productQuantity={0}
                totalPrice={0}
              />
            ))}
          </div>

          <div className="px-0 md:px-20 lg:px-6">
            {viewsPerPage !== lastPage && (
              <PaginationButtons
                lastPage={lastPage}
                totalPages={totalPages}
                currentPage={currentPage}
                pageNumber={Number(pageNumber)}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
