import { ComponentProps } from "react"
import { cn } from "../../utils"

export default function Section({ children, className, ...rest }: ComponentProps<'section'>) {
  return (
    <section
      id="sobre"
      className={cn("w-full py-10 p-6 flex flex-col items-center justify-start gap-4", className)}
      {...rest}
    >
      {children}
    </section>
  )
}
