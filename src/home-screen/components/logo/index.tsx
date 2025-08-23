import { useMemo } from 'react'
import { getCloudflareImageUrl } from '../home-screen-image'

interface LogoProps {
  className?: string
}

function Logo({ className }: LogoProps) {
  const path = '/assets/logo.png'
  const { srcSet, src } = useMemo(
    () => ({
      srcSet: getSrcSet(path),
      src: getCloudflareImageUrl(path, 400),
    }),
    [],
  )
  return <img src={src} alt="Logo" srcSet={srcSet} width={1024} height={1536} sizes="50vw" className={className} />
}

const widths = [400, 800, 1200, 1600, 2400, 3200, 3600]
function getSrcSet(path: string): string {
  return widths.map((width) => `${getCloudflareImageUrl(path, width)} ${width}w`).join(', ')
}

export default Logo
