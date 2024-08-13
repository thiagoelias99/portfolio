import { cn } from '@/lib/utils'
import { PropsWithChildrenAndClassName } from '@/types'

export default function SectionP({ children, className }: PropsWithChildrenAndClassName) {
  return (
    <p className={cn('text-base md:pt-1 md:text-xl', className)}>{children}</p>
  )
}
