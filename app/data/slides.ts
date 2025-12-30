export type SlideTheme = "cyan";

export type ContentPosition = "left" | "right";

export interface SlideData {
  id: number;
  theme: SlideTheme;
  background: string;
  /** Chapter label (e.g., "Chapter 01") */
  chapter?: string;
  /** Title with \n for line breaks */
  title?: string;
  /** Bullet points - supports HTML for <strong>, <code> */
  bullets?: string[];
  /** Position of the content panel */
  contentPosition?: ContentPosition;
}

export const slides: SlideData[] = [
  {
    id: 1,
    theme: "cyan",
    background: "/thread/header.jpg",
    // Title slide - no content panel
  },
  {
    id: 2,
    theme: "cyan",
    background: "/thread/background1.jpg",
    chapter: "Chapter 01",
    title: "Instant Client\nDetection",
    bullets: [
      "HackedServer <strong>fingerprints each player's client</strong> on join: Fabric, Forge, Lunar, and dozens of hacked clients.",
      "<strong>Mod scanning:</strong> reveal your players' modlists and trigger custom actions per mod.",
    ],
    contentPosition: "right",
  },
  {
    id: 3,
    theme: "cyan",
    background: "/thread/background2.jpg",
    chapter: "Chapter 02",
    title: "Deep Lunar\nIntegration",
    bullets: [
      "<strong>Full mod visibility:</strong> see every mod your Lunar players have installed.",
      "<strong>Granular control:</strong> block Lunar + Fabric combos but allow vanilla Lunar, or trigger actions per mod (<code>sodium</code>, <code>iris</code>…).",
      "<strong>Zero setup:</strong> works out of the box, no extra plugins needed.",
    ],
    contentPosition: "left",
  },
  {
    id: 4,
    theme: "cyan",
    background: "/thread/background3.jpg",
    chapter: "Chapter 03",
    title: "Staff Tools That\nActually Save Time",
    bullets: [
      "<strong>Instant alerts</strong> plus optional auto-bans and configurable commands when a risky client joins.",
      "<strong>In-game and console checks</strong> via simple commands for quick reviews.",
      "<strong>Inventory-style GUI</strong> so staff can visualize detections and toggles in one screen.",
    ],
    contentPosition: "right",
  },
  {
    id: 5,
    theme: "cyan",
    background: "/thread/background4.jpg",
    chapter: "Chapter 04",
    title: "Built For Serious\nNetworks",
    bullets: [
      "<strong>Ultra-lightweight:</strong> minimal CPU/TPS impact and works great alongside your existing anti-cheat.",
      "<strong>One plugin</strong> for Spigot/Paper, BungeeCord and Velocity – consistent detections across your network.",
      "If fair play and reputation matter, HackedServer is the <strong>fastest, lowest-effort way</strong> to spot unauthorized clients early.",
    ],
    contentPosition: "left",
  },
];
