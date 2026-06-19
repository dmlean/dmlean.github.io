const fs = require("node:fs");
const path = require("node:path");

function findViteChunkPath() {
  const pnpmDir = path.join(process.cwd(), "node_modules", ".pnpm");
  const viteEntry = fs.readdirSync(pnpmDir).find((entry) => entry.startsWith("vite@"));

  if (!viteEntry) {
    throw new Error("vite package not found inside node_modules/.pnpm");
  }

  return path.join(pnpmDir, viteEntry, "node_modules", "vite", "dist", "node", "chunks", "dep-D4NMHUTW.js");
}

const chunkPath = findViteChunkPath();
const source = fs.readFileSync(chunkPath, "utf8");
const startToken = 'exec("net use", (error, stdout) => {';
const replacement = `try {
  exec("net use", (error, stdout) => {
    if (error) return;
    const lines = stdout.split("\\n");
    for (const line of lines) {
      const m = parseNetUseRE.exec(line);
      if (m) windowsNetworkMap.set(m[2], m[1]);
    }
    if (windowsNetworkMap.size === 0) {
      safeRealpathSync = fs__default.realpathSync.native;
    } else {
      safeRealpathSync = windowsMappedRealpathSync;
    }
  });
} catch {
  safeRealpathSync = fs__default.realpathSync.native;
}`;

if (source.includes(replacement)) {
  console.log("vite windows spawn patch already applied");
  process.exit(0);
}

const start = source.indexOf(startToken);
if (start === -1) {
  console.warn("vite windows spawn patch target not found");
  process.exit(0);
}

const end = source.indexOf('});', start);
if (end === -1) {
  console.warn("vite windows spawn patch end token not found");
  process.exit(0);
}

const patched = source.slice(0, start) + replacement + source.slice(end + 3);
fs.writeFileSync(chunkPath, patched, "utf8");
console.log("vite windows spawn patch applied");
