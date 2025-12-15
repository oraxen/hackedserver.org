/** Corner accent decorations */
export function CornerAccents() {
  return (
    <>
      <div className="corner-accent pointer-events-none absolute left-[15px] top-[15px] z-[60] h-20 w-20">
        <div
          className="absolute left-0 top-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(90deg, #00e6ff, transparent)" }}
        />
        <div
          className="absolute left-0 top-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(180deg, #00e6ff, transparent)" }}
        />
      </div>
      <div className="corner-accent pointer-events-none absolute right-[15px] top-[15px] z-[60] h-20 w-20">
        <div
          className="absolute right-0 top-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(-90deg, #00e6ff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(180deg, #00e6ff, transparent)" }}
        />
      </div>
      <div className="corner-accent pointer-events-none absolute bottom-[15px] left-[15px] z-[60] h-20 w-20">
        <div
          className="absolute bottom-0 left-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(90deg, #00e6ff, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(0deg, #00e6ff, transparent)" }}
        />
      </div>
      <div className="corner-accent pointer-events-none absolute bottom-[15px] right-[15px] z-[60] h-20 w-20">
        <div
          className="absolute bottom-0 right-0 h-[3px] w-[60px]"
          style={{ background: "linear-gradient(-90deg, #00e6ff, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[60px] w-[3px]"
          style={{ background: "linear-gradient(0deg, #00e6ff, transparent)" }}
        />
      </div>
    </>
  );
}

/** Glowing orb decorations */
export function GlowOrbs() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-[100px] right-[30%] z-[5] h-[300px] w-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 255, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] left-[10%] z-[5] h-[200px] w-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(138, 43, 226, 0.06) 0%, transparent 70%)",
        }}
      />
    </>
  );
}

/** Scanline effect overlay for cyberpunk vibe */
export function ScanlineOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200]"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 0, 0, 0.03) 2px,
          rgba(0, 0, 0, 0.03) 4px
        )`,
      }}
    />
  );
}
