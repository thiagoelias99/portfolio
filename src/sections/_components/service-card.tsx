import { IService, ITranslation } from '@/lib/lang/lang'
import { useState } from 'react'

interface ServiceCardProps {
  translation: ITranslation
  service: IService
}

export default function ServiceCard({ service, translation }: ServiceCardProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className='bg-card text-card-foreground p-4 rounded-lg shadow border-b-8 border-primary max-w-screen-md mx-auto'>
      <h2 className='text-2xl md:text-4xl font-semibold font-serif'>{service.name}</h2>
      <div className='tracking-wider pt-2 indent-4 hyphens-auto text-pretty text-justify md:text-start md:text-xl'>
        <div hidden={showMore}>
          <p className='line-clamp-4'>{service.description}</p>
        </div>
        <div
          hidden={!showMore}
          className='space-y-4'>
          <p>{service.description}</p>
          <p>{service.description2}</p>
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className='pt-4 text-primary font-bold underline'
        >
          {showMore ? translation.services.showLess : translation.services.showMore}
        </button>
      </div>
    </div>

  )
}
