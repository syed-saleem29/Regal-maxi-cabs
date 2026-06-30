import sharp from 'sharp'
import { readdirSync, unlinkSync } from 'fs'
import { join, extname, basename } from 'path'
import { setTimeout as sleep } from 'timers/promises'

const dir = 'src/assets/services'
const exts = ['.png', '.jpg', '.jpeg']

const files = readdirSync(dir).filter(f => exts.includes(extname(f).toLowerCase()))

for (const file of files) {
  const input = join(dir, file)
  const output = join(dir, basename(file, extname(file)) + '.webp')
  await sharp(input).webp({ quality: 85 }).toFile(output)
  const inSize = (await import('fs')).statSync(input).size
  const outSize = (await import('fs')).statSync(output).size
  console.log(`${file} → ${basename(output)}  ${(inSize/1024).toFixed(0)}KB → ${(outSize/1024).toFixed(0)}KB  (saved ${Math.round((1-outSize/inSize)*100)}%)`)
  await sleep(150)
  unlinkSync(input)
}

console.log('\nDone! All service images converted to WebP.')
