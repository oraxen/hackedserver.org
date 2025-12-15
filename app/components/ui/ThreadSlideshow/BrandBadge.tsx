interface BrandBadgeProps {
  visible: boolean;
}

export default function BrandBadge({ visible }: BrandBadgeProps) {
  return (
    <div
      className="absolute bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-md border px-5 py-2.5 backdrop-blur-[10px] transition-opacity duration-300"
      style={{
        background: "rgba(8, 4, 24, 0.85)",
        borderColor: "rgba(0, 230, 255, 0.25)",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Diamond */}
      <div
        className="h-3 w-3"
        style={{
          background: "#00e6ff",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          boxShadow: "0 0 10px rgba(0, 230, 255, 0.6)",
        }}
      />
      <span
        className="font-[family-name:var(--font-press-start)] text-[0.55rem] tracking-[2px] text-white/70"
      >
        HACKEDSERVER
      </span>
      {/* Diamond */}
      <div
        className="h-3 w-3"
        style={{
          background: "#00e6ff",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          boxShadow: "0 0 10px rgba(0, 230, 255, 0.6)",
        }}
      />
    </div>
  );
}
