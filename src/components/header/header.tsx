import { LangOptions } from '@/lib/lang/lang'
import { LangSelection } from './lang-select';

interface HeaderProps {
  lang: LangOptions
  setLang: (lang: LangOptions) => void
}

export default function Header({ lang, setLang }: HeaderProps) {
  return (
    <header
      className='fixed px-4 top-0 left-0 right-0 w-screen h-16 bg-header text-white flex items-center justify-between shadow-shape z-30'
    >
      <h1 className='text-xl font-bold text-foreground'>Thiago Elias</h1>

      <LangSelection lang={lang} setLang={setLang} />
    </header>
  )
}