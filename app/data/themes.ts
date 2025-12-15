import type { SlideTheme } from "./slides";

export interface ThemeColors {
  accent: string;
  accentGlow: string;
  accentSoft: string;
  accentBorder: string;
  accentLine: string;
  accentGlowOuter: string;
  panelShadow: string;
  textColor: string;
  panelA: string;
  panelB: string;
  panelC: string;
  bgBrightness: number;
  vignetteStrength: number;
}

export const themes: Record<SlideTheme, ThemeColors> = {
  cyan: {
    accent: "#00e6ff",
    accentGlow: "rgba(0, 230, 255, 0.6)",
    accentSoft: "rgba(0, 230, 255, 0.15)",
    accentBorder: "rgba(0, 230, 255, 0.5)",
    accentLine: "rgba(0, 230, 255, 0.3)",
    accentGlowOuter: "rgba(0, 230, 255, 0.4)",
    panelShadow: "rgba(0, 180, 255, 0.15)",
    textColor: "rgba(255, 255, 255, 0.94)",
    panelA: "rgba(8, 4, 24, 0.94)",
    panelB: "rgba(15, 8, 35, 0.9)",
    panelC: "rgba(10, 5, 30, 0.88)",
    bgBrightness: 0.85,
    vignetteStrength: 0.28,
  },
};

/** Convert theme to CSS custom properties for inline styles */
export function getThemeStyles(theme: SlideTheme): React.CSSProperties {
  const t = themes[theme];
  return {
    "--slide-accent": t.accent,
    "--slide-accent-glow": t.accentGlow,
    "--slide-accent-soft": t.accentSoft,
    "--slide-accent-border": t.accentBorder,
    "--slide-accent-line": t.accentLine,
    "--slide-accent-glow-outer": t.accentGlowOuter,
    "--slide-panel-shadow": t.panelShadow,
    "--slide-text-color": t.textColor,
    "--slide-panel-a": t.panelA,
    "--slide-panel-b": t.panelB,
    "--slide-panel-c": t.panelC,
    "--slide-bg-brightness": t.bgBrightness,
    "--slide-vignette-strength": t.vignetteStrength,
  } as React.CSSProperties;
}
