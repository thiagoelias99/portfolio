import { ComponentProps } from "react"
import { cn } from "../../utils"

export function SectionPrimaryTitle({ children, className, ...rest }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn("text-hero-foreground text-3xl sm:text-4xl font-bold p-10 pb-2 uppercase text-center tracking-wider leading-relaxed", className)}
      {...rest}
    >{children}</h2>
  )
}

export function SectionSecondaryTitle({ children, className, ...rest }: ComponentProps<'h3'>) {
  return (
    <h3
      className={cn("text-hero-foreground text-xl sm:text-2xl font-bold w-full text-start leading-relaxed", className)}
      {...rest}
    >{children}</h3>
  )
}

export function SectionParagraph({ children, className, ...rest }: ComponentProps<'p'>) {
  return (
    <p
      className={cn("text-foreground max-w-prose justify-center w-full text-start tracking-wider leading-loose text-base sm:text-lg", className)}
      {...rest}
    >{children}</p>
  )
}

export function ExternalLink({ children, href, className, ...rest }: ComponentProps<'a'>) {
  return (
    <a
      href={href}
      target="_black"
      rel="noreferrer"
      className={cn("text-primary underline", className)}
      {...rest}
    >{children}</a>
  )
}
