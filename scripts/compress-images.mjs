import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "fs";
import { join } from "path";

const dirs = ["public/images/board", "public/images/management"];

for (const dir of dirs) {
  let files;
  try { files = readdirSync(dir); } catch { continue; }
  for (const file of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
    const src = join(dir, file);
    const before = statSync(src).size;
    const buf = await sharp(src).resize({ width: 600, withoutEnlargement: true }).jpeg({ quality: 75 }).toBuffer();
    writeFileSync(src, buf);
    const after = statSync(src).size;
    console.log(file + ": " + Math.round(before/1024) + "KB -> " + Math.round(after/1024) + "KB");
  }
}
console.log("Done.");
