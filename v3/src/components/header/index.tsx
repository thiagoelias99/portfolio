"use client"

import { useState } from "react"
import menuIcon from "../../../public/icons/menu.svg"
import xIcon from "../../../public/icons/x.svg"
import LinkItem from "./link-item"
import Separator from "../separator"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: "/#hero", text: "Início" },
    { href: "/#sobre", text: "Sobre Mim" },
    { href: "/projetos", text: "Projetos" },
    { href: "#contato", text: "Contato" },
  ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="sticky top-0 z-10 bg-popover w-screen h-16">
      <div className="w-full container mx-auto h-full flex items-center justify-between px-6 lg:px-16">
        <h1 className="uppercase font-bold"><Link href="/">Thiago Elias</Link></h1>
        <button
          onClick={toggleMenu}
          className="w-6 h-6 sm:hidden">
          {
            menuOpen ? (
              <Image src={xIcon} alt="fechar menu" />
            ) : (
              <Image src={menuIcon} alt="abrir menu" />
            )
          }
        </button>
        <nav
          className={`absolute w-full top-16 left-0 right-0 bg-white shadow-md rounded-lg rounded-t-none p-4 transition-all duration-300 ease-in-out transform ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col justify-end items-end gap-4 pr-4 w-full">
            {links.map((link, index) => (
              <div key={index}>
                <LinkItem
                  href={link.href}
                  onClick={toggleMenu}
                >{link.text}</LinkItem>
                <Separator className="last:hidden" />
              </div>
            ))}
          </ul>
        </nav>
        <nav className="hidden sm:block">
          <ul className="flex gap-6">
            {links.map((link, index) => (
              <LinkItem key={index} href={link.href}>{link.text}</LinkItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
