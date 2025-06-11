import { useEffect, useState } from 'react'

/**
 * Hook to handle hydration issues by ensuring consistent rendering
 * between server and client
 */
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return isHydrated
}
