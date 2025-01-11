import { useState } from "react"
import menuIcon from "../../assets/icons/menu.svg"
import xIcon from "../../assets/icons/x.svg"
import LinkItem from "./link-item"
import Separator from "../separator"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="sticky top-0 z-10 bg-popover w-screen h-16 flex items-center justify-between px-6">
      <h1 className="uppercase font-bold">Thiago Elias</h1>
      <button
        onClick={toggleMenu}
        className="w-6 h-6">
        {
          menuOpen ? (
            <img src={xIcon} alt="abrir menu" />
          ) : (
            <img src={menuIcon} alt="abrir menu" />
          )
        }
      </button>
      <nav
        className={`absolute w-full top-16 left-0 right-0 bg-white shadow-md rounded-lg rounded-t-none p-4 transition-all duration-300 ease-in-out transform ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col justify-end items-end gap-4 pr-4 w-full">
          <LinkItem href="/#hero" onClick={toggleMenu}>Início</LinkItem>
          <Separator />
          <LinkItem href="/#sobre" onClick={toggleMenu}>Sobre Mim</LinkItem>
          <Separator />
          <LinkItem href="/projetos" onClick={toggleMenu}>Projetos</LinkItem>
          <Separator />
          <LinkItem href="#contato" onClick={toggleMenu}>Contato</LinkItem>
        </ul>
      </nav>
    </header>
  )
}
