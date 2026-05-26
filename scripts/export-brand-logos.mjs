import * as si from 'simple-icons'
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const outDir = join(process.cwd(), 'public', 'brands')
mkdirSync(outDir, { recursive: true })

const exportIcons = ['samsung', 'lg', 'panasonic', 'generalelectric']

for (const slug of exportIcons) {
  const icon = Object.values(si).find((i) => i?.slug === slug)
  if (!icon) continue
  const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title><path fill="#${icon.hex}" d="${icon.path}"/></svg>`
  writeFileSync(join(outDir, `${slug}.svg`), svg)
  console.log('exported', slug)
}
