import { cn } from '@/lib/utils'
import useIntersectionObserver from '@/useIntersectionObserver'
import { useEffect, useRef } from 'react'
import { ClassNameValue } from 'tailwind-merge'

interface FullPageSectionProps {
  id: string
  className?: ClassNameValue
  children?: React.ReactNode
  setActiveSection?: (section: string) => void
}

export default function FullPageSection({ id, children, className, setActiveSection }: FullPageSectionProps) {

  const sectionRef = useRef(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 })

  useEffect(() => {
    if (isVisible && setActiveSection) {
      setActiveSection(`#${id}`)
    }
  }, [isVisible])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn('flex flex-col items-start justify-start w-full h-svh [scroll-snap-align:_start]', className)}
    >
      {children}
    </section>
  )
}