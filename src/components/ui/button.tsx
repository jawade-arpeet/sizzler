import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/utils";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-orange-500 text-gray-50 font-semibold rounded-md py-2 px-3",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
