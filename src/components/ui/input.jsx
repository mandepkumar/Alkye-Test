import * as React from "react";

import { cn } from "@/lib/utils";

const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
  const [inputType, setInputType] = React.useState("password");
  return (
    <div
      ref={ref}
      className={cn(
        "flex justify-between h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
    >
      <input
        type={inputType}
        {...props}
        className="border-none p-0 focus:border-none focus:outline-none focus:border-0 w-full"
      />
      <img
        src={`/assets/icons/eye-${inputType === "password" ? "off" : "on"}.svg`}
        alt="password-eye"
        onMouseEnter={() => setInputType("text")}
        onMouseLeave={() => setInputType("password")}
      />
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  if (type === "password")
    return <PasswordInput className={className} ref={ref} {...props} />;
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
