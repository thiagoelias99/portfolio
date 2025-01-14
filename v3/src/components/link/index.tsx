import Link, { LinkProps } from "next/link"
import { cn } from "../../utils"

export default function LinkButton({ ...rest }: LinkProps) {
  return (
    <Link
      className={cn(
        "bg-primary min-w-[80%] sm:min-w-min w-full sm:w-fit flex justify-center items-center text-primary-foreground font-semibold text-white py-4 px-6 rounded-md mt-4 uppercase hover:opacity-90 transition-all duration-400 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none",
        "active:opacity-60 active:shadow-none",
      )}
      {...rest}
    >
      {/* {children} */}
    </Link>
  )
}
