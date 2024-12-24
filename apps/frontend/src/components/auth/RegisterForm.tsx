"use client";

import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";

const RegisterForm = () => {
  const [hiddenPassword, setHiddenPassword] = React.useState<boolean>(true);

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };

  return (
    <div className="w-[631px] h-[776px] bg-[#18181B] rounded-md flex flex-col px-16 py-14  justify-center">
      <span className="w-full text-xl font-bold flex justify-center items-center mb-2 ">
        Sign-up
      </span>

      <div className="flex flex-col gap-5">
        <CustomInput typeOfForm="iconStart" label="Name" type="text" />
        <CustomInput typeOfForm="iconStart" label="Email" type="email" />
        <CustomInput
          typeOfForm="iconStart"
          label="Password"
          type="password"
          hiddenPassword={hiddenPassword}
          setHiddenPassword={handleHiddenPassword}
        />
        <CustomInput
          typeOfForm="iconStart"
          label="Confirm Password"
          type="password"
        />
        <CustomInput typeOfForm="iconStart" label="Tell" type="tel" />
      </div>
      <div className="mt-12 flex flex-col gap-8 justify-center items-center">
        <CustomButton>Create Account</CustomButton>
        <div className="flex gap-1">
          <span>Already have an account? </span>
          <Link href={"/login"} className="text-[#22C55E]">
            Sign-in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
