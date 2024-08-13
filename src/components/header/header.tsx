import { LangOptions } from '@/lib/lang/lang'
import { LangSelection } from './lang-select';

interface HeaderProps {
  lang: LangOptions
  setLang: (lang: LangOptions) => void
}

export default function Header({ lang, setLang }: HeaderProps) {
  return (
    <header
      className='fixed px-4 top-0 left-0 right-0 w-screen h-16 bg-background text-foreground z-30'
    >
      <div className='w-full max-w-[1440px] mx-auto h-full flex items-center justify-between'>
        <h1 className='text-xl font-bold text-foreground'>Thiago Elias</h1>
        <LangSelection lang={lang} setLang={setLang} />
      </div>
    </header>
  )
}