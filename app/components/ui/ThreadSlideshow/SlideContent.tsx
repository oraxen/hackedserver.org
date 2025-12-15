import type { SlideData } from "@/app/data/slides";

interface SlideContentProps {
  slide: SlideData;
  isActive: boolean;
}

export default function SlideContent({ slide, isActive }: SlideContentProps) {
  const { chapter, title, bullets, contentPosition = "right" } = slide;

  // No content panel for title slides
  if (!chapter && !title && !bullets) {
    return null;
  }

  const isLeft = contentPosition === "left";

  return (
    <div
      className={`
        absolute top-0 h-full w-[40%] min-w-[450px]
        flex flex-col justify-center
        px-10 py-12
        backdrop-blur-[16px]
        ${isLeft ? "left-0 border-r-[3px]" : "right-0 border-l-[3px]"}
      `}
      style={{
        background: isLeft
          ? "linear-gradient(225deg, var(--slide-panel-a) 0%, var(--slide-panel-b) 50%, var(--slide-panel-c) 100%)"
          : "linear-gradient(135deg, var(--slide-panel-a) 0%, var(--slide-panel-b) 50%, var(--slide-panel-c) 100%)",
        borderColor: "var(--slide-accent-border)",
        boxShadow: isLeft
          ? "20px 0 60px var(--slide-panel-shadow), inset -1px 0 0 rgba(255, 255, 255, 0.05)"
          : "-20px 0 60px var(--slide-panel-shadow), inset 1px 0 0 rgba(255, 255, 255, 0.05)",
        color: "var(--slide-text-color)",
      }}
    >
      {/* Decorative line above */}
      <div
        className="absolute left-8 right-8 top-8 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--slide-accent-line), transparent)",
        }}
      />

      {/* Decorative line below */}
      <div
        className="absolute bottom-8 left-8 right-8 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--slide-accent-line), transparent)",
        }}
      />

      {/* Chapter number */}
      {chapter && (
        <div
          className="mb-3 flex items-center gap-3 font-[family-name:var(--font-press-start)] text-[0.6rem] uppercase tracking-[4px]"
          style={{
            color: "rgba(0, 230, 255, 0.5)",
          }}
        >
          <span
            className="h-0.5 w-5"
            style={{ background: "rgba(0, 230, 255, 0.5)" }}
          />
          {chapter}
        </div>
      )}

      {/* Title */}
      {title && (
        <h2
          className={`mb-8 font-[family-name:var(--font-press-start)] text-[1.15rem] leading-[1.9] tracking-[1px] ${isActive ? "animate-slide-title" : "opacity-0"}`}
          style={{
            color: "#00e6ff",
            textShadow: "0 0 30px rgba(0, 230, 255, 0.5), 0 0 60px rgba(0, 230, 255, 0.2)",
          }}
        >
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
      )}

      {/* Bullet points */}
      {bullets && bullets.length > 0 && (
        <ul className="list-none space-y-6 font-[family-name:var(--font-outfit)]">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className={`relative pl-7 text-[1.1rem] font-normal leading-[1.75] ${isActive ? "animate-slide-bullet" : "opacity-0"}`}
              style={{
                color: "var(--slide-text-color)",
                animationDelay: `${0.3 + index * 0.15}s`,
              }}
            >
              {/* Diamond bullet */}
              <span
                className="absolute left-0 top-[0.65rem] h-2.5 w-2.5"
                style={{
                  background: "#00e6ff",
                  boxShadow: "0 0 10px rgba(0, 230, 255, 0.8), 0 0 20px rgba(0, 230, 255, 0.4)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
              <span
                dangerouslySetInnerHTML={{ __html: bullet }}
                className="[&_code]:rounded [&_code]:border [&_code]:border-cyan-500/20 [&_code]:bg-cyan-500/10 [&_code]:px-2 [&_code]:py-0.5 [&_code]:font-[family-name:var(--font-press-start)] [&_code]:text-[0.55rem] [&_code]:text-cyan-300 [&_strong]:font-semibold [&_strong]:text-cyan-400"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
