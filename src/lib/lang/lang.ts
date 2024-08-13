import { PT_BR } from './pt-br'
import { EN } from './en'

export enum LangOptions {
  PT_BR = 'pt-br',
  EN = 'en'
}

export interface ISkill {
  name: string,
  description: string
  imageUrl: string,
  stacks: IStack[]
}

export interface IStack {
  name: string
}

export interface IProject {
  name: string,
  description: string,
  imageUrl: string,
  stacks: IStack[]
}

export interface ITranslation {
  name: string,
  linkedIn: string,
  github: string,
  email: string,
  lang: string,
  nav_items: {
    home: string
    skills: string
    projects: string
    services: string
    about: string
    contact: string
  },
  home: {
    hello: string,
    title: string,
    words: string[],
    phrase: string,
    welcome: string,
    firstSkill: string,
    secondSkill: string,
    coverAlt: string
    contact: string
  },
  skills: {
    title: string,
    skills: ISkill[]
  },
  projects: {
    title: string,
    projects: IProject[]
  },
  about: {
    title: string,
    presentation: string,
    emphasis: string,
    presentationContinuation: string,
    presentation2: string,
    listItems: string[]
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