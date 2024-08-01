import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className='text-2xl sm:text-4xl font-bold'>{children}</h1>
  )
}
