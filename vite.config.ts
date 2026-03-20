import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import type { Plugin } from 'vite';

/**
 * Resolves `figma:asset/<hash>.png` virtual imports.
 *
 * For deployment, place the logo/image files inside
 *   public/figma-assets/<hash>.png
 * and they will be served as static assets at runtime.
 *
 * Files you need to copy there:
 *   - 5760739f11ba309b122b98a80ba5ce23e7233962.png  (white-bg logo – used in Navbar)
 *   - cdcb18f671b2777a5858506e507d49a77b948545.png   (blue-bg logo  – used in Footer)
 */
function figmaAssetPlugin(): Plugin {
  const PREFIX = 'figma:asset/';
  const RESOLVED_PREFIX = '\0figma-asset:';

  return {
    name: 'figma-asset',
    resolveId(id) {
      if (id.startsWith(PREFIX)) {
        return RESOLVED_PREFIX + id.slice(PREFIX.length);
      }
    },
    load(id) {
      if (id.startsWith(RESOLVED_PREFIX)) {
        const filename = id.slice(RESOLVED_PREFIX.length);
        // Returns the runtime URL; file must live in public/figma-assets/
        return `export default "/figma-assets/${filename}";`;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
