import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
  Sparkles,
} from "lucide-react";
import { ReactFlipBook } from "@vuvandinh203/react-flipbook";
import flipPageSound from "@/assets/book_page.mp3";
import { cn } from "@/lib/utils";
import type { FlipbookPage } from "./catalogPages";

interface PageFlipLike {
  on: (eventName: string, callback: (event: { data?: unknown }) => void) => void;
  off: (eventName: string) => void;
}

interface FlipStateEvent {
  data?: unknown;
  object?: PageFlipLike;
}

interface FlipbookHandle {
  pageFlip?: () => {
    flipNext: (corner?: "top" | "bottom") => void;
    flipPrev: (corner?: "top" | "bottom") => void;
  } | undefined;
  flipNext: () => void;
  flipPrev: () => void;
}

interface FlipbookViewerProps {
  title: string;
  subtitle: string;
  pages: FlipbookPage[];
  width: number;
  height: number;
  className?: string;
}

export function FlipbookViewer({
  title,
  subtitle,
  pages,
  width,
  height,
  className,
}: FlipbookViewerProps) {
  const bookRef = useRef<FlipbookHandle | null>(null);
  const flipSoundRef = useRef<HTMLAudioElement | null>(null);
  const pageFlipStateRef = useRef<PageFlipLike | null>(null);
  const lastSoundAtRef = useRef(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedPages, setLoadedPages] = useState<Record<number, true>>({});
  const [failedPages, setFailedPages] = useState<Record<number, true>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const audio = new Audio(flipPageSound);
    audio.preload = "auto";
    audio.volume = 1;
    flipSoundRef.current = audio;

    return () => {
      pageFlipStateRef.current?.off("changeState");
      pageFlipStateRef.current = null;

      if (flipSoundRef.current) {
        flipSoundRef.current.pause();
        flipSoundRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setCurrentPage(0);
    setLoadedPages({});
    setFailedPages({});
  }, [pages]);

  const totalPages = pages.length;
  const activePage = totalPages ? Math.min(currentPage + 1, totalPages) : 0;
  const resolvedPages =
    Object.keys(loadedPages).length + Object.keys(failedPages).length;
  const hasFailedPages = Object.keys(failedPages).length > 0;
  const isBooting = totalPages > 0 && resolvedPages === 0;
  const canGoPrev = currentPage > 0;
  const canGoNext = totalPages > 0 && currentPage < totalPages - 1;

  const aspectRatio = isMobile ? (width / height) : ((width * 2) / height);
  const isSquare = width === height;
  const containerMaxWidth = isMobile ? "100%" : (isSquare ? "1100px" : "1200px");

  const markLoaded = (pageNumber: number) => {
    setLoadedPages((current) =>
      current[pageNumber] ? current : { ...current, [pageNumber]: true },
    );
  };

  const markFailed = (pageNumber: number) => {
    setFailedPages((current) =>
      current[pageNumber] ? current : { ...current, [pageNumber]: true },
    );
  };

  const playFlipSound = () => {
    const now = Date.now();
    if (now - lastSoundAtRef.current < 120) return;
    lastSoundAtRef.current = now;
    const audio = flipSoundRef.current;
    if (!audio) return;
    try {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch {}
  };

  const handleInit = (event: FlipStateEvent) => {
    const pageFlip = event.object;
    if (!pageFlip || pageFlipStateRef.current === pageFlip) return;
    pageFlipStateRef.current?.off("changeState");
    pageFlipStateRef.current = pageFlip;
    pageFlip.on("changeState", (flipEvent) => {
      if (flipEvent.data === "flipping" || flipEvent.data === "user_fold") {
        playFlipSound();
      }
    });
  };

  const handlePrev = () => {
    const pageFlip = bookRef.current?.pageFlip?.();
    if (pageFlip) {
      pageFlip.flipPrev("bottom");
      return;
    }
    bookRef.current?.flipPrev();
  };

  const handleNext = () => {
    const pageFlip = bookRef.current?.pageFlip?.();
    if (pageFlip) {
      pageFlip.flipNext("bottom");
      return;
    }
    bookRef.current?.flipNext();
  };

  return (
    <section
      className={cn(
        "relative isolate flex h-full w-full overflow-hidden",
        className,
      )}
      aria-label={title}
    >
      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center p-4">
          
          <div
            className="relative w-full rounded-[12px]"
            style={{ 
              maxWidth: containerMaxWidth,
              aspectRatio: `${aspectRatio}`,
              maxHeight: isMobile ? "60dvh" : "calc(100dvh - 220px)",
            }}
          >
            <div className="relative h-full min-h-0 overflow-visible rounded-[12px]">
              <div className="relative h-full min-h-0 overflow-hidden rounded-[12px]">
                <ReactFlipBook
                  key={`${pages[0]?.url}-${isMobile}`}
                  ref={(instance) => {
                    bookRef.current = instance as FlipbookHandle | null;
                  }}
                  className="flipbook-shell h-full w-full"
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                  width={width}
                  height={height}
                  size="stretch"
                  startPage={0}
                  minWidth={isMobile ? 200 : 300}
                  maxWidth={2000}
                  minHeight={isMobile ? 200 : 300}
                  maxHeight={2000}
                  flippingTime={850}
                  maxShadowOpacity={0.4}
                  showCover={true}
                  drawShadow={false}
                  usePortrait={isMobile}
                  autoSize={true}
                  mobileScrollSupport={true}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={32}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  showNavigationButtons={false}
                  showPageNumbers={false}
                  enableKeyboardNav={true}
                  onInit={handleInit}
                  onPageChange={(page) => setCurrentPage(page)}
                  renderPage={(_, index) => {
                    const page = pages[index];
                    if (!page) return <div className="h-full w-full" />;
                    const failed = failedPages[page.page];

                    return (
                      <div className="h-full w-full">
                        <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                          {failed ? (
                            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,#f8fafc,#e2e8f0)] px-8 text-center text-sm text-slate-500">
                              This page could not be loaded.
                            </div>
                          ) : (
                            <>
                              <img
                                src={page.url}
                                alt=""
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center blur-2xl scale-110 opacity-70"
                                draggable={false}
                              />
                              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.55),rgba(248,250,252,0.18),rgba(248,250,252,0.55))]" />
                              <img
                                src={page.url}
                                alt={page.alt}
                                className="relative z-10 block h-full w-full select-none object-contain object-center"
                                draggable={false}
                                loading={page.page <= 2 ? "eager" : "lazy"}
                                fetchPriority={page.page <= 2 ? "high" : "auto"}
                                decoding="async"
                                onLoad={() => markLoaded(page.page)}
                                onError={() => markFailed(page.page)}
                              />
                            </>
                          )}
                          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(270deg,rgba(15,23,42,0.12),transparent)]" />
                        </div>
                      </div>
                    );
                  }}
                >
                  {pages.map((page) => (
                    <div
                      key={page.page}
                      className="h-full w-full"
                      data-density={
                        page.page === 1 || page.page === totalPages
                          ? "hard"
                          : "soft"
                      }
                    />
                  ))}
                </ReactFlipBook>

                {isBooting ? (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/55 backdrop-blur-sm">
                    <div className="w-full max-w-sm rounded-[12px] border border-white/80 bg-white/82 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-primary" />
                      <p className="mt-4 text-sm font-semibold text-slate-900">Preparing...</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Page {activePage} of {totalPages}
              </span>
              <div className="mt-1 h-1 w-24 sm:h-1.5 sm:w-32 overflow-hidden rounded-full bg-slate-200/50">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(activePage / totalPages) * 100}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition hover:bg-white hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
