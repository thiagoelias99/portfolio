import { ComponentProps } from 'react'
import { cn } from "../../utils"

export default function Button({ children, className, ...rest }: ComponentProps<'button'>) {
  return (
    <button
      className={cn("bg-primary min-w-[80%] flex justify-center items-center text-primary-foreground font-semibold text-white py-4 px-6 rounded-md mt-4 uppercase hover:-translate-y-1 transition-all duration-400 shadow-sm", className)}
      {...rest}
    >
      {children}
    </button>
  )
}
