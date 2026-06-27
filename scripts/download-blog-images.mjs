import https from 'https'
import fs from 'fs'
import path from 'path'

const OUT = 'E:\\Regal Maxi Cabs\\Regal Maxi Cabs Website\\src\\assets\\blog'

const images = [
  { file: 'blog-01-sydney-tours.jpeg',      url: 'https://www.fastmaxi.com.au/wp-content/uploads/2026/06/sydney-tour.jpg-1024x512.jpeg' },
  { file: 'blog-02-new-year.webp',          url: 'https://www.fastmaxi.com.au/wp-content/uploads/2025/12/HAPPY-NEW-YEAR-FAST-MAXI-.webp' },
  { file: 'blog-03-christmas.png',          url: 'https://www.fastmaxi.com.au/wp-content/uploads/2025/12/fast-maxi-feature-image.png' },
  { file: 'blog-04-autumn.png',             url: 'https://www.fastmaxi.com.au/wp-content/uploads/2025/05/Autumn-Season-Sydney.png' },
  { file: 'blog-05-public-holiday.png',     url: 'https://www.fastmaxi.com.au/wp-content/uploads/2025/04/Blue-and-White-Modern-Travel-Agency-Outdoor-Banner.png' },
  { file: 'blog-06-places-sydney.png',      url: 'https://www.fastmaxi.com.au/wp-content/uploads/2025/04/Untitled-design-1.png' },
  { file: 'blog-07-best-airport-taxi.jpeg', url: 'https://www.fastmaxi.com.au/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-12.01.54-PM.jpeg' },
  { file: 'blog-08-airport-darling.jpeg',   url: 'https://www.fastmaxi.com.au/wp-content/uploads/2024/03/sydney-airport-to-darling-harbour-1.jpeg' },
  { file: 'blog-09-corporate-taxi.jpeg',    url: 'https://www.fastmaxi.com.au/wp-content/uploads/2024/03/corporate-taxi-1.jpeg' },
  { file: 'blog-10-family-cab.jpg',         url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/12/fast-maxi-blog.jpg' },
  { file: 'blog-11-cheap-airport.jpeg',     url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/11/fast-maxi-taxi-sydney-1.jpeg' },
  { file: 'blog-12-wheelchair.jpeg',        url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/09/fast-maxi-taxi-service-sydney-near-me.jpeg' },
  { file: 'blog-13-fifa.jpeg',              url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-11-at-3.31.35-PM.jpeg' },
  { file: 'blog-14-nightout.jpg',           url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/07/Have-a-Great-Night-Out-in-Sydney-Blog-01.jpg' },
  { file: 'blog-15-airport-transfer.jpeg',  url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-15-at-1.18.59-PM.jpeg' },
  { file: 'blog-16-baby-seat.jpeg',         url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/06/Baby-Seats.jpeg' },
  { file: 'blog-17-choose-maxi.jpeg',       url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/05/choosing-the-right-maxi-service-for-your-next-outing-or-event.jpeg' },
  { file: 'blog-18-group-transport.jpeg',   url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-07-at-11.23.07-AM.jpeg' },
  { file: 'blog-19-why-choose.jpeg',        url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-07-at-16.28.48.jpeg' },
  { file: 'blog-20-affordable.jpeg',        url: 'https://www.fastmaxi.com.au/wp-content/uploads/2023/01/Affordable-And-Reliable-Maxi-Cab-Taxi-Cost-in-Sydney.jpeg' },
  { file: 'blog-21-christmas-places.png',   url: 'https://www.fastmaxi.com.au/wp-content/uploads/2022/12/Top-10-Places-to-trvel-at-Christmas-in-sydney-1.png' },
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(dest)
        download(res.headers.location, dest).then(resolve).catch(reject)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        reject(new Error(`HTTP ${res.statusCode} for ${url}`))
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
      file.on('error', reject)
    }).on('error', reject)
  })
}

for (const { file, url } of images) {
  const dest = path.join(OUT, file)
  try {
    await download(url, dest)
    console.log(`✓ ${file}`)
  } catch (e) {
    console.error(`✗ ${file} — ${e.message}`)
  }
}

console.log('\nDone.')
