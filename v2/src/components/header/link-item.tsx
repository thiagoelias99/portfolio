import { ComponentProps } from "react"
import { cn } from "../../utils"

interface LinkItemProps extends ComponentProps<"li"> {
  href: string
}

export default function LinkItem({ href, children, className, ...rest }: LinkItemProps) {
  return (
    <li
      className={cn("", className)}
      {...rest}
    >
      <a
        href={href}
        className="text-foreground hover:underline hover:text-primary w-full text-end text-lg sm:text-xs sm:font-semibold sm:uppercase leading-relaxed">
        {children}
      </a>
    </li>
  )
}
