import { ComponentProps } from "react"
import { cn } from "../../utils"

export default function Separator({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full h-[0.5px] bg-muted rounded", className)}
      {...rest}
    ></div>
  )
}
