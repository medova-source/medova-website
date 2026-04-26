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
  className?: string;
}

export function FlipbookViewer({
  title,
  subtitle,
  pages,
  className,
}: FlipbookViewerProps) {
  const bookRef = useRef<FlipbookHandle | null>(null);
  const flipSoundRef = useRef<HTMLAudioElement | null>(null);
  const previousPageRef = useRef(0);
  const suppressNextSoundRef = useRef(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadedPages, setLoadedPages] = useState<Record<number, true>>({});
  const [failedPages, setFailedPages] = useState<Record<number, true>>({});

  useEffect(() => {
    const audio = new Audio(flipPageSound);
    audio.preload = "auto";
    audio.volume = 1;
    flipSoundRef.current = audio;

    return () => {
      if (flipSoundRef.current) {
        flipSoundRef.current.pause();
        flipSoundRef.current = null;
      }
    };
  }, [pages]);

  useEffect(() => {
    suppressNextSoundRef.current = true;
    previousPageRef.current = 0;
    setCurrentPage(0);
    setLoadedPages({});
    setFailedPages({});
  }, [pages]);

  useEffect(() => {
    if (suppressNextSoundRef.current) {
      suppressNextSoundRef.current = false;
      return;
    }

    if (currentPage === previousPageRef.current) {
      return;
    }

    previousPageRef.current = currentPage;
    const audio = flipSoundRef.current;
    if (!audio) return;

    try {
      audio.currentTime = 0;
      const playback = audio.play();

      if (playback && typeof playback.catch === "function") {
        playback.catch(() => {
          // Ignore autoplay restrictions or interruption errors.
        });
      }
    } catch {
      // Ignore playback failures so the flipbook still works normally.
    }
  }, [currentPage]);

  const totalPages = pages.length;
  const activePage = totalPages ? Math.min(currentPage + 1, totalPages) : 0;
  const resolvedPages =
    Object.keys(loadedPages).length + Object.keys(failedPages).length;
  const hasFailedPages = Object.keys(failedPages).length > 0;
  const isBooting = totalPages > 0 && resolvedPages === 0;
  const canGoPrev = currentPage > 0;
  const canGoNext = totalPages > 0 && currentPage < totalPages - 1;

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
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1))]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" /> */}

      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="relative flex min-h-0 flex-1 items-center justify-center">
          <div className="pointer-events-none absolute inset-x-8 bottom-2 h-20 " />

          <div
            className="relative w-full max-w-[960px] rounded-[12px]"
            style={{ height: "min(680px, calc(100dvh - 125px))" }}
          >
            <div className="relative h-full min-h-0 overflow-visible rounded-[12px]">
              <div className="relative h-full min-h-0 overflow-hidden rounded-[12px]">
                <ReactFlipBook
                  ref={(instance) => {
                    bookRef.current = instance as FlipbookHandle | null;
                  }}
                  className="flipbook-shell h-full w-full"
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                  width={610}
                  height={860}
                  size="stretch"
                  startPage={0}
                  minWidth={300}
                  maxWidth={760}
                  minHeight={420}
                  maxHeight={1000}
                  // autoFlipDelay={3000} // Flip every 3 seconds
                  // autoFlipDirection="next"

                  flippingTime={850}
                  maxShadowOpacity={0.48}
                  showCover={true}
                  drawShadow={false}
                  usePortrait={true}
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
                  onPageChange={(page) => setCurrentPage(page)}
                  renderPage={(_, index) => {
                    const page = pages[index];

                    if (!page) {
                      return <div className="h-full w-full" />;
                    }

                    const failed = failedPages[page.page];

                    return (
                      <div className="h-full w-full">
                        <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                          {failed ? (
                            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,#f8fafc,#e2e8f0)] px-8 text-center text-sm text-slate-500">
                              This page could not be loaded. Please try a direct
                              public image URL.
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
                      <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-primary" />
                      <p className="mt-4 text-base font-semibold text-slate-900">
                        Preparing your flipbook
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Loading the first pages and paper textures.
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={handlePrev}
                disabled={!canGoPrev}
                className="absolute bottom-1 left-4 z-[9999] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.16)] backdrop-blur-md transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 sm:bottom-4 sm:left-[-60px] sm:h-14 sm:w-14"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext}
                className="absolute bottom-1 right-4 z-[9999] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.16)] backdrop-blur-md transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 sm:bottom-4 sm:right-[-60px] sm:h-14 sm:w-14"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              {/* 
              <div className="pointer-events-none absolute inset-x-4 bottom-4 z-20 sm:inset-x-6 sm:bottom-6">
                <div className="flex flex-col gap-3 rounded-[24px] border border-white/70 bg-white/78 px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-5">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800">
                      {totalPages
                        ? `Page ${activePage} of ${totalPages}`
                        : "Loading catalog"}
                    </p>
                    <p className="truncate text-sm text-slate-500">
                      {hasFailedPages
                        ? "Some pages failed to load, but the book remains fully interactive."
                        : "Swipe, tap arrows, or use the keyboard to browse."}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-200 sm:w-52">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#18189a,#0f766e)] transition-[width] duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="pointer-events-auto flex items-center gap-2 sm:hidden">
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
                        aria-label="Previous page"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canGoNext}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
                        aria-label="Next page"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="hidden items-center gap-2 rounded-full bg-slate-900/5 px-3 py-2 text-xs font-medium text-slate-600 sm:inline-flex">
                      <MoveHorizontal className="h-4 w-4 text-accent" />
                      Swipe or use arrows
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
