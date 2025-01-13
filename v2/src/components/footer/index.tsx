import { SectionSecondaryTitle } from "../typography"
import LinkedinLogo from "../../assets/logos/linkedin.png"
import GithubLogo from "../../assets/logos/github.png"
import Separator from "../separator"

export default function Footer() {
  return (
    <footer className="w-full bg-hero-foreground text-hero px-6 pt-10 pb-6">
      <div className="w-full flex flex-col sm:flex-row-reverse justify-start items-start gap-6">
        <div className="w-full flex flex-col sm:w-1/2 sm:pr-4">
          <SectionSecondaryTitle className="text-hero sm:text-xl">SOCIAL</SectionSecondaryTitle>
          <div className="space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/eng-thiagoelias/" target="_blank" rel="noreferrer">
              <img src={LinkedinLogo} alt="Linkedin" className="w-5 h-5 inline-block" />
            </a>
            <a href="https://github.com/thiagoelias99" target="_blank" rel="noreferrer">
              <img src={GithubLogo} alt="Github" className="w-5 h-5 inline-block" />
            </a>
          </div>
        </div>
        <div className="w-full">
          <SectionSecondaryTitle className="text-hero sm:text-xl">THIAGO ELIAS</SectionSecondaryTitle>
          <p className="text-xs mt-2">Desenvolvedor especializado em aplicações web, mobile e desktop</p>
        </div>
      </div>
      <Separator className="bg-muted-foreground my-8" />
      <div className="w-full flex flex-row justify-center items-center">
        <span className="w-full text-[10px] text-center">© Todos os Direitos Reservados {new Date().getFullYear()} - Criado por <a className="underline font-semibold" href="www.thiagoeliaseng.com.br">Thiago Elias</a></span>
      </div>
    </footer>
  )
}
