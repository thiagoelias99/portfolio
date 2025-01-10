import { ComponentProps } from "react"
import { cn } from "../../utils"

export default function TextAreaInputField({ className, ...rest }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn("p-4 rounded-md bg-muted text-muted-foreground min-h-40", className)}
      placeholder="Mensagem"
      {...rest}
    />
  )
}
