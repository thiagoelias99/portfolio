import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
  children: ReactNode
  noUnderline?: boolean
  className?: ClassNameValue
}

export default function SectionTitle({ children, noUnderline = false, className }: Props) {
  return (
    <div className=''>
      <h1 className={cn('text-3xl md:text-5xl font-bold font-serif', className)}>{children}</h1>
      {!noUnderline && <div className='h-1 rounded-full bg-primary'></div>}
    </div>
  )
}
