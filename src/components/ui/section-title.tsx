import { PropsWithChildren } from 'react';

export default function SectionTitle({ children }: PropsWithChildren) {
  return (
    <div className=''>
      <h1 className='text-3xl md:text-5xl font-bold font-serif'>{children}</h1>
      <div className='h-1 rounded-full bg-primary'></div>
    </div>
  )
}
