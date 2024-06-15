import React, { InputHTMLAttributes } from "react";
import { cn } from "@/utils/utils";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  placeholder,
  name,
  type,
  ...props
}) => {
  return (
    <input
      placeholder={placeholder}
      className={cn(
        "w-full placeholder:font-extralight text-sm border border-zinc-600 rounded-md py-1.5 px-2.5",
        className,
      )}
      type={type}
      name={name}
      {...props}
    />
  );
};

export { Input };
