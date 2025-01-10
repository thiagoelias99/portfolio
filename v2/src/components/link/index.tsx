import { ComponentProps } from 'react'
import { cn } from "../../utils"

export default function LinkButton({ children, className, ...rest }: ComponentProps<'a'>) {
  return (
    <a
      className={cn("bg-primary min-w-[80%] flex justify-center items-center text-primary-foreground font-semibold text-white py-4 px-6 rounded-md mt-4 uppercase hover:-translate-y-1 transition-all duration-400 shadow-sm", className)}
      {...rest}
    >
      {children}
    </a>
  )
}
