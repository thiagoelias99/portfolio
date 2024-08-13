import { ReactNode } from 'react';

interface Props {
  children: ReactNode
  noUnderline?: boolean
}

export default function SectionTitle({ children, noUnderline = false }: Props) {
  return (
    <div className=''>
      <h1 className='text-3xl md:text-5xl font-bold font-serif'>{children}</h1>
      {!noUnderline && <div className='h-1 rounded-full bg-primary'></div>}
    </div>
  )
}
