import { ComponentProps } from "react"
import { cn } from "../../utils"

export default function TextInputField({ className, ...rest }: ComponentProps<"input">) {
  return (
    <input
      className={cn("p-4 rounded-md bg-muted text-muted-foreground", className)}
      {...rest}
    />
  )
}
