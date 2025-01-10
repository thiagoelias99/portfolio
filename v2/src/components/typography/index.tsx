import { ComponentProps } from "react"
import { cn } from "../../utils"

export function SectionPrimaryTitle({ children, className, ...rest }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn("text-hero-foreground text-3xl font-bold p-10 uppercase text-justify tracking-wider leading-relaxed", className)}
      {...rest}
    >{children}</h2>
  )
}

export function SectionParagraph({ children, className, ...rest }: ComponentProps<'p'>) {
  return (
    <p
      className={cn("text-foreground max-w-prose justify-center w-full text-start tracking-wider leading-relaxed", className)}
      {...rest}
    >{children}</p>
  )
}
