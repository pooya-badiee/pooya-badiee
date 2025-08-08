import { useEffect, useRef, useState } from 'react'

function useAreImagesLoaded() {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false)
  const rootElementRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const abortController = new AbortController()
    const rootElement = rootElementRef.current!
    const imageElements = rootElement.querySelectorAll('img')
    const totalImages = imageElements.length
    let totalLoaded = 0
    for (const imageElement of imageElements) {
      if (imageElement.complete) {
        totalLoaded++
        if (totalLoaded === totalImages) {
          setAreImagesLoaded(true)
        }
        continue
      }
      const handleLoad = () => {
        totalLoaded++
        if (totalLoaded === totalImages) {
          setAreImagesLoaded(true)
        }
      }
      imageElement.addEventListener('load', handleLoad)
      abortController.signal.addEventListener('abort', () => {
        imageElement.removeEventListener('load', handleLoad)
      })
    }
    return function cleanup() {
      abortController.abort()
    }
  }, [])

  return { areImagesLoaded, rootElementRef }
}

export default useAreImagesLoaded
