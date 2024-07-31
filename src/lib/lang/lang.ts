import { PT_BR } from './pt-br'
import { EN } from './en'

export enum LangOptions {
  PT_BR = 'pt-br',
  EN = 'en'
}

export interface ITranslation {
  name: string,
  linkedIn: string,
  github: string,
  email: string,
  nav_items: {
    home: string
    skills: string
    projects: string
    services: string
    about: string
    contact: string
  },
  home: {
    title: string,
    phrase: string,
    welcome: string,
    firstSkill: string,
    secondSkill: string,
    coverAlt: string
  }
}

export function getTranslation(lang: LangOptions) {
  let translation: ITranslation

  switch (lang) {
    case LangOptions.PT_BR:
      translation = PT_BR
      break
    case LangOptions.EN:
      translation = EN
      break
    default:
      translation = EN
  }

  return translation
}