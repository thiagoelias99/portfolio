import { ComponentProps } from "react"
import { cn } from "../../utils"
import { Loader2Icon } from "lucide-react"

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean
}

export default function Button({ isLoading, disabled, children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-primary min-w-[80%] sm:min-w-56 w-full sm:w-fit flex justify-center items-center text-primary-foreground font-semibold text-white py-4 px-6 rounded-md mt-4 uppercase hover:opacity-90 transition-all duration-400 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none",
        "active:opacity-60 active:shadow-none",
        className
      )}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? (<Loader2Icon className="animate-spin" />) : children}
    </button>
  )
}
