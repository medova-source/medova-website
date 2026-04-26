import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { FlipbookViewer } from "@/components/flipbook/FlipbookViewer";
import { catalogData } from "@/components/flipbook/catalogPages";

export default function Flipbook() {
  const { categoryId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categoryKey = categoryId || "medical";
  const catalog = catalogData[categoryKey] || catalogData.medical;

  return (
    <div className="flex min-h-dvh flex-col bg-[#edf2f7]">
      <Header />

      <main className="flex h-[calc(100dvh-4rem)] flex-1 min-h-0 overflow-hidden lg:h-[calc(100dvh-5rem)]">
        <section className="mx-auto h-full w-full max-w-[1680px] p-3 sm:p-5 lg:p-8">
          <FlipbookViewer
            title={catalog.title}
            subtitle="A polished, responsive flipbook experience built for browsing the Medova product catalog."
            pages={catalog.pages}
            width={catalog.width}
            height={catalog.height}
            className="h-full rounded-[34px] border border-primary/10 shadow-[0_35px_90px_rgba(15,23,42,0.14)]"
          />
        </section>
      </main>
    </div>
  );
}
