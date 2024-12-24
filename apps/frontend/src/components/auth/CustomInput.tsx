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
}

const CustomInput = ({
  label,
  type,
  hiddenPassword,
  typeOfForm,
  setHiddenPassword,
  ...props
}: CustomInputProps) => {
  return (
    <div className=" w-full ">
      <span className="text-lg text-[#F5F5F5]">{label}</span>
      {typeOfForm === "iconEnd" && (
        <div className="flex bg-[#09090B] rounded-lg overflow-hidden">
          <input
            {...props}
            type={type === "password" && !hiddenPassword ? "text" : type}
            className="w-full h-[52px] bg-[#09090B] rounded-md p-4 outline-none"
          />
          <div className="flex items-center justify-center bg-[#09090B] px-2 ">
            <button
              className={`${type === "email" && "cursor-default"}`}
              onClick={setHiddenPassword}
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
      {typeOfForm === "iconStart" && (
        <div className="flex bg-[#09090B] rounded-lg overflow-hidden">
          <div className="flex items-center justify-center bg-[#09090B] px-2 ">
            <button
              className={`${type === "email" && "cursor-default"} ${type === "text" && "cursor-default"}`}
              onClick={setHiddenPassword}
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
