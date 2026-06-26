import sharp from 'sharp'
import { readdirSync, unlinkSync } from 'fs'
import { join, extname, basename } from 'path'

const assetsDir = 'src/assets'
const exts = ['.png', '.jpg', '.jpeg']

const files = readdirSync(assetsDir).filter(f => exts.includes(extname(f).toLowerCase()))

for (const file of files) {
  const input = join(assetsDir, file)
  const output = join(assetsDir, basename(file, extname(file)) + '.webp')
  await sharp(input)
    .webp({ quality: 82 })
    .toFile(output)
  const { size: inSize } = (await import('fs')).statSync(input)
  const { size: outSize } = (await import('fs')).statSync(output)
  console.log(`${file} → ${basename(output)}  ${(inSize/1024).toFixed(0)}KB → ${(outSize/1024).toFixed(0)}KB  (saved ${Math.round((1-outSize/inSize)*100)}%)`)
}

console.log('\nDone! Update your imports to use .webp extensions.')
