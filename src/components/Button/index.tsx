import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-[#e56700] px-4 py-2 min-w-[48px] rounded-md text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
