import { useMemo } from 'react'

interface HomeScreenImageProps {
  path: string
  alt: string
  className?: string
}

// points to cloudflare, needs push to be accessible
function HomeScreenImage({ path, alt, className }: HomeScreenImageProps) {
  const { srcSet, src } = useMemo(
    () => ({
      srcSet: getSrcSet(path),
      src: getCloudflareImageUrl(path, 400),
    }),
    [path],
  )
  return <img src={src} alt={alt} srcSet={srcSet} width={3615} height={2259} sizes="100vw" className={className} />
}

function getCloudflareImageUrl(path: string, width: number): string {
  const searchParams = new URLSearchParams({ width: width.toString(), quality: '80' })
  return `https://pooya.info/cdn-cgi/image/${searchParams.toString()}/${path}`
}
const widths = [400, 800, 1200, 1600, 2400, 3200, 3600]
function getSrcSet(path: string): string {
  return widths.map((width) => `${getCloudflareImageUrl(path, width)} ${width}w`).join(', ')
}

export default HomeScreenImage
