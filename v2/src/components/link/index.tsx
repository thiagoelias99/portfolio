import { ComponentProps } from 'react'
import { cn } from "../../utils"

export default function LinkButton({ children, className, ...rest }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        "bg-primary min-w-[80%] flex justify-center items-center text-primary-foreground font-semibold text-white py-4 px-6 rounded-md mt-4 uppercase hover:opacity-90 transition-all duration-400 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none",
        "active:opacity-60 active:shadow-none",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
