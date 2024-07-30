import { cn } from '@/lib/utils'
import { ClassNameValue } from 'tailwind-merge'

interface FullPageScrollProps {
  children?: React.ReactNode
  className?: ClassNameValue
}

export default function FullPageScroll({ children, className }: FullPageScrollProps) {
  return (
    <div
      id='fp-container'
      className={cn('w-screen h-svh antialiased [&::-webkit-scrollbar]:hidden [scroll-snap-type:_y_mandatory] overflow-y-scroll', className)}>
      {children}
    </div>
  )
}
