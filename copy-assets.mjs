/* eslint-disable no-console */

import fs from "node:fs/promises";
import path from "node:path";

const assets = Object.freeze([
  "node_modules/@artichokeruby/logo/favicons/favicon-32x32.png",
  "node_modules/@artichokeruby/logo/favicons/favicon-128x128.png",
  "node_modules/@artichokeruby/logo/favicons/favicon-192x192.png",
  "node_modules/@artichokeruby/logo/favicons/favicon-196x196.png",
  "node_modules/@artichokeruby/logo/favicons/favicon-152x152.png",
  "node_modules/@artichokeruby/logo/favicons/favicon-180x180.png",
  "node_modules/@artichokeruby/logo/favicons/safari-pinned-tab.svg",
  "node_modules/@artichokeruby/logo/favicons/mstile-150x150.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-logo.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-logo.svg",
  "node_modules/@artichokeruby/logo/optimized/artichoke-logo-inverted.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-logo-inverted.svg",
  "node_modules/@artichokeruby/logo/optimized/artichoke-playground-safari-revision-4938-dark-mode.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-playground-safari-revision-4938-light-mode.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-playground-social-safari-revision-4938-dark-mode.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-playground-social-safari-revision-4938-light-mode.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-social-logo.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-social-logo.svg",
  "node_modules/@artichokeruby/logo/optimized/artichoke-social-profile.png",
  "node_modules/@artichokeruby/logo/optimized/artichoke-social-profile.svg",
  "node_modules/@artichokeruby/logo/optimized/mark-black.svg",
  "node_modules/@artichokeruby/logo/optimized/mark-color.svg",
  "node_modules/@artichokeruby/logo/optimized/mark-green.svg",
  "node_modules/@artichokeruby/logo/optimized/mark-white.svg",
  "node_modules/@artichokeruby/logo/optimized/nav-black.svg",
  "node_modules/@artichokeruby/logo/optimized/nav-color.svg",
  "node_modules/@artichokeruby/logo/optimized/nav-green.svg",
  "node_modules/@artichokeruby/logo/optimized/nav-white.svg",
  "node_modules/@artichokeruby/logo/optimized/playground.png",
  "node_modules/@artichokeruby/logo/optimized/playground-social-logo.png",
  "node_modules/@artichokeruby/logo/optimized/wordmark-black.svg",
  "node_modules/@artichokeruby/logo/optimized/wordmark-color.svg",
  "node_modules/@artichokeruby/logo/optimized/wordmark-green.svg",
  "node_modules/@artichokeruby/logo/optimized/wordmark-white.svg",
  "node_modules/@artichokeruby/logo/social/twitter-logo-black.svg",
  "node_modules/@artichokeruby/logo/social/github-logo.svg",
  "node_modules/@artichokeruby/logo/social/discord-logo.svg",
]);

const build = async () => {
  await fs.mkdir("public/social", { recursive: true });

  await Promise.all(
    assets.map(async (asset) => {
      const file = path.basename(asset);
      if (asset.includes("/social/")) {
        await fs.copyFile(asset, path.join("public", "social", file));
      } else {
        await fs.copyFile(asset, path.join("public", file));
      }
    }),
  );
};

(async function main() {
  try {
    await build();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
