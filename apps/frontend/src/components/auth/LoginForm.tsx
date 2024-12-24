"use client";

import React, { useEffect } from "react";
import CustomInput from "./CustomInput";
import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import Link from "next/link";

const LoginForm = () => {
  const [hiddenPassword, setHiddenPassword] = React.useState<boolean>(true);

  const handleHiddenPassword = () => {
    setHiddenPassword(!hiddenPassword);
  };
  useEffect(() => {
    console.log(hiddenPassword);
  }, [hiddenPassword]);

  return (
    <div className="w-[631px] h-[748px] bg-[#18181B] rounded-md px-16 py-7">
      <div className="w-full  flex items-center justify-center flex-col">
        <div className="relative w-[201px] h-[148px] ">
          <Image src={"/logo.png"} alt="" fill />
        </div>
        <span className="text-2xl text-[#F5F5F5] font-bold mb-8">
          Sign in with your account
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <CustomInput typeOfForm="iconEnd" label="Email" type="email" />
        <CustomInput
          typeOfForm="iconEnd"
          hiddenPassword={hiddenPassword}
          setHiddenPassword={handleHiddenPassword}
          label="Password"
          type="password"
        />
      </div>
      <div className="flex justify-end mt-1">
        <Link href="#" className="text-lg text-[#979797] -tracking-tight">
          Forgot password?
        </Link>
      </div>
      <CustomButton className="mt-4">Login</CustomButton>
      <div className="inline-flex items-center justify-center w-full mt-4 ">
        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2 text-[#979797] dark:bg-[#18181B] text-lg">
          or
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
