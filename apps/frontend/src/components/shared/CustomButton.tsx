import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CustomButton = ({
  children,
  className,
  onClick,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-[#22C55E] text-xl font-bold text-[#F5F5F5] h-[52px] w-full rounded-md ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
