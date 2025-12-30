import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const OUTPUT_WIDTH = 2120;
const OUTPUT_HEIGHT = 1200;
const ZOOM_FACTOR = 2.0; // Match Mac Retina display scaling
// Viewport is smaller; deviceScaleFactor scales it back up to target output size
const VIEWPORT_WIDTH = Math.round(OUTPUT_WIDTH / ZOOM_FACTOR);
const VIEWPORT_HEIGHT = Math.round(OUTPUT_HEIGHT / ZOOM_FACTOR);
const SLIDE_COUNT = 5;
const OUTPUT_DIR = path.join(process.cwd(), "public", "splash");
const THREAD_HTML = path.join(process.cwd(), "public", "thread", "index.html");

async function generateSplashScreenshots() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Verify thread HTML exists
  if (!fs.existsSync(THREAD_HTML)) {
    throw new Error(`Thread HTML not found at ${THREAD_HTML}`);
  }

  console.log(`Generating ${SLIDE_COUNT} splash screenshots at ${OUTPUT_WIDTH}x${OUTPUT_HEIGHT}...`);
  console.log(`Viewport: ${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT} @ ${ZOOM_FACTOR}x scale`);
  console.log(`Using: ${THREAD_HTML}`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
    deviceScaleFactor: ZOOM_FACTOR,
  });

  const page = await context.newPage();

  for (let slideId = 1; slideId <= SLIDE_COUNT; slideId++) {
    // Use file:// protocol with ?slide= parameter
    const url = `file://${THREAD_HTML}?slide=${slideId}`;
    const pngPath = path.join(OUTPUT_DIR, `${slideId}.png`);
    const webpPath = path.join(OUTPUT_DIR, `${slideId}.webp`);

    console.log(`  [${slideId}/${SLIDE_COUNT}] Capturing slide ${slideId}...`);

    await page.goto(url, { waitUntil: "networkidle" });

    // Wait for animations to complete
    await page.waitForTimeout(1500);

    // Save as PNG first (better quality for conversion)
    await page.screenshot({
      path: pngPath,
      type: "png",
    });

    console.log(`  [${slideId}/${SLIDE_COUNT}] Converting to WebP...`);

    // Convert to WebP using ImageMagick
    try {
      execSync(`magick "${pngPath}" -quality 85 "${webpPath}"`, { stdio: "inherit" });
      fs.unlinkSync(pngPath);
      console.log(`  [${slideId}/${SLIDE_COUNT}] Saved ${webpPath}`);
    } catch {
      // Fallback: keep PNG if ImageMagick not available
      console.log(`  [${slideId}/${SLIDE_COUNT}] ImageMagick not available, keeping PNG`);
      fs.renameSync(pngPath, path.join(OUTPUT_DIR, `${slideId}.png`));
    }
  }

  await browser.close();
  console.log("Done!");
}

generateSplashScreenshots().catch((err) => {
  console.error("Failed to generate screenshots:", err);
  process.exit(1);
});
