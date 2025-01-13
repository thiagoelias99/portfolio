import { ComponentProps } from "react"
import { cn } from "../../utils"

export default function SkillItem({ children, className, ...rest }: ComponentProps<'li'>) {
  return (
    <li
      className={cn("text-sm lg:text-base font-bold bg-muted text-muted-foreground px-4 py-2 lg:py-4 rounded text-center", className)}
      {...rest}
    >
      {children}
    </li>
  )
}
