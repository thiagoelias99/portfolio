import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function Aside() {
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  return (
    <aside
      className={cn('h-full bg-red-800 text-white flex items-center justify-center z-10 transition-all duration-300 ease-in-out delay-50', isAsideOpen ? 'w-64' : 'w-16')}
    >
      <button
        onClick={() => setIsAsideOpen(!isAsideOpen)}
        className='absolute top-0 left-0 w-16 h-16 bg-red-600 text-white flex items-center justify-center'
      >
        {isAsideOpen ? 'Close' : 'Open'}
      </button>
    </aside>
  )
}
