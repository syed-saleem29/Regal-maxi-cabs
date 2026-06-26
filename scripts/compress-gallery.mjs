import sharp from 'sharp'
import { readdir, stat, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const GALLERY_DIR = new URL('../src/assets/gallery', import.meta.url).pathname
  .replace(/^\/([A-Z]:)/, '$1')
  .replace(/%20/g, ' ')
const MAX_WIDTH = 1920
const QUALITY   = 78
const THRESHOLD = 400 * 1024  // only recompress files > 400 KB

const files = (await readdir(GALLERY_DIR)).filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f))

let saved = 0
for (const file of files) {
  const filepath = join(GALLERY_DIR, file)
  const { size } = await stat(filepath)
  if (size <= THRESHOLD) continue

  const before = (size / 1024).toFixed(0)

  // Read into memory first so sharp releases the file handle before we write
  const input  = await readFile(filepath)
  const buffer = await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer()

  await writeFile(filepath, buffer)

  const after = (buffer.length / 1024).toFixed(0)
  const reduction = (((size - buffer.length) / size) * 100).toFixed(0)
  console.log(`${file}: ${before} KB → ${after} KB  (-${reduction}%)`)
  saved += size - buffer.length
}

console.log(`\nTotal saved: ${(saved / 1024 / 1024).toFixed(2)} MB`)
