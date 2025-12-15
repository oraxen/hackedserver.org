interface SlideCounterProps {
  current: number;
  total: number;
  visible: boolean;
}

export default function SlideCounter({ current, total, visible }: SlideCounterProps) {
  return (
    <div
      className="absolute left-1/2 top-6 z-[100] flex -translate-x-1/2 items-center gap-2 rounded border px-5 py-2 backdrop-blur-[10px] transition-opacity duration-300"
      style={{
        background: "rgba(8, 4, 24, 0.7)",
        borderColor: "rgba(0, 230, 255, 0.2)",
        opacity: visible ? 1 : 0,
      }}
    >
      <span
        className="font-[family-name:var(--font-press-start)] text-[0.6rem]"
        style={{
          color: "#00e6ff",
          textShadow: "0 0 10px rgba(0, 230, 255, 0.5)",
        }}
      >
        {current}
      </span>
      <span className="font-[family-name:var(--font-press-start)] text-[0.6rem] text-cyan-500/60">
        /
      </span>
      <span className="font-[family-name:var(--font-press-start)] text-[0.6rem] text-cyan-500/60">
        {total}
      </span>
    </div>
  );
}
