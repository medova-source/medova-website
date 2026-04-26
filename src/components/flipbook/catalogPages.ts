export interface FlipbookPage {
  page: number;
  url: string;
  alt: string;
}

export interface CatalogMetadata {
  id: string;
  title: string;
  width: number;
  height: number;
  pages: FlipbookPage[];
}

function normalizeImageUrl(url: string) {
  try {
    if (url.startsWith('/')) return url; // Local public assets
    
    const parsed = new URL(url);

    if (!parsed.hostname.includes("drive.google.com")) {
      return url;
    }

    const fileId =
      parsed.searchParams.get("id") ??
      parsed.pathname.match(/\/file\/d\/([^/]+)/)?.[1];

    return fileId
      ? `https://drive.google.com/uc?export=view&id=${fileId}`
      : url;
  } catch {
    return url;
  }
}

const medicalPages: FlipbookPage[] = [
  { page: 1, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/f_auto,q_auto/1_bhmeao", alt: "Medova catalog page 1" },
  { page: 2, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/v1777097801/2_nd_rkcnm1.jpg", alt: "Medova catalog page 2" },
  { page: 3, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097958/3rd_page_JPG_jzmx2h.jpg", alt: "Medova catalog page 3" },
  { page: 4, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097945/4th_roeq0f.jpg", alt: "Medova catalog page 4" },
  { page: 5, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097953/5_th_q4hprh.jpg", alt: "Medova catalog page 5" },
  { page: 6, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097948/6th_ozqs94.jpg", alt: "Medova catalog page 6" },
  { page: 7, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097954/7th_a4doo0.jpg", alt: "Medova catalog page 7" },
  { page: 8, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097949/8th_nmxf5o.jpg", alt: "Medova catalog page 8" },
  { page: 9, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097947/9th_cniy4h.jpg", alt: "Medova catalog page 9" },
  { page: 10, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097948/10_g6wp6i.jpg", alt: "Medova catalog page 10" },
  { page: 11, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097952/11_xpzcw7.jpg", alt: "Medova catalog page 11" },
  { page: 12, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097951/12_if5wkm.jpg", alt: "Medova catalog page 12" },
  { page: 13, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097968/13_jfu7ju.jpg", alt: "Medova catalog page 13" },
  { page: 14, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097953/14_pbkgb0.jpg", alt: "Medova catalog page 14" },
  { page: 15, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097954/15_h3kr09.jpg", alt: "Medova catalog page 15" },
  { page: 16, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097955/16_baf7ww.jpg", alt: "Medova catalog page 16" },
  { page: 17, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097956/17_aknwuf.jpg", alt: "Medova catalog page 17" },
  { page: 18, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097959/18_kxsaic.jpg", alt: "Medova catalog page 18" },
  { page: 19, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097957/19_dsq2an.jpg", alt: "Medova catalog page 19" },
  { page: 20, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097968/20_g0rcyq.jpg", alt: "Medova catalog page 20" },
  { page: 21, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097958/21_wuz8eq.jpg", alt: "Medova catalog page 21" },
  { page: 22, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097960/22_jjulvf.jpg", alt: "Medova catalog page 22" },
  { page: 23, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097960/23_rnzw1q.jpg", alt: "Medova catalog page 23" },
  { page: 24, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777097961/24_xb5ofm.jpg", alt: "Medova catalog page 24" },
  { page: 25, url: "https://res.cloudinary.com/dwdb1zj2h/image/upload/q_auto/f_auto/v1777098665/laststs_hdcf1x.jpg", alt: "Medova catalog page 25" },
];

const vitaminsPages: FlipbookPage[] = Array.from({ length: 24 }, (_, i) => ({
  page: i + 1,
  url: `/catalogs/vitamins/page-${i + 1}.jpg`,
  alt: `Vitamins and Supplements catalog page ${i + 1}`,
}));

const pharmaceuticalsPages: FlipbookPage[] = Array.from({ length: 48 }, (_, i) => ({
  page: i + 1,
  url: `/catalogs/pharmaceuticals/page-${i + 1}.jpg`,
  alt: `Pharmaceuticals catalog page ${i + 1}`,
}));

const softwarePages: FlipbookPage[] = Array.from({ length: 24 }, (_, i) => ({
  page: i + 1,
  url: `/catalogs/software/page-${i + 1}.jpg`,
  alt: `Alder Healthcare Software Solution catalog page ${i + 1}`,
}));

export const catalogData: Record<string, CatalogMetadata> = {
  medical: {
    id: "medical",
    title: "Medical Consumables and Disposables",
    width: 610,
    height: 860,
    pages: medicalPages.map(p => ({ ...p, url: normalizeImageUrl(p.url) })),
  },
  vitamins: {
    id: "vitamins",
    title: "Vitamins and Supplements",
    width: 1200,
    height: 1200,
    pages: vitaminsPages.map(p => ({ ...p, url: normalizeImageUrl(p.url) })),
  },
  pharmaceuticals: {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    width: 1200,
    height: 927,
    pages: pharmaceuticalsPages.map(p => ({ ...p, url: normalizeImageUrl(p.url) })),
  },
  software: {
    id: "software",
    title: "Alder Healthcare Software Solutions",
    width: 1200,
    height: 675,
    pages: softwarePages.map(p => ({ ...p, url: normalizeImageUrl(p.url) })),
  },
};

// For backward compatibility
export const catalogPages = catalogData.medical.pages;
