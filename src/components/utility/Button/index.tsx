import React, { ReactNode } from "react";

interface ButtonProps {
  icon?: ReactNode,
  text?: String,
  onClick?: () => void,
  onSubmit?: (e: React.FormEvent) => void,
  disabled?: boolean,
  type?: 'button' | 'submit',
  className?: string,
  rounded?: boolean,
  wFull?: boolean,
  variant?: 'fill' | 'outline' | 'white'
}

const Button = ({
  icon,
  text,
  onClick,
  onSubmit,
  disabled = false,
  type = "button",
  className = "",
  rounded = false,
  wFull = false,
  variant = "fill",
  ...props
}: ButtonProps) => {
  const variants = {
    fill: "bg-neutral-800 text-white hover:bg-neutral-900",
    outline:
      "border-2 border-neutral-400 bg-neutral-100 text-neutral-500 hover:bg-neutral-200",
    white: "bg-white text-neutral-800 hover:bg-neutral-200",
  };
  return (
    <button
      className={[
        "flex justify-center items-center gap-3 transition-all duration-100 h-fit",
        variants[variant],
        wFull ? "w-full" : "w-fit",
        !rounded ? "px-6 py-3" : "p-3",
        !rounded ? "rounded-lg" : "rounded-full",
        "active:scale-[0.98]",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      ].join(" ")}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      type={type}
      {...props}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      {text && <span className="whitespace-nowrap">{text}</span>}
    </button>
  );
};

export default Button;
