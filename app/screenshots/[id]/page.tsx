import { notFound } from "next/navigation";
import { slides } from "@/app/data/slides";
import { getThemeStyles } from "@/app/data/themes";
import Slide from "@/app/components/ui/ThreadSlideshow/Slide";
import { CornerAccents, GlowOrbs, ScanlineOverlay } from "@/app/components/ui/ThreadSlideshow/Decorations";
import BrandBadge from "@/app/components/ui/ThreadSlideshow/BrandBadge";
import SlideCounter from "@/app/components/ui/ThreadSlideshow/SlideCounter";

interface ScreenshotPageProps {
  params: Promise<{ id: string }>;
}

export default async function ScreenshotPage({ params }: ScreenshotPageProps) {
  const { id } = await params;
  const slideIndex = parseInt(id, 10) - 1; // 1-based to 0-based

  if (isNaN(slideIndex) || slideIndex < 0 || slideIndex >= slides.length) {
    notFound();
  }

  const slide = slides[slideIndex];
  const themeStyles = getThemeStyles(slide.theme);
  const isFirstSlide = slideIndex === 0;

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-[#0a0510]"
      style={themeStyles}
    >
      {/* Scanline overlay */}
      <ScanlineOverlay />

      {/* Corner accents */}
      <CornerAccents />

      {/* Glow orbs */}
      <GlowOrbs />

      {/* Single slide - always active for screenshot */}
      <Slide slide={slide} isActive={true} priority={true} />

      {/* Slide counter at top (hide on header slide) */}
      <SlideCounter
        current={slideIndex + 1}
        total={slides.length}
        visible={!isFirstSlide}
      />

      {/* Brand badge at bottom (hide on header slide) */}
      <BrandBadge visible={!isFirstSlide} />
    </div>
  );
}

export function generateStaticParams() {
  return slides.map((_, index) => ({
    id: String(index + 1),
  }));
}
