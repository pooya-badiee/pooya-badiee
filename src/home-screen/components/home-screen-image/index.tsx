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

// can be used for utility by other parts of the app
// TODO: move it to utils
export function getCloudflareImageUrl(path: string, width: number): string {
  const params: Record<string, string> = { width: width.toString(), quality: '80', format: 'auto' }
  // looks like this: x=1,z=3
  const paramsString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join(',')
  return `https://pooya.info/cdn-cgi/image/${paramsString}${path}`
}
const widths = [400, 800, 1200, 1600, 2400, 3200, 3600]
function getSrcSet(path: string): string {
  return widths.map((width) => `${getCloudflareImageUrl(path, width)} ${width}w`).join(', ')
}

export default HomeScreenImage
