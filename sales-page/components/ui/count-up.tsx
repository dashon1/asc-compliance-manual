'use client'

import { useEffect, useState } from 'react'

interface CountUpProps {
  end: number
  trigger: boolean
  duration?: number
}

export default function CountUp({ end, trigger, duration = 1500 }: CountUpProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      const current = Math.round(eased * end)
      setValue(current)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [trigger, end, duration])

  return <>{value}</>
}
