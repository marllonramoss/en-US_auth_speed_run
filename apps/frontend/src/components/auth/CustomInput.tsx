"use client";

import React from "react";
import { Eye, Mail, EyeOff, SquarePen } from "lucide-react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hiddenPassword?: boolean;
  setHiddenPassword?: () => void;
  typeOfForm?: "iconStart" | "iconEnd";
  hiddenConfirmPassword?: boolean;
  setHiddenConfirmPassword?: () => void;
  error?: string | undefined;
}

const CustomInput = ({
  label,
  type,
  hiddenPassword,
  typeOfForm,
  setHiddenPassword,
  className,
  error,
  ...props
}: CustomInputProps) => {
  return (
    <div className=" w-full relative">
      <div className="flex gap-2">
        <span className="text-lg text-[#F5F5F5]">{label}</span>
        {error && (
          <p className="text-red-500 text-sm flex items-end pb-1 ">*</p>
        )}
      </div>
      {/* FIRST RENDER --------------------------- */}
      {typeOfForm === "iconEnd" && (
        <div className="flex bg-[#09090B] rounded-lg overflow-hidden">
          <input
            {...props}
            type={type === "password" && !hiddenPassword ? "text" : type}
            className="w-full h-[52px] bg-[#09090B] rounded-md p-4 outline-none "
          />
          <div className="flex items-center justify-center bg-[#09090B] px-2 ">
            <button
              className={`${type === "email" && "cursor-default"}`}
              onClick={setHiddenPassword}
              tabIndex={-1}
            >
              {type === "email" && <Mail className="text-[#A1A1AA]" />}
              {type === "password" && hiddenPassword && (
                <Eye className="text-[#A1A1AA]" />
              )}
              {type === "password" && !hiddenPassword && (
                <EyeOff className="text-[#A1A1AA]" />
              )}
            </button>
          </div>
        </div>
      )}
      {/* SECOND RENDER --------------------------- */}
      {typeOfForm === "iconStart" && (
        <div
          className={`flex bg-[#09090B] rounded-lg overflow-hidden ${className ?? ""} `}
        >
          <div className="flex items-center justify-center bg-[#09090B] px-2 ">
            <button
              className={`${type === "email" && "cursor-default"} ${type === "text" && "cursor-default"}`}
              onClick={setHiddenPassword}
              tabIndex={-1}
            >
              {type === "text" && <SquarePen className="text-[#A1A1AA]" />}
              {type === "email" && <Mail className="text-[#A1A1AA]" />}
              {type === "password" && hiddenPassword && (
                <Eye className="text-[#A1A1AA]" />
              )}
              {type === "password" && !hiddenPassword && (
                <EyeOff className="text-[#A1A1AA]" />
              )}
            </button>
          </div>
          <input
            {...props}
            type={type === "password" && !hiddenPassword ? "text" : type}
            className="w-full h-[52px] bg-[#09090B] rounded-md  outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default CustomInput;
