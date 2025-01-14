import { ComponentProps } from "react"
import { cn } from "../../utils"

interface FormInputLabelProps extends ComponentProps<"label"> {
  spacer?: boolean
}

export default function FormInputLabel({ spacer, children, className, ...rest }: FormInputLabelProps) {
  return (
    <label
      className={cn("text-muted-foreground font-semibold", spacer ? "mt-3" : "", className)}
      {...rest}
    >
      {children}
    </label>
  )
}
