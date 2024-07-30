import { LangOptions } from '@/lib/lang/lang'
import ReactCountryFlag from 'react-country-flag';

interface HeaderProps {
  setLang: (lang: LangOptions) => void
}
export default function Header({ setLang }: HeaderProps) {
  return (
    <header
      className='fixed px-4 top-0 left-0 right-0 w-screen h-16 bg-header text-white flex items-center justify-between'
    >
      <h1 className='text-xl font-bold text-foreground'>Thiago Elias</h1>

      <div className='flex gap-4'>
        <button
          onClick={() => setLang(LangOptions.EN)}
        >
          <ReactCountryFlag
            countryCode='US'
            svg
            style={{
              width: '2em',
              height: '2em',
            }}
            alt='Select English language'
          />
        </button>
        <button
          onClick={() => setLang(LangOptions.PT_BR)}
        >
          <ReactCountryFlag
            countryCode='BR'
            svg
            style={{
              width: '2em',
              height: '2em',
            }}
            alt='Selecione Português Brasileiro'
          />
        </button>
      </div>
    </header>
  )
}