import FullPageSection from '@/components/full-page-scroll/full-page-section'
import SectionTitle from '@/components/ui/section-title'
import { ITranslation } from '@/lib/lang/lang'
import { cn } from '@/lib/utils'
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'
import { ClassNameValue } from 'tailwind-merge'

interface ISectionHomeProps {
  setActiveSection: (section: string) => void
  translation: ITranslation
  className?: ClassNameValue
}

export default function ContactsSection({ setActiveSection, className, translation }: ISectionHomeProps) {
  return (
    <FullPageSection
      disableScrollDownNotification
      id={translation.nav_items.contact.toLowerCase()}
      setActiveSection={setActiveSection}
      className={cn('max-w-screen-xl mx-auto', className)}
    >
      <div className='w-full h-full flex flex-col justify-center items-center -translate-y-16'>
        <div className='bg-card w-full pb-4'>
          <div className='w-full flex justify-center items-center -translate-y-5'>
            <div className='w-full h-1 bg-primary rounded-r-full'></div>
            <SectionTitle noUnderline className='text-nowrap px-2'>{translation.contactPhrase}</SectionTitle>
            <div className='w-full h-1 bg-primary rounded-l-full'></div>
          </div>
          <div className='w-full md:text-lg flex flex-col gap-2 px-4 justify-center items-center'>
            <div className='w-full max-w-[440px] bg-background px-12 py-3 flex justify-between items-center rounded-md'>
              <MailIcon size={32} className='text-card-foreground' />
              <a
                target='_blank'
                rel='noreferrer'
                href={`mailto:${translation.email}`}
                className='text-primary'>{translation.email}</a>
            </div>
            <div className='w-full max-w-[440px] bg-background px-12 py-3 flex justify-between items-center gap-4 rounded-md'>
              <PhoneIcon size={32} className='text-card-foreground' />
              <a
                target='_blank'
                rel='noreferrer'
                href={translation.whatsapp}
                className='text-primary'>{translation.phone}</a>
            </div>
            <div className='w-full max-w-[440px] bg-background px-12 py-3 flex justify-between items-center gap-4 rounded-md'>
              <MapPinIcon size={32} className='text-card-foreground' />
              <a
                target='_blank'
                rel='noreferrer'
                href={translation.addressLink}
                className='text-primary'>{translation.address}</a>
            </div>
          </div>
          <div className='w-full flex justify-center items-center translate-y-10'>
            <div className='w-full h-1 bg-primary rounded-r-full'></div>
            <ul className='px-6 pt-6 flex justify-center items-center gap-8 -translate-y-3'>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={translation.linkedIn}
                ><LinkedinIcon /></a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={translation.github}
                ><GithubIcon /></a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={translation.instagram}
                ><InstagramIcon /></a>
              </li>
            </ul>
            <div className='w-full h-1 bg-primary rounded-l-full'></div>
          </div>
        </div>
        <p className='text-primary font-serif text-2xl md:text-4xl translate-y-24'>"{translation.finalPhrase}"</p>
      </div>
    </FullPageSection>
  )
}