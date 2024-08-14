import { cn } from '@/lib/utils'
import { ChevronsDownIcon } from 'lucide-react'
import { ClassNameValue } from 'tailwind-merge'

interface ISectionScrollDownProps {
  className?: ClassNameValue
}

export default function SectionScrollDown({ className }: ISectionScrollDownProps) {
  return (
    <div className={cn('w-full mt-10 mb-20', className)}>
      <ChevronsDownIcon className='w-12 h-12 text-foreground mx-auto mt-4 animate-bounce translate-x-10' />
    </div>
  )
}
