import { readdir, rename, unlink } from 'fs/promises'
import { join, extname } from 'path'
import sharp from 'sharp'

const GALLERY_DIR = 'E:\\Regal Maxi Cabs\\Regal Maxi Cabs Website\\src\\assets\\gallery'

const SKIP = /^gallery-\d{3}|^\.gitkeep/

let counter = 117

const files = (await readdir(GALLERY_DIR))
  .filter(f => !SKIP.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

console.log(`Found ${files.length} files to process, starting at gallery-${counter}`)

for (const file of files) {
  const src = join(GALLERY_DIR, file)
  const ext = extname(file).toLowerCase()
  const outName = `gallery-${String(counter).padStart(3, '0')}.webp`
  const dest = join(GALLERY_DIR, outName)

  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    await sharp(src).webp({ quality: 85 }).toFile(dest)
    await new Promise(r => setTimeout(r, 150))
    try { await unlink(src) } catch { console.warn(`  (could not delete ${file}, remove manually)`) }
    console.log(`converted  ${file}  →  ${outName}`)
  } else if (ext === '.webp') {
    await rename(src, dest)
    console.log(`renamed    ${file}  →  ${outName}`)
  } else {
    console.log(`skipped    ${file}`)
    continue
  }

  counter++
}

console.log(`\nDone. ${counter - 117} files processed.`)
