import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { FlipbookViewer } from "@/components/flipbook/FlipbookViewer";
import { catalogPages } from "@/components/flipbook/catalogPages";

export default function Flipbook() {
  const { categoryId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryName = categoryId
    ? categoryId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Product Catalog";

  return (
    <div className="flex min-h-dvh flex-col bg-[#edf2f7]">
      <Header />

      <main className="flex h-[calc(100dvh-4rem)] flex-1 min-h-0 overflow-hidden lg:h-[calc(100dvh-5rem)]">
        <section className="mx-auto h-full w-full max-w-[1680px] p-3 sm:p-5 lg:p-8">
          <FlipbookViewer
            title={categoryName}
            subtitle="A polished, responsive flipbook experience built for browsing the Medova product catalog."
            pages={catalogPages}
            className="h-full rounded-[34px] border border-primary/10 shadow-[0_35px_90px_rgba(15,23,42,0.14)]"
          />
        </section>
      </main>
    </div>
  );
}
