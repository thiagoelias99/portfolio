import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LangOptions } from '@/lib/lang/lang'
import ReactCountryFlag from 'react-country-flag'

interface LangSelectionProps {
  lang: LangOptions
  setLang: (lang: LangOptions) => void
}

export function LangSelection({ lang, setLang }: LangSelectionProps) {
  return (
    <Select 
    value={lang} 
    onValueChange={setLang}
    >
      <SelectTrigger aria-label='Select a language' className="w-[160px] bg-transparent border-0 outline-none flex justify-end gap-2">
        <SelectValue aria-label='Select a language' className='w-full outline-none'
          placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent className=''>
        <SelectItem value={LangOptions.EN}>
          <div className='w-full flex justify-end items-center gap-2'>
            <ReactCountryFlag
              countryCode='US'
              svg
              style={{
                width: '2em',
                height: '2em',
              }}
              alt='Select English language'
            />
            <span>English</span>
          </div>
        </SelectItem>
        <SelectItem value={LangOptions.PT_BR}>
          <div className='w-full flex justify-end items-center gap-2'>
            <ReactCountryFlag
              countryCode='BR'
              svg
              style={{
                width: '2em',
                height: '2em',
              }}
              alt='Selecione Português Brasileiro'
            />
            <span>Português</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
